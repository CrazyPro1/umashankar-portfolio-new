import { ExperienceItem, ProjectItem, SkillCategory, ATSKeyword } from '../types';

export const PERSONAL_INFO = {
  name: 'Umashankar Pandey',
  targetTitle: 'Lead SDET / Senior SDET',
  currentTitle: 'Senior SDET',
  yearsOfExperience: '5+ Years',
  location: 'Lucknow, Uttar Pradesh, India (Open to Remote / Relocation)',
  email: 'umashankar.sdet@gmail.com',
  linkedin: 'https://linkedin.com/in/umashankar-pandey-sdet',
  github: 'https://github.com/umashankar-pandey',
  portfolioDomainIdea: 'umashankar-sdet.com',
  summary: `Results-driven Lead/Senior SDET with 5+ years of experience architecting resilient test automation frameworks, leading QA release sign-offs, and mentoring engineering teams. Proven track record evaluating enterprise GenAI & RAG systems (OneDesk AI), building scalable multi-layer test harnesses (UI, API, Microservices), and accelerating CI/CD pipelines. Trusted with technical ownership across test strategy, automated quality gates, and code review governance.`,
  coreHighlights: [
    { label: 'Experience', value: '5+ Years', subtitle: 'Automation & Test Architecture' },
    { label: 'Leadership', value: '4 Engineers', subtitle: 'Mentored & Code Review Lead' },
    { label: 'Release Ownership', value: '100% Sign-Off', subtitle: 'Zero critical production regressions' },
    { label: 'Execution Speed', value: '65% Faster', subtitle: 'Parallel CI/CD Pipeline optimization' },
    { label: 'AI Quality Focus', value: 'GenAI & RAG', subtitle: 'Spring AI, pgvector, Groundedness' },
  ],
};

export const ATS_SCORE_DATA = {
  overallScore: 8.5,
  atsMatchPercentage: 96,
  status: 'Lead SDET High Match',
  reviewSummary: 'Strong technical leadership evidence (4 engineers mentored, code review gatekeeper, release sign-off) combined with modern GenAI/RAG testing competencies matching Tier-1 product company benchmarks (such as Amazon Rufus SDET, Google, and Meta).',
  evaluatedCriteria: [
    { name: 'Engineering Leadership & Mentorship', score: 9.5, max: 10, note: 'Mentored 4 engineers, conducted automation PR reviews, owned release sign-offs' },
    { name: 'Modern AI & GenAI Competencies', score: 9.0, max: 10, note: 'OneDesk AI RAG, Spring AI, pgvector, Gemini/Qwen, groundedness & prompt evaluation' },
    { name: 'Framework Architecture & Design', score: 9.5, max: 10, note: 'Hybrid Playwright/Selenium + RestAssured + Testcontainers modular architecture' },
    { name: 'Pipeline Acceleration & CI/CD', score: 9.0, max: 10, note: 'Reduced pipeline runtime by 65% with Dockerized parallelization' },
    { name: 'Defect Prevention & Release Quality', score: 9.5, max: 10, note: 'Shift-left quality gates with zero high-severity escapes over 12 months' },
  ],
};

export const ATS_KEYWORDS: ATSKeyword[] = [
  {
    keyword: 'GenAI Response Validation & Evaluation',
    category: 'GenAI & LLM Testing',
    countInResume: 8,
    importance: 'Critical',
    relevanceExplanation: 'Direct match for modern SDET roles testing LLM responses, hallucination rates, and prompt regressions.',
  },
  {
    keyword: 'Retrieval-Augmented Generation (RAG)',
    category: 'GenAI & LLM Testing',
    countInResume: 7,
    importance: 'Critical',
    relevanceExplanation: 'Validates chunking strategies, pgvector embeddings retrieval accuracy, and groundedness.',
  },
  {
    keyword: 'Spring AI & Vector Databases',
    category: 'GenAI & LLM Testing',
    countInResume: 6,
    importance: 'High',
    relevanceExplanation: 'Demonstrates deep hands-on implementation and test orchestration with pgvector and Spring AI.',
  },
  {
    keyword: 'Team Mentorship (4 Engineers)',
    category: 'Leadership & Ownership',
    countInResume: 5,
    importance: 'Critical',
    relevanceExplanation: 'Proves capability to scale quality culture, upskill junior/mid QA engineers, and guide best practices.',
  },
  {
    keyword: 'QA Release Sign-Off Authority',
    category: 'Leadership & Ownership',
    countInResume: 4,
    importance: 'Critical',
    relevanceExplanation: 'Confirms complete accountability for production readiness and risk assessment.',
  },
  {
    keyword: 'Automation Code Reviews',
    category: 'Leadership & Ownership',
    countInResume: 6,
    importance: 'High',
    relevanceExplanation: 'Enforces clean code principles, DRY test libraries, and eliminates flaky test patterns.',
  },
  {
    keyword: 'Testcontainers & Ephemeral Envs',
    category: 'Automation & Frameworks',
    countInResume: 7,
    importance: 'High',
    relevanceExplanation: 'Enables reliable integration tests against real PostgreSQL/pgvector and message queues without mocking.',
  },
  {
    keyword: 'Playwright / Selenium / RestAssured',
    category: 'Automation & Frameworks',
    countInResume: 11,
    importance: 'Critical',
    relevanceExplanation: 'Core modern UI and API automation standards for enterprise web systems.',
  },
  {
    keyword: 'CI/CD Pipeline Optimization & Docker',
    category: 'CI/CD & Infrastructure',
    countInResume: 9,
    importance: 'High',
    relevanceExplanation: 'Demonstrates ability to cut pipeline bottlenecks and embed automated quality gates in Jenkins/GitHub Actions.',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'senior-sdet-current',
    role: 'Senior SDET (Lead Responsibilities)',
    targetRole: 'Lead SDET',
    company: 'Enterprise Technology Solutions',
    location: 'Bangalore, India',
    period: '2022 - Present',
    type: 'Full-time',
    leadershipHighlights: [
      'Mentored a high-performing squad of 4 SDET engineers in test automation architecture, clean coding practices, and effective flaky test remediation.',
      'Sole QA Release Sign-Off authority for 14+ core production microservices, maintaining a 99.4% release stability index and zero high-severity production escapes across 18 months.',
      'Spearheaded the automation code review lifecycle, standardizing PR checklist guidelines and reducing test debt by 40% across engineering repos.',
      'Collaborated directly with Principal Architects and Product Managers to define acceptance criteria and test coverage for enterprise GenAI workflows.',
    ],
    responsibilities: [
      'Architected and deployed OneDesk AI automated evaluation pipelines using JUnit 5, Spring AI, and Testcontainers to validate RAG retrieval recall and response groundedness.',
      'Designed a distributed hybrid test framework with Playwright and RestAssured running on Dockerized grids, slashing end-to-end regression runtime from 4.2 hours to 45 minutes (65%+ reduction).',
      'Engineered automated quality gates in GitHub Actions/Jenkins with automated failure triage, flaky test quarantine, and Slack notification webhooks.',
      'Implemented API contract testing using RestAssured and JSON Schema validators for 40+ microservices endpoints, catching 90%+ contract breakages pre-merge.',
    ],
    technologies: [
      'Java 17',
      'Python',
      'Playwright',
      'Selenium WebDriver',
      'RestAssured',
      'Spring AI',
      'pgvector',
      'Testcontainers',
      'Docker',
      'Jenkins',
      'GitHub Actions',
      'JUnit 5',
      'TestNG',
    ],
    impactMetrics: [
      { label: 'Runtime Reduction', value: '65%', description: 'Cut test execution cycle from 4.2h to 45 mins' },
      { label: 'Engineers Mentored', value: '4', description: 'Coached in framework design & PR code reviews' },
      { label: 'Release Sign-Off', value: '100%', description: 'Sole authority for 14+ microservice deployments' },
      { label: 'Escapes Prevented', value: '0 Critical', description: 'Zero P0/P1 escapes to production in 18 months' },
    ],
  },
  {
    id: 'sdet-core',
    role: 'SDET II (Software Development Engineer in Test)',
    company: 'NextGen Cloud Platforms',
    location: 'Bangalore, India',
    period: '2020 - 2022',
    type: 'Full-time',
    leadershipHighlights: [
      'Led the migration from legacy Selenium monolithic suite to a modular Page Object Model + Screenplay pattern framework.',
      'Onboarded and trained 6 new QA hires across agile ceremonies, test case management, and CI build troubleshooting.',
      'Represented QA in Sprint grooming and architecture reviews, advocating for testability and observability hooks in frontend and backend code.',
    ],
    responsibilities: [
      'Built reusable API automation suites with Java, RestAssured, and TestNG with data-driven Excel/JSON payloads covering 350+ regression scenarios.',
      'Automated complex enterprise web workflows across Chrome, Firefox, and Safari using Selenium Grid with dynamic browser capabilities.',
      'Integrated SonarQube quality gates and Jacoco code coverage tracking to ensure >85% backend branch coverage.',
      'Authored performance test scripts using JMeter to simulate 5,000+ concurrent user loads during peak promotional events.',
    ],
    technologies: [
      'Java',
      'Selenium',
      'RestAssured',
      'TestNG',
      'Maven',
      'JMeter',
      'GitLab CI',
      'Postman',
      'SonarQube',
      'SQL / PostgreSQL',
    ],
    impactMetrics: [
      { label: 'Test Coverage', value: '88%', description: 'Expanded core regression coverage from 45% to 88%' },
      { label: 'Flakiness Cut', value: '35% -> <2%', description: 'Eliminated timing issues via dynamic polling conditions' },
      { label: 'Load Handled', value: '5,000 Users', description: 'Simulated peak transactions with zero latency degradation' },
    ],
  },
  {
    id: 'sdet-foundation',
    role: 'Associate QA / SDET I',
    company: 'TechMatrix Software',
    location: 'Bangalore, India',
    period: '2019 - 2020',
    type: 'Full-time',
    leadershipHighlights: [
      'Authored comprehensive test plans, traceability matrices, and exploratory test charters for cloud-native web portals.',
    ],
    responsibilities: [
      'Automated smoke and regression test cases using Java, Selenium WebDriver, and TestNG.',
      'Performed manual API exploratory testing with Postman and Swagger, authoring detailed bug reports with reproduction logs.',
      'Collaborated closely with software developers to verify bug fixes and implement regression safety nets.',
    ],
    technologies: [
      'Java',
      'Selenium WebDriver',
      'TestNG',
      'Postman',
      'Jira',
      'Git',
      'SQL',
    ],
    impactMetrics: [
      { label: 'Test Cases Automated', value: '450+', description: 'Converted critical manual scenarios to automated scripts' },
      { label: 'Defect Catch Rate', value: '94%', description: 'Identified functional defects prior to staging releases' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'onedesk-ai',
    title: 'OneDesk AI — Enterprise GenAI & RAG Assistant',
    subtitle: 'Internal Enterprise Knowledge & Support Agent with Automated Quality Testing',
    category: 'AI & GenAI Testing',
    description: 'An enterprise-grade Retrieval-Augmented Generation (RAG) assistant built with Spring AI, pgvector, and LLM integrations (Gemini & Qwen). Umashankar spearheaded both core components of the RAG pipeline and the comprehensive automated testing suite evaluating model responses, semantic relevance, and groundedness.',
    longDescription: 'OneDesk AI empowers internal teams by querying complex enterprise documentation, ticket histories, and technical wikis in real time. Testing an AI application requires fundamentally different methodologies than deterministic code: Umashankar built an automated evaluation suite testing vector retrieval recall, semantic similarity scores, latency bounds, and hallucination guardrails.',
    keyContributions: [
      'Spearheaded RAG pipeline integration utilizing Spring AI, pgvector embeddings, and dynamic agent routing between Gemini Pro and Qwen models.',
      'Engineered an automated GenAI test harness with JUnit 5 & Testcontainers, spinning up real PostgreSQL + pgvector instances during integration testing.',
      'Designed automated groundedness and hallucination detection tests, evaluating generated answers against retrieved context chunks using cosine similarity thresholds (>0.85).',
      'Implemented automated prompt regression suites to verify that model fine-tuning and system prompt updates do not degrade prior edge-case answers.',
      'Tested prompt injection security guards to prevent internal system prompt leakage or unauthorized role elevation.',
    ],
    aiTestingFocus: [
      'Retrieval Accuracy (Recall@K and Precision@K evaluation across 200+ gold standard queries)',
      'Groundedness Scoring (Context vs. Answer semantic overlap verification)',
      'Prompt Regression (Automated comparison of LLM outputs against baseline test assertions)',
      'Latency Benchmarks (P95 response latency kept under 650ms for chunk retrieval)',
      'Containerized Test Harness (Testcontainers managing pgvector isolated test DB)',
    ],
    architecture: [
      'Frontend: React / Modern UI with streaming responses',
      'Backend: Spring Boot 3.2, Spring AI, Java 17',
      'Vector Database: PostgreSQL with pgvector extension',
      'LLM Models: Gemini 2.5 Flash / Pro & Qwen 2.5',
      'Test Stack: JUnit 5, Testcontainers, RestAssured, AssertJ, Python semantic evaluation scripts',
    ],
    technologies: [
      'Spring AI',
      'pgvector',
      'Google Gemini API',
      'Qwen LLM',
      'JUnit 5',
      'Testcontainers',
      'PostgreSQL',
      'Java 17',
      'Docker',
      'RestAssured',
    ],
    metrics: [
      { label: 'Retrieval Recall', value: '94.2%' },
      { label: 'P95 Latency', value: '480 ms' },
      { label: 'Groundedness', value: '98.1%' },
      { label: 'Eval Test Suites', value: '180+ tests' },
    ],
  },
  {
    id: 'hybrid-framework',
    title: 'Enterprise Multi-Layer Test Automation Framework',
    subtitle: 'High-Throughput Parallel UI & API Test Framework across Cloud Grids',
    category: 'Automation Frameworks',
    description: 'A modular, high-resilience test automation framework leveraging Playwright, Selenium, and RestAssured. Designed for high-concurrency test execution in CI/CD pipelines with zero flaky false-alarms.',
    longDescription: 'Engineered from scratch to replace fragile legacy automation suites. Features intelligent auto-waiting, custom failure screenshots, video recordings on test failure, and self-healing selector strategies for dynamic frontend components.',
    keyContributions: [
      'Built a hybrid UI + API execution engine enabling API state pre-seeding before browser execution, eliminating 70% of UI navigation overhead.',
      'Standardized Page Object Model with Screenplay patterns, enabling team members to write declarative and readable test steps.',
      'Integrated dynamic parallel sharding across Dockerized test nodes, decreasing pipeline time by 65%.',
      'Implemented custom retry listeners with flake analyzers, alerting on intermittent infrastructure network glitches versus true code defects.',
    ],
    architecture: [
      'Core Engine: Playwright & Selenium with Java 17 & TypeScript',
      'API Engine: RestAssured with Jackson object mappers and OAuth token caching',
      'Execution Grid: Dockerized Selenium Grid and Playwright headless clusters',
      'Reporting: Allure Reporting with attached video artifacts and network HAR logs',
    ],
    technologies: [
      'Playwright',
      'Selenium',
      'RestAssured',
      'Java 17',
      'TypeScript',
      'Docker',
      'Allure Reports',
      'GitHub Actions',
      'Maven',
    ],
    metrics: [
      { label: 'Execution Speedup', value: '65%' },
      { label: 'Flaky Test Rate', value: '<0.8%' },
      { label: 'Daily Automated Tests', value: '2,400+' },
      { label: 'Engineers Supported', value: '12+ Devs' },
    ],
  },
  {
    id: 'genai-eval-harness',
    title: 'GenAI Output Quality & Hallucination Test Harness',
    subtitle: 'Automated Continuous Quality Assurance for LLM-Powered Applications',
    category: 'AI & GenAI Testing',
    description: 'An automated testing framework tailored for testing generative AI behaviors, validating prompt safety, token economy, and factual consistency in production pipelines.',
    longDescription: 'Created to address the non-deterministic nature of generative AI in enterprise software. It acts as an automated quality gate during deployments, running a suite of adversarial prompts, boundary tests, and golden question-answer pairs.',
    keyContributions: [
      'Developed automated cosine similarity and BLEU/ROUGE comparison routines to evaluate semantic proximity against benchmark answers.',
      'Crafted automated prompt injection suites testing against jailbreak vectors, system directive leakage, and role confusion.',
      'Built cost and latency monitors tracking token consumption per test case to prevent unexpected API quota exhaustion in CI/CD.',
      'Embedded quality threshold checks directly into PR builds, blocking merges if groundedness score drops below 0.85.',
    ],
    architecture: [
      'Evaluation Runner: Python / Java test runner with REST hooks',
      'Metrics Engine: Semantic embeddings similarity, toxicity classifiers, and token counters',
      'Pipeline Integration: Custom GitHub Action action triggering pre-deploy AI checks',
    ],
    technologies: [
      'Python',
      'Java',
      'Gemini API',
      'Sentence Transformers',
      'JUnit 5',
      'GitHub Actions',
      'Pandas',
      'FastAPI',
    ],
    metrics: [
      { label: 'Adversarial Prompts Tested', value: '450+' },
      { label: 'Hallucination Catch Rate', value: '96%' },
      { label: 'Token Budget Saved', value: '30%' },
      { label: 'Evaluation Speed', value: '1.2s/prompt' },
    ],
  },
  {
    id: 'performance-chaos',
    title: 'Microservices Performance & Contract Testing Suite',
    subtitle: 'JMeter, k6 & Testcontainers Resilience Harness for High-Throughput APIs',
    category: 'Performance & Reliability',
    description: 'Automated performance benchmarks, consumer-driven contract verifications, and chaos latency injection across distributed microservices architectures.',
    longDescription: 'Ensured high reliability for business-critical payment and order workflows under extreme concurrency, establishing service level objectives (SLO) compliance before every major release.',
    keyContributions: [
      'Formulated automated k6 and JMeter load testing suites validating 10,000+ requests/sec across API gateways.',
      'Orchestrated Testcontainers to simulate downstream service latency and network partitions, uncovering memory leaks and connection pool starvation.',
      'Automated OpenAPI / Swagger schema drift validation to catch breaking changes in microservice contracts during pull requests.',
    ],
    architecture: [
      'Performance Engine: k6 & Apache JMeter with distributed workers',
      'Contract Validation: RestAssured with JSON Schema & Pact',
      'Monitoring: Prometheus and Grafana dashboards tracking response percentiles',
    ],
    technologies: [
      'k6',
      'JMeter',
      'Testcontainers',
      'RestAssured',
      'PostgreSQL',
      'Grafana',
      'Prometheus',
      'Docker',
    ],
    metrics: [
      { label: 'Throughput Tested', value: '10k RPS' },
      { label: 'Contract Coverage', value: '100%' },
      { label: 'P99 Latency Goal', value: '<200 ms' },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'GenAI & AI System Testing',
    iconName: 'Sparkles',
    description: 'Modern testing methodologies for LLMs, RAG architectures, prompt evaluation, and agentic workflows.',
    skills: [
      { name: 'RAG Pipeline Testing', level: 'Expert', isAiKeyword: true, tags: ['Chunking', 'Vector Search', 'pgvector'] },
      { name: 'Groundedness & Hallucination Testing', level: 'Expert', isAiKeyword: true, tags: ['Semantic Similarity', 'Factuality'] },
      { name: 'Prompt Regression Testing', level: 'Expert', isAiKeyword: true, tags: ['Gold Datasets', 'Boundary Testing'] },
      { name: 'Spring AI & Vector DBs', level: 'Advanced', isAiKeyword: true, tags: ['pgvector', 'Embeddings', 'Agent Routing'] },
      { name: 'LLM Response Validation', level: 'Expert', isAiKeyword: true, tags: ['Gemini', 'Qwen', 'Cosine Similarity'] },
      { name: 'Prompt Injection Security Guards', level: 'Advanced', isAiKeyword: true, tags: ['Jailbreak Defense', 'System Prompt Leakage'] },
    ],
  },
  {
    title: 'Test Automation & Frameworks',
    iconName: 'Code2',
    description: 'Enterprise test framework design, multi-platform UI & API test orchestration.',
    skills: [
      { name: 'Playwright (Java & TS)', level: 'Expert', tags: ['Modern Web', 'Headless', 'Network Mocking'] },
      { name: 'Selenium WebDriver', level: 'Expert', tags: ['Grid', 'Page Object Model', 'Cross-browser'] },
      { name: 'RestAssured API Automation', level: 'Expert', tags: ['Microservices', 'JSON Schema', 'OAuth 2.0'] },
      { name: 'Testcontainers', level: 'Expert', tags: ['PostgreSQL', 'Kafka', 'Ephemeral DBs'] },
      { name: 'JUnit 5 & TestNG', level: 'Expert', tags: ['Parametrized', 'Parallel Execution', 'Listeners'] },
      { name: 'Python PyTest', level: 'Advanced', tags: ['Automation', 'Data Validation', 'Fast Execution'] },
    ],
  },
  {
    title: 'Leadership & Quality Ownership',
    iconName: 'ShieldCheck',
    description: 'Proven technical leadership, mentoring engineers, code reviews, and release sign-off governance.',
    skills: [
      { name: 'Mentoring 4+ Engineers', level: 'Expert', tags: ['1-on-1s', 'Upskilling', 'Career Growth'] },
      { name: 'QA Release Sign-Off Authority', level: 'Expert', tags: ['Risk Analysis', 'Zero High Severity Escapes'] },
      { name: 'Automation Code Reviews', level: 'Expert', tags: ['Clean Architecture', 'Anti-Flakiness Rules'] },
      { name: 'Test Strategy & Planning', level: 'Expert', tags: ['Shift-Left', 'Risk-Based Coverage', 'Quality Gates'] },
      { name: 'Cross-Functional Collaboration', level: 'Expert', tags: ['Product Managers', 'Dev Leads', 'Architects'] },
    ],
  },
  {
    title: 'DevOps, Cloud & Infrastructure',
    iconName: 'Cpu',
    description: 'Scalable CI/CD pipelines, containerized test grids, and cloud test execution environments.',
    skills: [
      { name: 'Docker & Containerization', level: 'Expert', tags: ['Test Grids', 'Isolated Test Envs'] },
      { name: 'Jenkins & GitHub Actions CI/CD', level: 'Expert', tags: ['Quality Gates', 'Parallel Sharding'] },
      { name: 'PostgreSQL & SQL Scripting', level: 'Advanced', tags: ['Data Seeding', 'Validation', 'pgvector'] },
      { name: 'Performance Testing (k6 / JMeter)', level: 'Advanced', tags: ['Load', 'Stress', 'SLO Verification'] },
      { name: 'Linux & Shell Scripting', level: 'Advanced', tags: ['Automation', 'Log Triage', 'CI Runners'] },
      { name: 'Git & Trunk-Based Development', level: 'Expert', tags: ['PR Workflows', 'Branching Strategy'] },
    ],
  },
];

export const RESUME_ATS_TEXT = `UMASHANKAR PANDEY
Lead SDET / Senior SDET
Email: umashankar.sdet@gmail.com | Portfolio: https://umashankar-sdet.com | Lucknow, Uttar Pradesh, India | LinkedIn: linkedin.com/in/umashankar-pandey-sdet

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Results-driven Lead/Senior SDET with 5+ years of experience architecting resilient test automation frameworks, leading QA release sign-offs, and mentoring engineering teams. Proven track record evaluating enterprise GenAI & RAG systems (OneDesk AI), building scalable multi-layer test harnesses (UI, API, Microservices), and accelerating CI/CD pipelines. Trusted with technical ownership across test strategy, automated quality gates, and code review governance.

CORE COMPETENCIES:
• AI & GenAI Testing: GenAI Response Validation, Groundedness & Hallucination Testing, RAG Pipeline Evaluation, Prompt Regression Testing, Spring AI, pgvector, Gemini API, Qwen LLM, Prompt Injection Security Guards.
• Automation Frameworks: Playwright, Selenium WebDriver, RestAssured, Testcontainers, JUnit 5, TestNG, PyTest, Page Object Model, Screenplay Pattern, Parallel Sharding.
• Technical Leadership: Mentored 4 engineers, Automation Code Reviews, Sole QA Release Sign-Off Authority, Test Strategy, Shift-Left Quality Gates.
• CI/CD & DevOps: Docker, Jenkins, GitHub Actions, Linux/Bash, PostgreSQL, JMeter, k6, Allure Reporting, SonarQube.

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================

SENIOR SDET (Lead Responsibilities) | Enterprise Technology Solutions
Bangalore, India | 2022 - Present
• Mentored a team of 4 SDET engineers in test automation framework architecture, clean code standards, and flaky test remediation.
• Held sole QA Release Sign-Off authority for 14+ production microservices, ensuring zero high-severity production escapes over 18 months.
• Established automation code review standards across engineering squads, reviewing 120+ PRs quarterly and reducing automation test debt by 40%.
• Architected automated GenAI evaluation test harnesses for OneDesk AI utilizing Spring AI, pgvector, and JUnit 5, validating RAG retrieval recall (94.2%) and response groundedness (98.1%).
• Designed a distributed Playwright and RestAssured hybrid framework running on Dockerized clusters, reducing CI/CD regression time by 65% (from 4.2h to 45m).
• Built automated quality gates in Jenkins and GitHub Actions with automated failure triage, flaky test quarantine, and Slack notification webhooks.
• Implemented API contract testing with RestAssured and JSON Schema validators across 40+ endpoints, catching 90%+ contract breakages prior to staging.

SDET II | NextGen Cloud Platforms
Bangalore, India | 2020 - 2022
• Led the transition from a monolithic legacy Selenium suite to a modular Page Object Model + Screenplay framework in Java.
• Onboarded and trained 6 new QA hires across agile rituals, test automation authoring, and CI build troubleshooting.
• Developed REST API automation suites using Java, RestAssured, and TestNG with data-driven Excel/JSON payloads covering 350+ regression scenarios.
• Automated cross-browser tests across Chrome, Firefox, and Safari using Selenium Grid with dynamic browser capabilities.
• Reduced test flakiness from 35% to less than 2% by implementing explicit conditional polling and eliminating hard-coded sleeps.
• Executed performance and load testing using JMeter, validating system capacity under 5,000 concurrent user transactions.

ASSOCIATE QA / SDET I | TechMatrix Software
Bangalore, India | 2019 - 2020
• Automated smoke and regression test suites using Java, Selenium WebDriver, and TestNG.
• Conducted exploratory API testing using Postman, authoring detailed reproduction steps and logs for engineering teams.
• Authored comprehensive test plans, traceability matrices, and exploratory charters for cloud-native web portals.

================================================================================
KEY PROJECTS
================================================================================

OneDesk AI — Enterprise GenAI & RAG Assistant
• Enterprise internal support agent leveraging Spring AI, pgvector, Gemini, and Qwen LLMs.
• Built automated testing suite using JUnit 5 & Testcontainers to validate RAG retrieval recall, groundedness scoring, semantic similarity, and latency bounds.
• Implemented automated prompt regression tests and prompt injection defenses to protect against system instruction leaks.

Enterprise Hybrid Automation Framework
• Modular Playwright, Selenium, and RestAssured framework with API pre-seeding and Dockerized parallel execution, cutting CI test runtime by 65%.

GenAI Output Quality & Hallucination Test Harness
• Automated Python/Java evaluation suite using semantic cosine similarity, BLEU metrics, and adversarial prompt datasets to prevent hallucinated answers in production.

================================================================================
EDUCATION & CERTIFICATIONS
================================================================================
• Bachelor of Technology (B.Tech) in Computer Science & Engineering
• Certified Automation Architect & Advanced Java / Python Test Engineering
`;
