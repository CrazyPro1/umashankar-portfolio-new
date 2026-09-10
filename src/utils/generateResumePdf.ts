import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/resumeData';

/**
 * Generates and directly downloads a polished, ATS-optimized 2-page executive PDF resume.
 * Works seamlessly in all browsers including sandboxed iframes without relying on window.print().
 */
export function downloadResumePdf(customLocation?: string): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const effectiveLocation = customLocation || (typeof window !== 'undefined' ? localStorage.getItem('umashankar_current_location') : null) || PERSONAL_INFO.location;

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
  const contactText = `Location: ${effectiveLocation}  |  Phone: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}`;
  doc.text(contactText, marginX, y);

  y += 11;
  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin.replace('https://', '')}  |  GitHub: ${PERSONAL_INFO.github.replace('https://', '')}  |  Portfolio: ${PERSONAL_INFO.portfolioDomainIdea}`;
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
    `${PERSONAL_INFO.summary}`,
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
      cat: 'FinTech & Microservices QA:',
      val: 'API test framework architecture (Java 21, Spring Boot, REST Assured, Factory/Singleton patterns), 2FA security modules, Docker & Kubernetes parallel execution, AWS (EC2, EKS).',
    },
    {
      cat: 'GenAI & AI System Testing:',
      val: 'Retrieval-Augmented Generation (RAG) Evaluation, Semantic Groundedness, Hallucination Prevention, Prompt Regression Suites, Spring AI, pgvector, Gemini & Qwen LLM Validation.',
    },
    {
      cat: 'Enterprise Automation Frameworks:',
      val: 'Playwright, Selenium WebDriver, Cucumber BDD, TestNG, WireMock, Postman, BrowserStack cross-browser grid, Page Object Model (POM), data-driven testing (1,000+ scenarios).',
    },
    {
      cat: 'CI/CD & Cloud Infrastructure:',
      val: 'Docker containerization, Kubernetes, Jenkins Pipeline As Code, Git/Bitbucket, AWS cloud infrastructure, JIRA/Zephyr defect governance, automated Meet/email quality alerts.',
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
    'Refactored API test framework using Java 21, Spring Boot, REST Assured, and applied Factory & Singleton design patterns, improving execution speed by 30% and reducing flaky tests by 20%.',
    'Designed reusable, data-driven API automation tests using Postman and REST Assured, boosting overall test coverage by 25%.',
    'Containerized test suite with Docker and Kubernetes for parallel execution, cutting runtime by 40% and infrastructure costs by 15%.',
    'Developed real-time automated reporting with Google Meet and email alerts, enhancing visibility and reducing issue resolution time by 20%.',
    'Led end-to-end testing of 2FA module, delivering 10% ahead of schedule with zero production bugs; received commendation from Program Manager.',
    'Managed AWS cloud deployment (EC2, EKS), optimizing resource utilization and cutting cloud expenses by 10%.',
    'Contributed actively to Agile ceremonies including sprint planning, daily stand-ups, architectural reviews, and retrospectives.',
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
  doc.text(`Targeting Lead SDET / QA Architect Roles`, marginX + contentWidth - 190, pageHeight - 25);

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

  // Role 2: Automation Analyst at Nagarro
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
    'Worked on multiple client projects across FinTech, Banking, and Data Services domains, driving end-to-end automation strategy and Agile delivery.',
    'Saudi Bank (Onsite – FinTech Domain): Automated regression suite using Selenium + Cucumber BDD, reducing test cycle time by 30%.',
    'Built modular BDD and Page Object Model (POM) frameworks for enhanced test readability, reusability, and fast onboarding.',
    'Defined 500+ test scenarios and managed 200+ defects via JIRA; integrated Jenkins CI for continuous test execution.',
    'Containerized Selenium tests with Docker for cross-platform execution; executed cross-browser suites on BrowserStack.',
    'LNRS (Data Services Domain): Developed modular automation frameworks using Playwright and REST Assured for web and API testing.',
    'Conducted SQL-based DB testing and implemented automated data-driven test suites for 1,000+ complex scenarios.',
    'Ensured continuous test coverage across 10+ device and browser setups with Playwright and version control via Git/Bitbucket.',
  ];
  exp2Bullets.forEach((b) => renderBullet(b));

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
    'Multi-layer test architecture decoupling API pre-seeding from UI assertions, reducing execution time by 40-65%.',
    'Containerized Testcontainers test infrastructure ensuring 100% deterministic test execution on CI runners.',
  ];
  proj2Bullets.forEach((b) => renderBullet(b));

  // SECTION 5: EDUCATION & CREDENTIALS
  renderSectionHeader('Education & Professional Certifications');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('Bachelor of Technology (B.Tech) in Computer Science  |  West Bengal University of Technology (2017 - 2021)', marginX, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.6);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text('Academic Performance: GPA 8 / 10  •  Certified Automation Test Architect  •  Languages: English (Fluent), Hindi (Fluent), German (Basics)', marginX, y);
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
