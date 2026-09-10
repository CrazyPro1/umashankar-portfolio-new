import { ExperienceItem, ProjectItem, SkillCategory, ATSKeyword, LanguageItem } from '../types';

export const LANGUAGES: LanguageItem[] = [
  {
    name: 'English',
    level: 'Professional Working Proficiency (Fluent)',
    proficiencyNote: 'Daily communication with cross-functional global stakeholders, technical QA architecture documentation, executive sprint sign-offs, and engineer mentorship.',
  },
  {
    name: 'Hindi',
    level: 'Native / Full Bilingual Fluency',
    proficiencyNote: 'Native language with complete professional fluency in spoken and written communication.',
  },
];

export const PERSONAL_INFO = {
  name: 'Umashankar Pandey',
  currentDesignation: 'Senior SDET',
  currentCompany: 'Freecharge Payment Technologies by Axis Bank',
  currentCompanyNote: 'FinTech, 2FA Module & Microservices Test Automation Lead',
  lookingForDesignation: 'Lead SDET / Staff SDET',
  targetRoleScope: 'Leading Automation Squads, Team Mentorship & GenAI Quality Gates',
  targetTitle: 'Lead SDET',
  currentTitle: 'Senior SDET',
  yearsOfExperience: '5+ Years',
  location: 'Ayodhya, Uttar Pradesh, India',
  relocationPreference: 'Open to Remote & Worldwide Relocation',
  phone: '+91 8299867994',
  email: 'pandeyusp1@gmail.com',
  linkedin: 'https://linkedin.com/in/umashankar-pandey-sdet',
  github: 'https://github.com/umashankar-pandey',
  portfolioDomainIdea: 'umashankar-sdet.com',
  profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  defaultPhotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
  summary: `Senior SDET & QA Release Gatekeeper with 5+ years of experience architecting and scaling enterprise test automation frameworks across FinTech, Banking, and Data Services domains. Currently serving as Senior SDET and sole QA Release Sign-Off Authority across 14+ core production microservices at Freecharge Payment Technologies by Axis Bank with zero high-severity escapes over 18+ consecutive months. Proven track record refactoring API architectures using Java 21, Spring Boot, and REST Assured, containerizing test suites with Docker & Kubernetes (cutting CI regression runtime by 40-65%), and engineering GenAI / RAG quality evaluation harnesses with Spring AI and pgvector. Mentored 4+ engineers and actively targeting Lead SDET roles to steer engineering quality strategy and scale automation squads.`,
  coreHighlights: [
    { label: 'Current Company', value: 'Freecharge (Axis Bank)', subtitle: 'Senior SDET · FinTech & 2FA Lead' },
    { label: 'Total Experience', value: '5+ Years', subtitle: 'FinTech, Banking & Data Services' },
    { label: 'Prior Experience', value: 'Nagarro Software', subtitle: 'Automation Analyst (3.5+ Years)' },
    { label: 'Leadership', value: 'Sole QA Sign-Off', subtitle: '14+ Microservices · Zero Escapes' },
    { label: 'Speedup', value: '65% Faster', subtitle: 'Docker & Kubernetes parallel execution' },
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
    id: 'freecharge-senior-sdet',
    role: 'Senior SDET',
    targetRole: 'Lead SDET',
    company: 'Freecharge Payment Technologies by Axis Bank',
    location: 'Gurugram / Remote, India',
    period: 'FEB 2025 - PRESENT',
    type: 'Full-time',
    leadershipHighlights: [
      'Led end-to-end testing and release sign-off of critical 2FA security module, delivering 10% ahead of schedule with zero production bugs; received commendation from Program Manager.',
      'Refactored API test framework using Java 21, Spring Boot, REST Assured, and applied Factory & Singleton design patterns, improving execution speed by 30% and reducing flaky tests by 20%.',
      'Containerized test suite with Docker and Kubernetes for parallel execution, cutting runtime by 40% and infrastructure costs by 15%.',
      'Managed AWS cloud deployments (EC2, EKS), optimizing resource utilization and cutting cloud expenses by 10%.',
    ],
    responsibilities: [
      'Architected reusable, data-driven API automation suites with Postman and REST Assured, boosting overall test coverage by 25%.',
      'Engineered automated real-time reporting with Google Meet integration and email alerts, enhancing visibility and reducing issue resolution time by 20%.',
      'Spearheaded QA release sign-off governance across high-throughput microservices, ensuring continuous release stability.',
      'Contributed actively to Agile ceremonies including sprint planning, architectural reviews, daily stand-ups, and retrospectives.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'REST Assured',
      'Docker',
      'Kubernetes',
      'AWS (EC2, EKS)',
      'Postman',
      'Jenkins',
      'Git',
      'TestNG',
      'WireMock',
    ],
    impactMetrics: [
      { label: 'Runtime Cut', value: '40%', description: 'Parallel Docker & Kubernetes execution' },
      { label: 'Speed Improvement', value: '30%', description: 'Java 21 & design pattern refactoring' },
      { label: 'Coverage Boost', value: '+25%', description: 'Data-driven Postman & REST Assured' },
      { label: '2FA Module Bugs', value: '0 P0/P1', description: 'Delivered ahead of schedule with zero escapes' },
    ],
  },
  {
    id: 'nagarro-automation-analyst',
    role: 'Automation Analyst',
    company: 'Nagarro Software Pvt. Ltd',
    location: 'Gurugram / Onsite, India',
    period: 'SEPT 2021 - FEB 2025',
    type: 'Full-time',
    leadershipHighlights: [
      'Delivered end-to-end test automation strategy and Agile delivery across multiple global enterprise clients in FinTech, Banking, and Data Services domains.',
      'Saudi Bank (Onsite – FinTech Domain): Automated regression suite using Selenium + Cucumber, reducing test cycle time by 30%.',
      'Built modular BDD and Page Object Model (POM) frameworks ensuring high reusability, test readability, and seamless onboarding for QA team members.',
      'Defined 500+ test scenarios and governed 200+ defects via JIRA with automated CI regression triggers via Jenkins.',
    ],
    responsibilities: [
      'Containerized Selenium test executions with Docker for consistent cross-platform parity; orchestrated BrowserStack for multi-device/browser testing.',
      'LNRS (Data Services Domain): Engineered modular automation frameworks using Playwright and REST Assured for unified web and API testing.',
      'Conducted extensive SQL-based database testing and implemented automated data-driven test suites for 1,000+ complex scenarios.',
      'Integrated frameworks with Jenkins, Git, and automated quality gates, ensuring test coverage across 10+ device/browser configurations with Playwright.',
    ],
    technologies: [
      'Selenium',
      'Playwright',
      'Cucumber BDD',
      'REST Assured',
      'Java',
      'Python',
      'Docker',
      'Jenkins',
      'BrowserStack',
      'JIRA',
      'SQL / MySQL',
      'Git',
    ],
    impactMetrics: [
      { label: 'Cycle Time Cut', value: '30%', description: 'Saudi Bank FinTech regression automation' },
      { label: 'Scenarios Automated', value: '1,000+', description: 'SQL-based DB and API scenarios at LNRS' },
      { label: 'Test Scenarios & Defects', value: '500+ / 200+', description: 'Defined & managed via JIRA and Zephyr' },
      { label: 'Device Coverage', value: '10+ setups', description: 'Unified Playwright cross-browser matrix' },
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
Lead SDET | QA Engineering Architect | Senior SDET (5+ Years Experience)
Phone: +91 8299867994 | Email: pandeyusp1@gmail.com | Location: Ayodhya, Uttar Pradesh, India (Open to Remote & Relocation)
LinkedIn: linkedin.com/in/umashankar-pandey-sdet | GitHub: github.com/umashankar-pandey | Portfolio: https://umashankar-sdet.com

================================================================================
PROFESSIONAL SUMMARY
================================================================================
Results-driven Senior SDET & QA Engineering Architect with 5+ years of experience architecting resilient test automation frameworks across FinTech, Banking, and Data Services domains. Sole QA Release Sign-Off Gatekeeper for 14+ core production microservices at Freecharge Payment Technologies by Axis Bank, maintaining zero high-severity escapes over 18+ consecutive months. Expert in refactoring enterprise API test architectures with Java 21, Spring Boot, REST Assured, and Design Patterns (Factory, Singleton), cutting pipeline regression runtimes by 40-65% through Docker and Kubernetes parallelization. Pioneer in GenAI & RAG quality evaluation (OneDesk AI, Spring AI, pgvector, prompt regression, semantic groundedness scoring). Proven track record mentoring 4+ engineers, governing code reviews, and steering Agile quality strategy. Actively targeting Lead SDET and Staff QA Architect roles.

================================================================================
CORE TECHNICAL & LEADERSHIP COMPETENCIES
================================================================================
• Languages & Frameworks: Java 21, Python, TypeScript, Spring Boot, REST Assured, Playwright, Selenium WebDriver, TestNG, JUnit 5, Cucumber BDD, WireMock, PyTest, Testcontainers.
• AI & GenAI Quality Engineering: Retrieval-Augmented Generation (RAG) Evaluation, Semantic Groundedness Scoring, Hallucination Prevention, Prompt Regression Suites, Spring AI, pgvector, Gemini API, Qwen LLM, Cosine Similarity Thresholds (>0.85), Prompt Injection Defense.
• CI/CD & Cloud Infrastructure: Docker Containerization, Kubernetes (EKS), AWS (EC2, EKS, Lambda, S3), Jenkins Pipeline-as-Code, GitHub Actions, Linux/Bash, Bitbucket, Git, BrowserStack Grid.
• Databases & Test Infrastructure: PostgreSQL, MySQL, Microsoft SQL Server, Testcontainers (ephemeral DBs), Postman, JMeter, Fiddler.
• Leadership & Governance: Sole QA Release Sign-Off Authority (14+ Microservices), Mentoring 4+ Engineers, Automation Code Reviews, Shift-Left Strategy, Zero-Defect Escapes.

================================================================================
PROFESSIONAL EXPERIENCE
================================================================================

SENIOR SDET (Lead Scope & QA Release Sign-Off Authority)
Freecharge Payment Technologies by Axis Bank | Gurugram / Remote, India
FEB 2025 - PRESENT
• Sole QA Release Sign-Off Gatekeeper across 14+ core production microservices; sustained zero P0/P1 defect escapes across 18+ consecutive months under high-throughput FinTech transaction volume.
• Refactored API test framework using Java 21, Spring Boot, REST Assured, and applied Factory & Singleton design patterns, improving execution speed by 30% and reducing flaky tests by 20%.
• Designed reusable, data-driven API automation tests using Postman and REST Assured, boosting overall service test coverage by 25%.
• Containerized test suite with Docker and Kubernetes for parallel multi-thread execution, cutting CI regression runtime by 40% and cloud infrastructure costs by 15%.
• Led end-to-end testing and release governance of mission-critical 2FA security authentication module, delivering 10% ahead of schedule with zero production bugs; recognized with commendation from Program Manager.
• Developed real-time automated reporting integrating Google Meet webhooks and email alerts, enhancing visibility and reducing defect triage and resolution time by 20%.
• Managed AWS cloud deployment (EC2, EKS), optimizing node autoscaling and trimming cloud expenses by 10%.
• Mentored 4 engineers through paired programming, daily standups, and rigorous automation pull request (PR) reviews.

AUTOMATION ANALYST (3.5+ Years)
Nagarro Software Pvt. Ltd | Gurugram / Onsite, India
SEPT 2021 - FEB 2025
• Directed test automation architectures across enterprise global clients in FinTech, Banking, and Data Services domains, driving Agile release quality and CI/CD maturity.
• Client - Saudi Bank (FinTech Domain): Automated full regression suite using Selenium WebDriver + Cucumber BDD, reducing release regression cycle time by 30%.
• Engineered modular BDD and Page Object Model (POM) frameworks, improving test asset reusability and onboarding efficiency for incoming team members.
• Defined 500+ test scenarios and governed 200+ defects via JIRA; integrated automated CI test triggers via Jenkins.
• Containerized Selenium tests with Docker for cross-platform execution; executed cross-browser suites across 15+ browser and OS combinations on BrowserStack.
• Client - LNRS (Data Services Domain): Engineered unified automation framework using Playwright and REST Assured for web UI and high-throughput REST API validation.
• Conducted comprehensive SQL-based database testing and built automated data-driven test suites validating 1,000+ complex relational scenarios.
• Ensured continuous cross-browser and cross-device coverage across 10+ environments with Playwright and version control via Git/Bitbucket.

================================================================================
FEATURED ENGINEERING & GENAI PROJECTS
================================================================================

OneDesk AI — Enterprise GenAI & RAG Assistant with Automated Testing Harness
• Enterprise internal support agent leveraging Spring AI, pgvector embeddings, and dynamic agent routing between Gemini & Qwen models.
• Engineered automated GenAI test harness with JUnit 5 & Testcontainers, spinning up real PostgreSQL + pgvector instances during integration testing.
• Designed automated groundedness and hallucination detection tests, evaluating generated answers against retrieved context chunks using cosine similarity thresholds (>0.85).
• Implemented automated prompt regression suites verifying that model updates and prompt modifications do not degrade prior edge-case answers or leak system instructions.

Enterprise Hybrid Automation Framework (Playwright + RestAssured + Docker)
• Architected multi-layer test framework decoupling API state pre-seeding from UI assertions, reducing end-to-end execution time by 40-65%.
• Containerized test execution on Docker and Kubernetes with automated quality gates embedded in Jenkins pipelines.

================================================================================
LANGUAGES KNOWN
================================================================================
• English: Professional Working Proficiency (Fluent) — Technical documentation, global team coordination, stakeholder alignment, and executive release sign-offs.
• Hindi: Native / Full Bilingual Proficiency — Native fluency in verbal and written communication.

================================================================================
EDUCATION & CERTIFICATIONS
================================================================================
• Bachelor of Technology (B.Tech) in Computer Science | West Bengal University of Technology (2017 - 2021) | GPA: 8.0 / 10
• Certified Automation Test Architect | Advanced Java & Python Test Engineering | GenAI Prompt Evaluation
`;
