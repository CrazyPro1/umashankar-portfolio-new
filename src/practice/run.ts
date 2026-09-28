export type Language = 'java' | 'python' | 'typescript' | 'javascript' | 'sql';
export const languages: { id: Language; label: string; code: string }[] = [
  { id: 'java', label: 'Java', code: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}' },
  { id: 'python', label: 'Python', code: 'print("Hello, Python!")\n' },
  { id: 'typescript', label: 'TypeScript', code: 'const greeting: string = "Hello, TypeScript!";\nconsole.log(greeting);\n' },
  { id: 'javascript', label: 'JavaScript', code: 'console.log("Hello, JavaScript!");\n' },
  { id: 'sql', label: 'PostgreSQL', code: "CREATE TABLE practice (id SERIAL PRIMARY KEY, name TEXT);\nINSERT INTO practice (name) VALUES ('Hello, PostgreSQL!');\nSELECT * FROM practice;\n" },
];
export type RunStatus = 'success' | 'error' | 'timeout' | 'stopped';
export interface RunResult {
  status: RunStatus;
  output: string;
  elapsedMs: number;
  executionMs?: number;
}
export function matchesExpected(actual: string, expected: string) {
  const normalize = (value: string) => value.replace(/\r\n/g, '\n').replace(/\n+$/, '');
  return normalize(actual) === normalize(expected);
}

export function runCode(language: Language, code: string, stdin: string, output: (text: string) => void, done: (result: RunResult) => void) {
  const started = performance.now();
  const controller = new AbortController();
  let worker: Worker | undefined;
  let finished = false;
  let captured = '';
  const write = (text: string) => {
    const chunk = text.slice(0, Math.max(0, 50000 - captured.length));
    captured += chunk;
    if (chunk) output(chunk);
  };
  const finish = (status: RunStatus, executionMs?: number) => {
    if (finished) return;
    finished = true;
    clearTimeout(timeout);
    controller.abort();
    worker?.terminate();
    done({ status, output: captured, elapsedMs: performance.now() - started, executionMs });
  };
  const timeout = setTimeout(() => { write('\nExecution timed out after 60 seconds.'); finish('timeout'); }, 60000);
  if (language === 'java') {
    void (async () => {
      try {
        const response = await fetch('https://wandbox.org/api/compile.json', {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
          body: JSON.stringify({ compiler: 'openjdk-jdk-21+35', code, stdin, save: false }),
        });
        if (!response.ok) throw new Error(`Java compiler unavailable (HTTP ${response.status}). Try again later.`);
        const result = await response.json();
        if (finished) return;
        write((result.compiler_message || '') + (result.program_message || ''));
        if (result.signal) write(`\nStopped: ${result.signal}`);
        finish(String(result.status) === '0' && !result.signal ? 'success' : 'error');
      } catch (error) {
        if (!finished) { write(error instanceof Error ? error.message : 'Java execution failed.'); finish('error'); }
      }
    })();
  } else {
    try {
      worker = new Worker(new URL('./runtime.worker.ts', import.meta.url), { type: 'module' });
      worker.onmessage = ({ data }) => {
        if (finished) return;
        if (data.type === 'output') write(data.text);
        if (data.type === 'error') { write('\n' + data.text); finish('error', data.executionMs); }
        if (data.type === 'done') finish('success', data.executionMs);
      };
      worker.onerror = event => { write(`Runtime failed: ${event.message || 'Check your connection and try again.'}`); finish('error'); };
      worker.postMessage({ language, code, stdin });
    } catch (error) { write(String(error)); finish('error'); }
  }
  return () => finish('stopped');
}
