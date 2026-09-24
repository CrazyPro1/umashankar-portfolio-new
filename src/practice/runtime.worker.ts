self.onmessage = async ({ data: { language, code, stdin } }) => {
  let size = 0;
  const write = (text: string) => {
    if (size >= 50000) return;
    const chunk = text.slice(0, 50000 - size);
    size += chunk.length;
    self.postMessage({ type: 'output', text: chunk });
  };
  try {
    if (language === 'python') {
      const { loadPyodide } = await import('pyodide');
      const py = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v314.0.7/full/' });
      const lines = stdin ? stdin.split('\n') : [];
      py.setStdin({ stdin: () => lines.shift() ?? null });
      py.setStdout({ batched: s => write(s + '\n') });
      py.setStderr({ batched: s => write(s + '\n') });
      await py.runPythonAsync(code);
    } else if (language === 'sql') {
      const { PGlite } = await import('@electric-sql/pglite');
      const db = await PGlite.create();
      try {
        for (const result of await db.exec(code)) write(JSON.stringify(result.rows.length ? result.rows : { affectedRows: result.affectedRows ?? 0 }, null, 2) + '\n');
      } finally { await db.close(); }
    } else {
      let source = code;
      if (language === 'typescript') {
        const ts = await import('typescript');
        const result = ts.transpileModule(code, {
          compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None }, reportDiagnostics: true,
        });
        const errors = result.diagnostics?.filter(d => d.category === ts.DiagnosticCategory.Error);
        if (errors?.length) throw new Error(errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, '\n')).join('\n'));
        source = result.outputText;
      }
      const format = (value: unknown) => {
        if (typeof value === 'string') return value;
        try { return JSON.stringify(value) ?? String(value); } catch { return String(value); }
      };
      const log = (...args: unknown[]) => write(args.map(format).join(' ') + '\n');
      const lines = stdin ? stdin.split('\n') : [];
      const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      await new AsyncFunction('console', 'stdin', 'readLine', source)(
        { log, info: log, warn: log, error: log, table: log, debug: log }, stdin, () => lines.shift() ?? null,
      );
    }
    self.postMessage({ type: 'done' });
  } catch (error) {
    self.postMessage({ type: 'error', text: error instanceof Error ? error.message : String(error) });
  }
};
