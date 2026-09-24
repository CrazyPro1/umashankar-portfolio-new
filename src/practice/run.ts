export type Language = 'java' | 'python' | 'typescript' | 'javascript' | 'sql';
export const languages: { id: Language; label: string; code: string }[] = [
  { id: 'java', label: 'Java', code: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}' },
  { id: 'python', label: 'Python', code: 'print("Hello, Python!")\n' },
  { id: 'typescript', label: 'TypeScript', code: 'const greeting: string = "Hello, TypeScript!";\nconsole.log(greeting);\n' },
  { id: 'javascript', label: 'JavaScript', code: 'console.log("Hello, JavaScript!");\n' },
  { id: 'sql', label: 'PostgreSQL', code: "CREATE TABLE practice (id SERIAL PRIMARY KEY, name TEXT);\nINSERT INTO practice (name) VALUES ('Hello, PostgreSQL!');\nSELECT * FROM practice;\n" },
];
export function runCode(language: Language, code: string, stdin: string, output: (text: string) => void, done: () => void) {
  const controller = new AbortController();
  let worker: Worker | undefined;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    controller.abort();
    worker?.terminate();
    done();
  };
  const timeout = setTimeout(() => { output('\nExecution timed out after 60 seconds.'); finish(); }, 60000);
  if (language === 'java') {
    void (async () => {
      try {
        const response = await fetch('https://wandbox.org/api/compile.json', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
          body: JSON.stringify({ compiler: 'openjdk-jdk-21+35', code, stdin, save: false }),
        });
        if (!response.ok) throw new Error(`Java compiler unavailable (HTTP ${response.status}). Try again later.`);
        const result = await response.json();
        if (!finished) {
          output((result.compiler_message || '') + (result.program_message || '') || `Exited with status ${result.status ?? 'unknown'}.`);
          if (result.signal) output(`\nStopped: ${result.signal}`);
        }
      } catch (error) { if (!finished) output(error instanceof Error ? error.message : 'Java execution failed.'); }
      finally { finish(); }
    })();
  } else {
    try {
      worker = new Worker(new URL('./runtime.worker.ts', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }) => {
        if (finished) return;
        if (data.type === 'output') output(data.text);
        if (data.type === 'error') { output('\n' + data.text); finish(); }
        if (data.type === 'done') finish();
      };
      worker.onerror = event => { output(`Runtime failed: ${event.message || 'Check your connection and try again.'}`); finish(); };
      worker.postMessage({ language, code, stdin });
    } catch (error) { output(String(error)); finish(); }
  }
  return finish;
}
