export interface TestCase {
  id: string;
  name: string;
  input: string;
  expectedOutput: string;
  isHidden?: boolean;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: 'Java & Concurrency' | 'SDET & Automation' | 'GenAI & RAG Testing' | 'Algorithms';
  tags: string[];
  description: string;
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: {
    java: string;
    python: string;
    typescript: string;
    sql?: string;
    cpp?: string;
  };
  testCases: TestCase[];
  solutionHints: string[];
}

export const INTERVIEW_PROBLEMS: Problem[] = [
  {
    id: 'parallel-test-executor',
    title: 'Parallel Test Execution Engine (Lead SDET)',
    difficulty: 'Hard',
    category: 'SDET & Automation',
    tags: ['Concurrency', 'CompletableFuture', 'ExecutorService', 'Lead SDET', 'Java 21'],
    description: `Design a high-throughput, thread-safe test dispatcher that executes an array of test tasks across a bounded thread pool. The engine must:
1. Execute tests concurrently without thread starvation.
2. Capture execution time and results for each test.
3. Automatically retry failed tests up to a configurable maxRetries threshold before marking as FAILED.
4. Return an aggregated execution report with total passed, failed, retried, and duration.`,
    examples: [
      {
        input: 'tests = ["CheckoutFlowTest", "PaymentWebhookTest", "InventorySyncTest"], maxWorkers = 4, maxRetries = 2',
        output: '{"totalRun": 3, "passed": 3, "failed": 0, "retried": 1, "status": "RELEASE_APPROVED"}',
        explanation: 'PaymentWebhookTest failed on attempt 1 due to 503 transient glitch, passed on attempt 2 after backoff. QA gate passes.',
      },
    ],
    constraints: [
      '1 <= tests.length <= 1000',
      '1 <= maxWorkers <= 32',
      '0 <= maxRetries <= 3',
      'Must guarantee thread safety without blocking the event loop.',
    ],
    starterCode: {
      java: `import java.util.*;
import java.util.concurrent.*;

public class ParallelTestExecutor {

    public record TestResult(String testName, boolean passed, int attempts, long durationMs) {}
    public record ExecutionSummary(int totalRun, int passed, int failed, int retried, String status) {}

    /**
     * Executes test suites concurrently with bounded worker pool and retry logic.
     */
    public ExecutionSummary executeSuites(List<String> testNames, int maxWorkers, int maxRetries) {
        ExecutorService pool = Executors.newFixedThreadPool(maxWorkers);
        List<CompletableFuture<TestResult>> futures = new ArrayList<>();

        for (String test : testNames) {
            futures.add(CompletableFuture.supplyAsync(() -> runWithRetry(test, maxRetries), pool));
        }

        CompletableFuture.allOf(futures.toArray(new CompletableFuture[0])).join();
        pool.shutdown();

        int passed = 0, failed = 0, retried = 0;
        for (var future : futures) {
            TestResult res = future.join();
            if (res.passed()) passed++;
            else failed++;
            if (res.attempts() > 1) retried++;
        }

        String status = (failed == 0) ? "RELEASE_APPROVED" : "RELEASE_BLOCKED";
        return new ExecutionSummary(testNames.size(), passed, failed, retried, status);
    }

    private TestResult runWithRetry(String testName, int maxRetries) {
        int attempts = 0;
        long start = System.currentTimeMillis();
        while (attempts <= maxRetries) {
            attempts++;
            // Simulate test execution logic
            boolean success = !testName.contains("Flaky") || attempts > 1;
            if (success) {
                return new TestResult(testName, true, attempts, System.currentTimeMillis() - start);
            }
        }
        return new TestResult(testName, false, attempts, System.currentTimeMillis() - start);
    }

    public static void main(String[] args) {
        ParallelTestExecutor executor = new ParallelTestExecutor();
        List<String> tests = List.of("AuthFlowTest", "FlakyPaymentTest", "OrderValidationTest");
        ExecutionSummary summary = executor.executeSuites(tests, 4, 2);
        System.out.println("Result: " + summary);
    }
}`,
      python: `import concurrent.futures
import time
from typing import List, Dict

class ParallelTestExecutor:
    def execute_suites(self, test_names: List[str], max_workers: int = 4, max_retries: int = 2) -> Dict:
        def run_with_retry(test_name: str):
            attempts = 0
            while attempts <= max_retries:
                attempts += 1
                success = "Flaky" not in test_name or attempts > 1
                if success:
                    return {"name": test_name, "passed": True, "attempts": attempts}
            return {"name": test_name, "passed": False, "attempts": attempts}

        with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as executor:
            results = list(executor.map(run_with_retry, test_names))

        passed = sum(1 for r in results if r["passed"])
        failed = sum(1 for r in results if not r["passed"])
        retried = sum(1 for r in results if r["attempts"] > 1)

        return {
            "totalRun": len(test_names),
            "passed": passed,
            "failed": failed,
            "retried": retried,
            "status": "RELEASE_APPROVED" if failed == 0 else "RELEASE_BLOCKED"
        }

if __name__ == "__main__":
    executor = ParallelTestExecutor()
    tests = ["AuthFlowTest", "FlakyPaymentTest", "OrderValidationTest"]
    print(executor.execute_suites(tests))`,
      typescript: `interface ExecutionSummary {
  totalRun: number;
  passed: number;
  failed: number;
  retried: number;
  status: 'RELEASE_APPROVED' | 'RELEASE_BLOCKED';
}

export class ParallelTestExecutor {
  async executeSuites(
    testNames: string[],
    maxWorkers: number = 4,
    maxRetries: number = 2
  ): Promise<ExecutionSummary> {
    const runWithRetry = async (testName: string) => {
      let attempts = 0;
      while (attempts <= maxRetries) {
        attempts++;
        const success = !testName.includes('Flaky') || attempts > 1;
        if (success) return { testName, passed: true, attempts };
      }
      return { testName, passed: false, attempts };
    };

    const results = await Promise.all(testNames.map(runWithRetry));
    const passed = results.filter((r) => r.passed).length;
    const failed = results.filter((r) => !r.passed).length;
    const retried = results.filter((r) => r.attempts > 1).length;

    return {
      totalRun: testNames.length,
      passed,
      failed,
      retried,
      status: failed === 0 ? 'RELEASE_APPROVED' : 'RELEASE_BLOCKED',
    };
  }
}`,
    },
    testCases: [
      {
        id: 'tc1',
        name: 'Standard 3 Microservice Tests with 1 Flaky Test',
        input: '["AuthFlowTest", "FlakyPaymentTest", "OrderValidationTest"]',
        expectedOutput: '{"totalRun":3,"passed":3,"failed":0,"retried":1,"status":"RELEASE_APPROVED"}',
      },
      {
        id: 'tc2',
        name: 'Deterministic Suite (Zero Flakes)',
        input: '["ApiContractTest", "SchemaDriftTest", "HealthCheckTest"]',
        expectedOutput: '{"totalRun":3,"passed":3,"failed":0,"retried":0,"status":"RELEASE_APPROVED"}',
      },
      {
        id: 'tc3',
        name: 'High Concurrency Sharding (8 Tests)',
        input: '["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8"]',
        expectedOutput: '{"totalRun":8,"passed":8,"failed":0,"retried":0,"status":"RELEASE_APPROVED"}',
        isHidden: true,
      },
    ],
    solutionHints: [
      'Use CompletableFuture.supplyAsync with custom ThreadPoolExecutor rather than commonPool() to prevent starvation.',
      'Remember to calculate retried count only for tests where attempts > 1.',
      'Ensure the pool is cleanly shutdown to prevent thread leaks.',
    ],
  },
  {
    id: 'rag-groundedness-evaluator',
    title: 'RAG Semantic Groundedness Evaluator (OneDesk AI)',
    difficulty: 'Medium',
    category: 'GenAI & RAG Testing',
    tags: ['GenAI', 'RAG', 'Spring AI', 'Cosine Similarity', 'Hallucination', 'OneDesk AI'],
    description: `In OneDesk AI, Umashankar built automated test gates to prevent LLM hallucinations.
Implement a function evaluateGroundedness(retrievedContext, generatedAnswer, threshold) that:
1. Calculates token overlap / semantic alignment between the retrieved context passages and the generated LLM response.
2. Checks for unsupported claims (hallucinations).
3. If groundedness score >= threshold (typically 0.85), returns PASSED with confidence score; otherwise flags as HALLUCINATION_DETECTED.`,
    examples: [
      {
        input: 'context = "OneDesk supports OAuth 2.0 with PKCE and Okta SSO.", answer = "You can log in to OneDesk using OAuth 2.0 with Okta SSO and PKCE.", threshold = 0.80',
        output: '{"isGrounded": true, "score": 0.92, "verdict": "PASSED"}',
        explanation: 'All factual claims in the answer are strictly supported by the retrieved context chunk.',
      },
      {
        input: 'context = "Database schema requires PostgreSQL 16.", answer = "We recommend MongoDB and Oracle 19c for this cluster.", threshold = 0.80',
        output: '{"isGrounded": false, "score": 0.15, "verdict": "HALLUCINATION_DETECTED"}',
        explanation: 'Answer mentions unsupported database engines not present in the reference knowledge base.',
      },
    ],
    constraints: [
      '10 <= context.length <= 10000',
      '5 <= answer.length <= 2000',
      '0.0 <= threshold <= 1.0',
    ],
    starterCode: {
      java: `import java.util.*;

public class RagGroundednessEvaluator {

    public record EvaluationResult(boolean isGrounded, double score, String verdict) {}

    /**
     * Evaluates whether the generated LLM response is factually grounded in retrieved chunks.
     */
    public EvaluationResult evaluateGroundedness(String context, String answer, double threshold) {
        Set<String> contextWords = extractKeywords(context);
        Set<String> answerWords = extractKeywords(answer);

        if (answerWords.isEmpty()) {
            return new EvaluationResult(false, 0.0, "EMPTY_ANSWER");
        }

        int groundedCount = 0;
        for (String word : answerWords) {
            if (contextWords.contains(word)) {
                groundedCount++;
            }
        }

        double score = (double) groundedCount / answerWords.size();
        score = Math.round(score * 100.0) / 100.0;
        boolean isGrounded = score >= threshold;
        String verdict = isGrounded ? "PASSED" : "HALLUCINATION_DETECTED";

        return new EvaluationResult(isGrounded, score, verdict);
    }

    private Set<String> extractKeywords(String text) {
        Set<String> stopWords = Set.of("the", "is", "at", "which", "on", "and", "a", "an", "with", "to", "in", "for", "you", "can");
        Set<String> words = new HashSet<>();
        for (String w : text.toLowerCase().replaceAll("[^a-zA-Z0-9\\\\s]", "").split("\\\\s+")) {
            if (!w.isBlank() && !stopWords.contains(w)) {
                words.add(w);
            }
        }
        return words;
    }

    public static void main(String[] args) {
        RagGroundednessEvaluator evaluator = new RagGroundednessEvaluator();
        String ctx = "OneDesk supports OAuth 2.0 with PKCE and Okta SSO.";
        String ans = "You can log in to OneDesk using OAuth 2.0 with Okta SSO and PKCE.";
        System.out.println(evaluator.evaluateGroundedness(ctx, ans, 0.80));
    }
}`,
      python: `from typing import Dict, Set

class RagGroundednessEvaluator:
    STOP_WORDS = {"the", "is", "at", "which", "on", "and", "a", "an", "with", "to", "in", "for", "you", "can"}

    def evaluate_groundedness(self, context: str, answer: str, threshold: float = 0.80) -> Dict:
        def extract_keywords(text: str) -> Set[str]:
            cleaned = "".join(c.lower() if c.isalnum() or c.isspace() else " " for c in text)
            return {w for w in cleaned.split() if w and w not in self.STOP_WORDS}

        ctx_words = extract_keywords(context)
        ans_words = extract_keywords(answer)

        if not ans_words:
            return {"isGrounded": False, "score": 0.0, "verdict": "EMPTY_ANSWER"}

        grounded_count = sum(1 for w in ans_words if w in ctx_words)
        score = round(grounded_count / len(ans_words), 2)
        is_grounded = score >= threshold

        return {
            "isGrounded": is_grounded,
            "score": score,
            "verdict": "PASSED" if is_grounded else "HALLUCINATION_DETECTED"
        }

if __name__ == "__main__":
    evaluator = RagGroundednessEvaluator()
    ctx = "OneDesk supports OAuth 2.0 with PKCE and Okta SSO."
    ans = "You can log in to OneDesk using OAuth 2.0 with Okta SSO and PKCE."
    print(evaluator.evaluate_groundedness(ctx, ans, 0.80))`,
      typescript: `export class RagGroundednessEvaluator {
  private stopWords = new Set(['the', 'is', 'at', 'which', 'on', 'and', 'a', 'an', 'with', 'to', 'in', 'for', 'you', 'can']);

  evaluateGroundedness(context: string, answer: string, threshold = 0.80) {
    const extract = (text: string) => {
      const words = text.toLowerCase().replace(/[^a-z0-9\\s]/g, '').split(/\\s+/);
      return new Set(words.filter(w => w && !this.stopWords.has(w)));
    };

    const ctx = extract(context);
    const ans = extract(answer);

    if (ans.size === 0) return { isGrounded: false, score: 0, verdict: 'EMPTY_ANSWER' };

    let grounded = 0;
    ans.forEach(w => { if (ctx.has(w)) grounded++; });

    const score = Number((grounded / ans.size).toFixed(2));
    const isGrounded = score >= threshold;

    return {
      isGrounded,
      score,
      verdict: isGrounded ? 'PASSED' : 'HALLUCINATION_DETECTED',
    };
  }
}`,
    },
    testCases: [
      {
        id: 'tc1',
        name: 'Grounded OAuth Response (Pass)',
        input: 'context="OneDesk supports OAuth 2.0 with PKCE and Okta SSO.", answer="You can log in using OAuth 2.0 with Okta SSO and PKCE.", threshold=0.80',
        expectedOutput: '{"isGrounded":true,"score":1.0,"verdict":"PASSED"}',
      },
      {
        id: 'tc2',
        name: 'Unsupported DB Hallucination (Fail)',
        input: 'context="Database schema requires PostgreSQL 16.", answer="We recommend MongoDB and Oracle 19c.", threshold=0.80',
        expectedOutput: '{"isGrounded":false,"score":0.0,"verdict":"HALLUCINATION_DETECTED"}',
      },
      {
        id: 'tc3',
        name: 'Borderline Context Recall (> 0.85 Threshold)',
        input: 'context="Spring AI integrates pgvector embeddings with 1536-dim vectors.", answer="Spring AI uses pgvector embeddings for vector search.", threshold=0.75',
        expectedOutput: '{"isGrounded":true,"score":0.8,"verdict":"PASSED"}',
        isHidden: true,
      },
    ],
    solutionHints: [
      'Filter out English stop words so punctuation or generic pronouns do not artificially inflate the semantic score.',
      'In production with Spring AI, Umashankar pairs this keyword verification with embedding cosine distance via pgvector.',
    ],
  },
  {
    id: 'thread-safe-webdriver-pool',
    title: 'Thread-Safe WebDriver Object Pool (Concurrency)',
    difficulty: 'Medium',
    category: 'Java & Concurrency',
    tags: ['Java', 'Concurrency', 'Locks', 'Object Pool', 'Selenium', 'Playwright'],
    description: `In enterprise UI testing, spinning up browser instances is expensive (1-3 seconds per browser).
Implement a thread-safe generic DriverPool that manages an active pool of browser sessions:
1. acquireDriver(): Retrieves an idle driver from the pool. If none is available and the pool has not reached maxSize, creates a new one. Otherwise blocks safely or times out.
2. releaseDriver(driver): Returns the driver to the pool for reuse by subsequent tests.
3. closeAll(): Gracefully terminates all active and idle browser drivers.`,
    examples: [
      {
        input: 'pool = new DriverPool(maxSize = 3); Thread 1-4 call acquireDriver() concurrently',
        output: 'Threads 1-3 receive drivers immediately; Thread 4 waits until Thread 1 calls releaseDriver()',
        explanation: 'Limits memory footprint to 3 headless browser processes while serving 100+ tests.',
      },
    ],
    constraints: [
      '1 <= maxSize <= 16',
      'Must avoid deadlock under high thread contention.',
      'Must guarantee cleanup on closeAll().',
    ],
    starterCode: {
      java: `import java.util.concurrent.*;
import java.util.concurrent.locks.*;
import java.util.*;

public class DriverPool {
    private final int maxSize;
    private final BlockingQueue<String> idleDrivers;
    private int createdCount = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public DriverPool(int maxSize) {
        this.maxSize = maxSize;
        this.idleDrivers = new LinkedBlockingQueue<>(maxSize);
    }

    public String acquireDriver(long timeoutMs) throws InterruptedException {
        // Check if existing idle driver ready
        String driver = idleDrivers.poll();
        if (driver != null) return driver;

        // Try to create new driver under max capacity
        lock.lock();
        try {
            if (createdCount < maxSize) {
                createdCount++;
                return "WebDriver-Instance-" + createdCount;
            }
        } finally {
            lock.unlock();
        }

        // Wait for returned driver
        driver = idleDrivers.poll(timeoutMs, TimeUnit.MILLISECONDS);
        if (driver == null) throw new TimeoutException("Driver acquisition timed out");
        return driver;
    }

    public void releaseDriver(String driver) {
        if (driver != null) {
            idleDrivers.offer(driver);
        }
    }

    public int getAvailableCount() {
        return idleDrivers.size();
    }
}`,
      python: `import queue
import threading
import time

class DriverPool:
    def __init__(self, max_size: int = 3):
        self.max_size = max_size
        self.idle_queue = queue.Queue(maxsize=max_size)
        self.created_count = 0
        self.lock = threading.Lock()

    def acquire_driver(self, timeout: float = 2.0) -> str:
        try:
            return self.idle_queue.get_nowait()
        except queue.Empty:
            pass

        with self.lock:
            if self.created_count < self.max_size:
                self.created_count += 1
                return f"WebDriver-Instance-{self.created_count}"

        try:
            return self.idle_queue.get(timeout=timeout)
        except queue.Empty:
            raise TimeoutError("No driver available in time")

    def release_driver(self, driver: str):
        self.idle_queue.put(driver)`,
      typescript: `export class DriverPool {
  private idle: string[] = [];
  private created = 0;

  constructor(private maxSize: number = 3) {}

  async acquireDriver(): Promise<string> {
    if (this.idle.length > 0) return this.idle.pop()!;
    if (this.created < this.maxSize) {
      this.created++;
      return \`WebDriver-Instance-\${this.created}\`;
    }
    // Return placeholder
    return \`WebDriver-Instance-Reused\`;
  }

  releaseDriver(driver: string) {
    this.idle.push(driver);
  }
}`,
    },
    testCases: [
      {
        id: 'tc1',
        name: 'Pool Capacity Bounding',
        input: 'maxSize=3, requests=3',
        expectedOutput: '["WebDriver-Instance-1", "WebDriver-Instance-2", "WebDriver-Instance-3"]',
      },
      {
        id: 'tc2',
        name: 'Driver Reuse after Release',
        input: 'release("WebDriver-Instance-1") -> acquire()',
        expectedOutput: '"WebDriver-Instance-1"',
      },
    ],
    solutionHints: [
      'Use a LinkedBlockingQueue for waiting threads.',
      'Double check with a lock before incrementing createdCount to avoid exceeding maxSize under race conditions.',
    ],
  },
  {
    id: 'two-sum',
    title: 'Two Sum (LeetCode Classic)',
    difficulty: 'Easy',
    category: 'Algorithms',
    tags: ['HashMap', 'Array', 'Time Complexity O(N)'],
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Return the answer in any order.`,
    examples: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1, 2]',
      },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Only one valid answer exists.',
    ],
    starterCode: {
      java: `import java.util.*;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] result = sol.twoSum(new int[]{2, 7, 11, 15}, 9);
        System.out.println(Arrays.toString(result)); // [0, 1]
    }
}`,
      python: `from typing import List

class Solution:
    def two_sum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, num in enumerate(nums):
            comp = target - num
            if comp in seen:
                return [seen[comp], i]
            seen[num] = i
        return []

if __name__ == "__main__":
    sol = Solution()
    print(sol.two_sum([2, 7, 11, 15], 9))`,
      typescript: `export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
    },
    testCases: [
      {
        id: 'tc1',
        name: 'Basic Case [2,7,11,15]',
        input: 'nums = [2,7,11,15], target = 9',
        expectedOutput: '[0, 1]',
      },
      {
        id: 'tc2',
        name: 'Middle Elements [3,2,4]',
        input: 'nums = [3,2,4], target = 6',
        expectedOutput: '[1, 2]',
      },
      {
        id: 'tc3',
        name: 'Duplicate Values [3,3]',
        input: 'nums = [3,3], target = 6',
        expectedOutput: '[0, 1]',
        isHidden: true,
      },
    ],
    solutionHints: [
      'A single pass with HashMap achieves O(N) time complexity and O(N) space.',
      'Check if target - current exists in map before inserting current.',
    ],
  },
];
