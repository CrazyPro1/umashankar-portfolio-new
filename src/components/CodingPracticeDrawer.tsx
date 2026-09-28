import { ReactNode, useEffect, useRef, useState } from 'react';
import { Code2, Play, Square, X, Maximize2, Minimize2, Minus, ChevronDown, ChevronUp, Plus, Trash2 } from 'lucide-react';
import { languages, Language, matchesExpected, RunResult, runCode } from '../practice/run';

type PanelId = 'code' | 'input' | 'output';
type TestCase = { id: number; input: string; expected: string };
type TestResult = RunResult & { id: number; passed: boolean };
const field = 'w-full resize-y rounded-lg border border-white/15 bg-[#0d1117] p-3 font-mono text-sm focus:border-[#e3a857] focus:outline-none disabled:opacity-50';
const button = 'rounded-lg border border-white/20 px-3 py-2 text-xs hover:bg-white/10 disabled:opacity-40';
const duration = (ms: number) => ms < 1000 ? `${ms.toFixed(1)} ms` : `${(ms / 1000).toFixed(2)} s`;

function Panel({ id, title, focus, setFocus, children }: { id: PanelId; title: string; focus: PanelId | null; setFocus: (id: PanelId | null) => void; children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  if (focus && focus !== id) return null;
  return <section aria-label={title} className={`rounded-xl border border-white/15 bg-[#0d1117] ${focus === id ? 'flex min-h-0 flex-1 flex-col' : ''}`}>
    <div className="flex items-center justify-between gap-3 px-4 py-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#9ba7b4]">{title}</h3>
      <div className="flex gap-1">
        <button className="rounded p-2 hover:bg-white/10" aria-label={`${focus === id ? 'Restore' : 'Maximize'} ${title}`} onClick={() => { setCollapsed(false); setFocus(focus === id ? null : id); }}>{focus === id ? <Minimize2 size={14} /> : <Maximize2 size={14} />}</button>
        <button className="rounded p-2 hover:bg-white/10" aria-label={`${collapsed ? 'Expand' : 'Collapse'} ${title}`} aria-expanded={!collapsed} onClick={() => { setCollapsed(!collapsed); if (focus === id) setFocus(null); }}>{collapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}</button>
      </div>
    </div>
    {!collapsed && <div className={`p-3 pt-0 ${focus === id ? 'min-h-0 flex-1 overflow-auto' : ''}`}>{children}</div>}
  </section>;
}

export default function CodingPracticeDrawer({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const stop = useRef<(() => void) | null>(null);
  const cancelSuite = useRef(false);
  const nextId = useRef(1);
  const [language, setLanguage] = useState<Language>('java');
  const [drafts, setDrafts] = useState(() => {
    const defaults = Object.fromEntries(languages.map(l => [l.id, l.code]));
    try { const saved = JSON.parse(sessionStorage.getItem('practice-drafts') || '{}'); for (const key of Object.keys(defaults)) if (typeof saved?.[key] === 'string') defaults[key] = saved[key]; } catch { /* Optional storage. */ }
    return defaults;
  });
  const [stdin, setStdin] = useState('');
  const [output, setOutput] = useState('Run your code to see output here.');
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState<RunResult | null>(null);
  const [tests, setTests] = useState<Partial<Record<Language, TestCase[]>>>({});
  const [results, setResults] = useState<TestResult[]>([]);
  const [tab, setTab] = useState<'stdin' | 'tests'>('stdin');
  const [maximized, setMaximized] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [width, setWidth] = useState(820);
  const [focus, setFocus] = useState<PanelId | null>(null);
  const cases = tests[language] || [];
  useEffect(() => { try { sessionStorage.setItem('practice-drafts', JSON.stringify(drafts)); } catch { /* Optional storage. */ } }, [drafts]);
  useEffect(() => {
    if (minimized) { dialog.current?.close(); return; }
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.current?.showModal(); document.body.style.overflow = 'hidden';
    return () => { dialog.current?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, [minimized]);
  useEffect(() => () => { cancelSuite.current = true; stop.current?.(); }, []);
  const invalidate = () => { setResults([]); setLastRun(null); };
  const updateTests = (updated: TestCase[]) => { setTests(current => ({ ...current, [language]: updated })); invalidate(); };
  const execute = (input: string) => new Promise<RunResult>(resolve => {
    stop.current = runCode(language, drafts[language], input, text => setOutput(current => (current + text).slice(0, 52000)), resolve);
  });
  const run = async (suite: boolean) => {
    cancelSuite.current = false; setRunning(true); setOutput(''); invalidate();
    try {
      if (suite) {
        for (const test of cases) {
          if (cancelSuite.current) break;
          setOutput('');
          const result = await execute(test.input);
          setLastRun(result);
          setResults(current => [...current, { ...result, id: test.id, passed: result.status === 'success' && matchesExpected(result.output, test.expected) }]);
        }
      } else { setLastRun(await execute(stdin)); }
    } finally { stop.current = null; setRunning(false); }
  };
  const halt = () => { cancelSuite.current = true; stop.current?.(); };
  return <>
    {minimized && <div className="practice-minimized no-print" role="region" aria-label="Minimized coding practice">
      <button onClick={() => setMinimized(false)} className="flex items-center gap-2 p-3 text-sm"><Code2 size={18} /><span>{running ? 'Code running…' : 'Coding practice'}</span><Maximize2 size={16} /><span className="sr-only">Restore coding practice</span></button>
      <button onClick={onClose} aria-label="Close coding practice" className="p-3"><X size={18} /></button>
    </div>}
    <dialog ref={dialog} id="coding-practice" aria-labelledby="practice-title" onCancel={onClose}
      onClick={event => { if (event.target === dialog.current) onClose(); }} className="practice-dialog no-print" style={{ width: maximized ? '100vw' : `min(${width}px, 100vw)` }}>
      <div className="flex h-full flex-col bg-[#12171f] text-[#e8ecef]">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 p-4">
          <div><h2 id="practice-title" className="flex items-center gap-2 text-base font-semibold"><Code2 className="text-[#e3a857]" size={20} /> Coding practice</h2><p className="mt-1 text-xs text-[#9ba7b4]">No AI suggestions</p></div>
          <div className="flex gap-1">
            <button onClick={() => setMinimized(true)} aria-label="Minimize coding practice" className="rounded-lg p-2 hover:bg-white/10"><Minus size={18} /></button>
            <button onClick={() => setMaximized(!maximized)} aria-label={maximized ? 'Restore drawer size' : 'Maximize coding practice'} className="rounded-lg p-2 hover:bg-white/10">{maximized ? <Minimize2 size={18} /> : <Maximize2 size={18} />}</button>
            <button autoFocus onClick={onClose} aria-label="Close coding practice" className="rounded-lg p-2 hover:bg-white/10"><X size={20} /></button>
          </div>
        </header>
        <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="practice-language" className="text-sm">Language</label>
            <select id="practice-language" value={language} disabled={running} onChange={e => { setLanguage(e.target.value as Language); invalidate(); setOutput('Run your code to see output here.'); }} className="rounded-lg border border-white/20 bg-[#1b222c] p-2 text-sm">{languages.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}</select>
            {!maximized && <label className="hidden items-center gap-2 text-xs text-[#9ba7b4] sm:flex">Drawer width<input aria-label="Drawer width" type="range" min="420" max="1600" step="20" value={width} onChange={e => setWidth(Number(e.target.value))} className="w-24 accent-[#e3a857]" /></label>}
          </div>
          <p className="text-xs leading-relaxed text-[#9ba7b4]">{language === 'java' ? 'Java 21: use class Main without public. Run sends code/input to Wandbox. Timing includes compilation and network.' : language === 'python' ? 'Use input() for input. Python downloads on first run.' : language === 'sql' ? 'Fresh PostgreSQL database per run. SQL statements only; no psql terminal commands.' : 'Use console.log(), readLine() or stdin. No DOM or npm imports. TypeScript is transpiled without type checking.'}</p>
          <Panel id="code" title="Code editor" focus={focus} setFocus={setFocus}>
            <textarea aria-label="Code editor" value={drafts[language]} disabled={running} onChange={e => { setDrafts(d => ({ ...d, [language]: e.target.value })); invalidate(); }} spellCheck={false} autoComplete="off" autoCorrect="off" autoCapitalize="off" data-gramm="false" className={`${field} ${focus === 'code' ? 'h-full min-h-72' : 'min-h-64'} leading-6`} />
          </Panel>
          <Panel id="input" title="Input dashboard" focus={focus} setFocus={setFocus}>
            <div className="mb-3 flex gap-2"><button className={button} aria-pressed={tab === 'stdin'} onClick={() => setTab('stdin')}>Standard input</button><button className={button} aria-pressed={tab === 'tests'} onClick={() => setTab('tests')}>Test cases ({cases.length})</button></div>
            {tab === 'stdin' ? <textarea aria-label="Standard input" value={stdin} onChange={e => { setStdin(e.target.value); invalidate(); }} disabled={running || language === 'sql'} rows={focus === 'input' ? 16 : 3} spellCheck={false} className={field} placeholder="One input per line" /> : <div className="space-y-3">
              <p className="text-xs text-[#9ba7b4]">Enter inputs and expected output. Only line endings and final newlines are ignored. Each test starts fresh.</p>
              {cases.map((test, index) => <div key={test.id} className="rounded-lg border border-white/15 p-3">
                <div className="mb-2 flex items-center justify-between"><span className="text-xs">Test {index + 1}</span><button disabled={running} aria-label={`Remove test ${index + 1}`} onClick={() => updateTests(cases.filter(t => t.id !== test.id))} className="p-1"><Trash2 size={14} /></button></div>
                <div className="grid gap-3 sm:grid-cols-2"><label className="text-xs">Input<textarea aria-label={`Test ${index + 1} input`} value={test.input} disabled={running || language === 'sql'} onChange={e => updateTests(cases.map(t => t.id === test.id ? { ...t, input: e.target.value } : t))} rows={3} className={`${field} mt-1`} /></label>
                <label className="text-xs">Expected output<textarea aria-label={`Test ${index + 1} expected output`} value={test.expected} disabled={running} onChange={e => updateTests(cases.map(t => t.id === test.id ? { ...t, expected: e.target.value } : t))} rows={3} className={`${field} mt-1`} /></label></div>
              </div>)}
              <button disabled={running || cases.length >= 10} onClick={() => updateTests([...cases, { id: nextId.current++, input: '', expected: '' }])} className={`${button} flex items-center gap-2`}><Plus size={14} />Add test case</button>
            </div>}
          </Panel>
          <div className="flex shrink-0 flex-wrap items-center gap-2">
            <button onClick={() => void run(false)} disabled={running || !drafts[language].trim()} className="flex items-center gap-2 rounded-lg bg-[#e3a857] px-4 py-2 text-sm font-semibold text-[#12171f] disabled:opacity-50"><Play size={16} />Run code</button>
            <button onClick={() => void run(true)} disabled={running || !cases.length || !drafts[language].trim()} className={button}>Run {cases.length || ''} tests</button>
            {running && <button onClick={halt} className={`${button} flex items-center gap-2`}><Square size={14} />Stop</button>}
            <span role="status" className="text-xs text-[#9ba7b4]">{running ? 'Running…' : 'Ready'} · 60 s limit per run</span>
          </div>
          <Panel id="output" title="Results" focus={focus} setFocus={setFocus}>
            {lastRun && <p className="mb-3 text-xs text-[#e3a857]">{lastRun.status} · {lastRun.executionMs !== undefined ? `Execution: ${duration(lastRun.executionMs)} · ` : ''}Total: {duration(lastRun.elapsedMs)}<span className="block text-[#9ba7b4]">Total includes runtime setup, compilation and network where applicable.</span></p>}
            {results.length > 0 && <div className="mb-3 space-y-2">
              <p role="status" className="text-sm font-semibold">{results.filter(r => r.passed).length}/{cases.length} tests passed · {results.length}/{cases.length} run</p>
              {results.map(result => <details key={result.id} className="rounded border border-white/15 p-2 text-xs"><summary className={result.passed ? 'text-emerald-400' : 'text-amber-300'}>Test {cases.findIndex(t => t.id === result.id) + 1}: {result.passed ? 'Passed' : result.status === 'success' ? 'Failed' : result.status} · {result.executionMs !== undefined ? `Execution ${duration(result.executionMs)} · ` : ''}Total {duration(result.elapsedMs)}</summary><div className="mt-2 grid gap-2 sm:grid-cols-2"><div>Expected<pre className="whitespace-pre-wrap break-words">{cases.find(t => t.id === result.id)?.expected || '(empty)'}</pre></div><div>Actual<pre className="max-h-48 overflow-auto whitespace-pre-wrap break-words">{result.output || '(empty)'}</pre></div></div></details>)}
            </div>}
            <pre aria-label="Program output" className={`${focus === 'output' ? 'min-h-64' : 'max-h-60 min-h-24'} overflow-auto whitespace-pre-wrap break-words font-mono text-sm`}>{output || (running ? 'Starting runtime…' : 'Finished (no output).')}</pre>
          </Panel>
        </div>
      </div>
    </dialog>
  </>;
}
