import assert from 'node:assert/strict';
import { test } from 'node:test';
import { matchesExpected, runCode, type RunResult } from '../src/practice/run';

test('comparison preserves meaningful whitespace and normalizes line endings', () => {
  assert.ok(matchesExpected('42\r\n', '42'));
  assert.ok(matchesExpected('', '\n'));
  assert.ok(!matchesExpected(' 42\n', '42'));
  assert.ok(!matchesExpected('42', '43'));
});

test('Java results distinguish success, compile failures and service errors', async () => {
  const original = globalThis.fetch;
  try {
    for (const [response, status] of [[{ status: '0', program_message: '42\n' }, 'success'], [{ status: '1', compiler_message: 'compile error' }, 'error']] as const) {
      globalThis.fetch = async () => new Response(JSON.stringify(response), { status: 200 });
      const result = await new Promise<RunResult>(resolve => runCode('java', '', '', () => {}, resolve));
      assert.equal(result.status, status);
      assert.ok(result.elapsedMs >= 0);
      assert.equal(result.executionMs, undefined);
    }
    globalThis.fetch = async () => new Response('', { status: 503 });
    const result = await new Promise<RunResult>(resolve => runCode('java', '', '', () => {}, resolve));
    assert.equal(result.status, 'error');
    assert.match(result.output, /503/);
  } finally { globalThis.fetch = original; }
});

test('stopping an in-flight request completes once and ignores late output', async () => {
  const original = globalThis.fetch;
  let release!: (response: Response) => void;
  globalThis.fetch = () => new Promise<Response>(resolve => { release = resolve; });
  let completions = 0;
  try {
    const result = await new Promise<RunResult>(resolve => {
      const stop = runCode('java', '', '', () => assert.fail('late output'), r => { completions++; resolve(r); });
      stop(); stop();
    });
    assert.equal(result.status, 'stopped');
    release(new Response(JSON.stringify({ status: '0', program_message: 'late' })));
    await new Promise(resolve => setTimeout(resolve, 10));
    assert.equal(completions, 1);
  } finally { globalThis.fetch = original; }
});
