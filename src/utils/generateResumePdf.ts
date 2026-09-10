import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/resumeData';

/**
 * Generates and directly downloads a polished, ATS-optimized 2-page executive PDF resume.
 * Works seamlessly in all browsers including sandboxed iframes without relying on window.print().
 */
export function downloadResumePdf(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 40;
  const contentWidth = pageWidth - marginX * 2; // 532 pt
  let y = 38;

  // Colors
  const primaryNavy = [15, 23, 42];    // #0F172A
  const accentTeal = [13, 118, 110];    // #0D766E
  const textDark = [30, 41, 59];       // #1E293B
  const textMuted = [100, 116, 139];   // #64748B
  const dividerLine = [226, 232, 240]; // #E2E8F0

  // Helper: Section Header
  const renderSectionHeader = (title: string) => {
    y += 10;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
    doc.text(title.toUpperCase(), marginX, y);
    
    y += 3;
    doc.setDrawColor(dividerLine[0], dividerLine[1], dividerLine[2]);
    doc.setLineWidth(0.75);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 10;
  };

  // Helper: Bullet point with wrapping
  const renderBullet = (text: string, indent = 12) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);

    const bulletX = marginX + indent;
    const textX = bulletX + 8;
    const maxTextWidth = contentWidth - indent - 8;

    // Draw bullet symbol
    doc.text('•', bulletX, y);

    const lines = doc.splitTextToSize(text, maxTextWidth);
    lines.forEach((line: string) => {
      doc.text(line, textX, y);
      y += 11.2;
    });
  };

  // ==========================================
  // PAGE 1
  // ==========================================

  // Header Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(PERSONAL_INFO.name.toUpperCase(), marginX, y);

  // Target Title
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(`${PERSONAL_INFO.targetTitle.toUpperCase()} • QA ENGINEERING ARCHITECT`, marginX, y);

  // Contact Strip
  y += 13;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const contactText = `Location: ${PERSONAL_INFO.location}  |  Email: ${PERSONAL_INFO.email}  |  Portfolio: ${PERSONAL_INFO.portfolioDomainIdea}`;
  doc.text(contactText, marginX, y);

  y += 11;
  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin.replace('https://', '')}  |  GitHub: ${PERSONAL_INFO.github.replace('https://', '')}`;
  doc.text(linksText, marginX, y);

  // Divider
  y += 5;
  doc.setDrawColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.setLineWidth(1.5);
  doc.line(marginX, y, marginX + contentWidth, y);

  // SECTION 1: PROFESSIONAL SUMMARY
  renderSectionHeader('Executive Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const summaryLines = doc.splitTextToSize(
    `${PERSONAL_INFO.summary} Trusted with technical ownership across test strategy, automated quality gates, team mentorship (4 engineers), and sole release sign-off governance for 14+ core production microservices.`,
    contentWidth
  );
  summaryLines.forEach((line: string) => {
    doc.text(line, marginX, y);
    y += 11.5;
  });

  // SECTION 2: CORE TECHNICAL COMPETENCIES
  renderSectionHeader('Core Technical Competencies');

  // Competency categories
  const competencies = [
    {
      cat: 'GenAI & AI System Testing:',
      val: 'Retrieval-Augmented Generation (RAG) Evaluation, Semantic Groundedness, Hallucination Prevention, Prompt Regression Suites, Spring AI, pgvector, Gemini & Qwen LLM Validation, Prompt Injection Defense.',
    },
    {
      cat: 'Automation Frameworks:',
      val: 'Playwright (Java/TS), Selenium WebDriver, RestAssured, Testcontainers (ephemeral DBs), JUnit 5, TestNG, PyTest, Page Object Model (POM), Screenplay Pattern, Parallel Dockerized Grid Sharding.',
    },
    {
      cat: 'Technical Leadership:',
      val: 'Mentored squad of 4 SDETs, Sole QA Release Sign-Off Authority, Automation PR Code Reviews, Shift-Left Quality Strategy, Defect Prevention Architecture, Zero Critical Escapes in 18 Months.',
    },
    {
      cat: 'CI/CD & DevOps Infrastructure:',
      val: 'Docker, GitHub Actions, Jenkins Pipeline As Code, Linux/Bash, PostgreSQL & SQL, JMeter / k6 Load Testing, Allure Quality Dashboards, SonarQube Quality Gates.',
    },
  ];

  competencies.forEach((c) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.6);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(c.cat, marginX, y);

    const catWidth = doc.getTextWidth(c.cat) + 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.6);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);

    const remainingWidth = contentWidth - catWidth;
    const lines = doc.splitTextToSize(c.val, remainingWidth);
    
    // First line next to label
    if (lines.length > 0) {
      doc.text(lines[0], marginX + catWidth, y);
      y += 11;
      // Subsequent lines indented
      for (let i = 1; i < lines.length; i++) {
        doc.text(lines[i], marginX + catWidth, y);
        y += 11;
      }
    }
  });

  // SECTION 3: PROFESSIONAL EXPERIENCE (Role 1)
  renderSectionHeader('Professional Experience');

  const exp1 = EXPERIENCES[0];
  // Role & Company Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(exp1.role, marginX, y);

  // Period on right
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const periodText = `${exp1.period} | ${exp1.location}`;
  const periodWidth = doc.getTextWidth(periodText);
  doc.text(periodText, marginX + contentWidth - periodWidth, y);

  y += 11;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(exp1.company, marginX, y);

  y += 11;
  // Leadership & Technical bullets for Exp 1
  const exp1Bullets = [
    'Mentored squad of 4 SDET engineers in test automation architecture, clean code standards, and flaky test remediation.',
    'Sole QA Release Sign-Off authority for 14+ core production microservices, maintaining zero high-severity production escapes across 18 months.',
    'Architected automated OneDesk AI GenAI evaluation pipelines using JUnit 5, Spring AI, and Testcontainers to validate RAG retrieval recall (94.2%) and groundedness.',
    'Designed distributed hybrid test framework with Playwright and RestAssured running on Dockerized grids, slashing regression runtime by 65% (4.2h to 45m).',
    'Spearheaded automation code review lifecycle, standardizing PR checklists and reducing test suite debt by 40% across engineering repos.',
    'Engineered automated quality gates in GitHub Actions/Jenkins with automated failure triage, flaky test quarantine, and Slack notification webhooks.',
    'Implemented API contract testing using RestAssured and JSON Schema validators across 40+ endpoints, catching 90%+ contract breakages pre-merge.',
  ];

  exp1Bullets.forEach((b) => renderBullet(b));

  // Tech stack tag line for Exp 1
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.2);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const techLine1 = `Tech Stack: ${exp1.technologies.slice(0, 10).join(' • ')}`;
  doc.text(techLine1, marginX, y);

  // Page 1 Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Page 1 of 2  •  ${PERSONAL_INFO.name} — Lead SDET Resume`, marginX, pageHeight - 25);
  doc.text(`Confidential • Targeting Lead SDET / Staff QA Roles`, marginX + contentWidth - 210, pageHeight - 25);

  // ==========================================
  // PAGE 2
  // ==========================================
  doc.addPage();
  y = 38;

  // Running Header on Page 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(`${PERSONAL_INFO.name.toUpperCase()} — Lead SDET Resume (Continued)`, marginX, y);

  y += 3;
  doc.setDrawColor(dividerLine[0], dividerLine[1], dividerLine[2]);
  doc.setLineWidth(0.75);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 10;

  // Role 2: SDET II
  const exp2 = EXPERIENCES[1];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(exp2.role, marginX, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const exp2Period = `${exp2.period} | ${exp2.location}`;
  doc.text(exp2Period, marginX + contentWidth - doc.getTextWidth(exp2Period), y);

  y += 11;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(exp2.company, marginX, y);

  y += 11;
  const exp2Bullets = [
    'Led migration from legacy monolithic Selenium suite to modular Page Object Model + Screenplay pattern framework in Java.',
    'Onboarded and coached 6 new QA engineers across agile ceremonies, test automation authoring, and CI build troubleshooting.',
    'Built reusable REST API automation suites using Java, RestAssured, and TestNG covering 350+ data-driven regression scenarios.',
    'Automated cross-browser test suites across Chrome, Firefox, and Safari using Selenium Grid with dynamic capabilities.',
    'Reduced test flakiness from 35% to less than 2% by implementing explicit conditional polling and eliminating hard-coded sleeps.',
    'Authored performance test scripts using JMeter to simulate 5,000+ concurrent user loads during peak promotional events.',
  ];
  exp2Bullets.forEach((b) => renderBullet(b));

  // Role 3: Associate QA / SDET I
  y += 5;
  const exp3 = EXPERIENCES[2];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(exp3.role, marginX, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const exp3Period = `${exp3.period} | ${exp3.location}`;
  doc.text(exp3Period, marginX + contentWidth - doc.getTextWidth(exp3Period), y);

  y += 11;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(exp3.company, marginX, y);

  y += 11;
  const exp3Bullets = [
    'Automated smoke and regression test suites using Java, Selenium WebDriver, and TestNG for web portals.',
    'Conducted exploratory API testing using Postman, authoring detailed reproduction steps and logs for dev teams.',
    'Authored comprehensive test plans, traceability matrices, and exploratory charters for cloud-native web portals.',
  ];
  exp3Bullets.forEach((b) => renderBullet(b));

  // SECTION 4: FEATURED ARCHITECTURAL PROJECTS
  renderSectionHeader('Featured Engineering & GenAI Projects');

  // Project 1: OneDesk AI
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('OneDesk AI — Enterprise GenAI & RAG Assistant with Automated Testing Harness', marginX, y);
  y += 11;

  const proj1Bullets = [
    'Spearheaded RAG pipeline integration using Spring AI, pgvector embeddings, and dynamic agent routing between Gemini & Qwen models.',
    'Engineered automated GenAI test harness with JUnit 5 & Testcontainers, spinning up real PostgreSQL + pgvector instances during integration testing.',
    'Designed automated groundedness and hallucination detection tests, evaluating generated answers against retrieved context chunks using cosine similarity thresholds (>0.85).',
    'Implemented automated prompt regression suites verifying that model fine-tuning and system prompt updates do not degrade prior edge-case answers.',
  ];
  proj1Bullets.forEach((b) => renderBullet(b));

  // Project 2: Enterprise Hybrid Automation Framework
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('Enterprise Distributed Automation Framework (Playwright + RestAssured + Docker)', marginX, y);
  y += 11;

  const proj2Bullets = [
    'Multi-layer test architecture decoupling API pre-seeding from UI assertions, reducing execution time by 65%.',
    'Containerized Testcontainers test infrastructure ensuring 100% deterministic test execution on CI runners.',
  ];
  proj2Bullets.forEach((b) => renderBullet(b));

  // SECTION 5: EDUCATION & CREDENTIALS
  renderSectionHeader('Education & Professional Certifications');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', marginX, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.6);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text('Certified Automation Test Architect  •  Advanced Java & Python Test Engineering  •  GenAI Engineering & RAG Evaluation', marginX, y);
  y += 11;

  // Page 2 Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Page 2 of 2  •  ${PERSONAL_INFO.name} — Lead SDET Resume`, marginX, pageHeight - 25);
  doc.text(`Download verified from: ${PERSONAL_INFO.portfolioDomainIdea}`, marginX + contentWidth - 190, pageHeight - 25);

  // Trigger real file download in the browser
  const filename = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Lead_SDET_Resume.pdf`;
  doc.save(filename);
}
