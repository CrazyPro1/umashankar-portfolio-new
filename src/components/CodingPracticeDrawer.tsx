import { useEffect, useRef, useState } from 'react';
import { Code2, Play, Square, X } from 'lucide-react';
import { languages, Language, runCode } from '../practice/run';

export default function CodingPracticeDrawer({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const stop = useRef<(() => void) | null>(null);
  const [language, setLanguage] = useState<Language>('java');
  const [drafts, setDrafts] = useState(() => {
    const defaults = Object.fromEntries(languages.map(l => [l.id, l.code]));
    try {
      const saved = JSON.parse(sessionStorage.getItem('practice-drafts') || '{}');
      for (const key of Object.keys(defaults)) if (typeof saved?.[key] === 'string') defaults[key] = saved[key];
    } catch { /* Storage may be disabled. */ }
    return defaults;
  });
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('Run your code to see output here.');
  const [running, setRunning] = useState(false);
  useEffect(() => { try { sessionStorage.setItem('practice-drafts', JSON.stringify(drafts)); } catch { /* Optional storage. */ } }, [drafts]);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { stop.current?.(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  const run = () => {
    setOutput(''); setRunning(true);
    stop.current = runCode(language, drafts[language], stdin,
      text => setOutput(current => (current + text).slice(0, 52000)),
      () => { setRunning(false); setOutput(current => current || 'Finished successfully (no output).'); });
  };
  return (
    <dialog ref={dialog} id="coding-practice" aria-labelledby="practice-title" onCancel={onClose}
      onClick={event => { if (event.target === dialog.current) onClose(); }} className="practice-dialog no-print">
      <div className="flex h-full flex-col bg-[#12171f] text-[#e8ecef]">
        <header className="flex items-center justify-between gap-3 border-b border-white/10 p-5">
          <div><h2 id="practice-title" className="flex items-center gap-2 text-lg font-semibold"><Code2 className="text-[#e3a857]" size={20} /> Coding practice</h2>
            <p className="mt-1 text-xs text-[#9ba7b4]">Your code. Your thinking. No AI suggestions.</p></div>
          <button autoFocus onClick={onClose} aria-label="Close coding practice" className="rounded-lg p-2 hover:bg-white/10"><X size={20} /></button>
        </header>
        <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-5">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="practice-language" className="text-sm">Language</label>
            <select id="practice-language" value={language} disabled={running} onChange={e => { setLanguage(e.target.value as Language); setOutput('Run your code to see output here.'); }} className="rounded-lg border border-white/20 bg-[#1b222c] p-2 text-sm">
              {languages.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
            </select>
            <span className="text-xs text-[#9ba7b4]">{language === 'java' ? 'Java 21 · prog.java' : language === 'sql' ? 'Fresh PostgreSQL database each run' : language === 'typescript' ? 'TypeScript → JavaScript · no type checking' : 'Browser runtime'}</span>
          </div>
          <div className="text-xs leading-relaxed text-[#9ba7b4]">
            {language === 'java' ? <>Run sends your code and input to <a href="https://wandbox.org" target="_blank" rel="noreferrer" className="underline">Wandbox</a> for compilation as prog.java. Use class Main (without public). An internet connection is required.</> : language === 'python' ? 'Python loads on the first run. Use input() to read the input below.' : language === 'sql' ? 'Run SQL statements here; psql terminal commands are not supported.' : 'Use console.log() for output and readLine() or stdin for input. Browser DOM and npm imports are not available.'}
          </div>
          <label htmlFor="practice-code" className="text-xs font-medium uppercase tracking-wider text-[#9ba7b4]">Code</label>
          <textarea id="practice-code" value={drafts[language]} onChange={e => setDrafts(d => ({ ...d, [language]: e.target.value }))}
            spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off" data-gramm="false" aria-label="Code editor"
            className="min-h-[260px] flex-1 resize-y rounded-xl border border-white/15 bg-[#0d1117] p-4 font-mono text-sm leading-6 outline-none focus:border-[#e3a857]" />
          <label htmlFor="practice-input" className="text-xs font-medium uppercase tracking-wider text-[#9ba7b4]">Standard input (optional)</label>
          <textarea id="practice-input" value={stdin} onChange={e => setStdin(e.target.value)} disabled={language === 'sql'} rows={2} spellCheck={false} className="rounded-lg border border-white/15 bg-[#0d1117] p-3 font-mono text-sm disabled:opacity-40" placeholder="One input per line" />
          <div className="flex items-center gap-3">
            <button onClick={run} disabled={running || !drafts[language].trim()} className="flex items-center gap-2 rounded-lg bg-[#e3a857] px-4 py-2 text-sm font-semibold text-[#12171f] disabled:opacity-50"><Play size={16} />{running ? 'Running…' : 'Run code'}</button>
            {running && <button onClick={() => { stop.current?.(); setOutput(current => current + '\nStopped.'); }} className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm"><Square size={14} />Stop</button>}
            <span className="text-xs text-[#9ba7b4]">60-second run limit</span>
          </div>
          <section aria-label="Output" aria-busy={running} className="rounded-xl border border-white/15 bg-[#0d1117] p-4">
            <h3 className="mb-2 text-xs uppercase tracking-wider text-[#9ba7b4]">Output</h3>
            <pre className="max-h-60 min-h-24 overflow-auto whitespace-pre-wrap break-words font-mono text-sm">{output || 'Starting runtime…'}</pre>
          </section>
          <p role="status" className="sr-only">{running ? 'Code is running' : 'Ready'}</p>
        </div>
      </div>
    </dialog>
  );
}
