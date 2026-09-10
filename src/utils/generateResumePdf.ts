import { jsPDF } from 'jspdf';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, LANGUAGES } from '../data/resumeData';

/**
 * Creates and formats the complete, perfectly balanced 2-page executive PDF resume.
 * Page 1: Header, Summary, Competencies, Experience at Freecharge (Axis Bank), and Experience at Nagarro.
 * Page 2: Running Header, Featured Engineering & GenAI Projects (OneDesk AI, Framework, 2FA), Languages Known, Education, Certifications.
 * Eliminates empty whitespace gaps between pages.
 */
export function createResumePdfDoc(customLocation?: string): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter', // 612 x 792 pt
  });

  const effectiveLocation = customLocation || (typeof window !== 'undefined' ? localStorage.getItem('umashankar_current_location') : null) || PERSONAL_INFO.location;

  const pageWidth = 612;
  const pageHeight = 792;
  const marginX = 38;
  const contentWidth = pageWidth - marginX * 2; // 536 pt
  let y = 34;

  // Colors
  const primaryNavy = [15, 23, 42];    // #0F172A
  const accentTeal = [13, 118, 110];   // #0D766E
  const textDark = [30, 41, 59];       // #1E293B
  const textMuted = [100, 116, 139];   // #64748B
  const dividerLine = [226, 232, 240]; // #E2E8F0

  // Helper: Section Header
  const renderSectionHeader = (title: string, topPadding = 9, bottomPadding = 7) => {
    y += topPadding;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
    doc.text(title.toUpperCase(), marginX, y);

    y += 2.5;
    doc.setDrawColor(dividerLine[0], dividerLine[1], dividerLine[2]);
    doc.setLineWidth(0.75);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += bottomPadding;
  };

  // Helper: Bullet point with wrapping
  const renderBullet = (text: string, indent = 10, lineGap = 10.5) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.4);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);

    const bulletX = marginX + indent;
    const textX = bulletX + 7;
    const maxTextWidth = contentWidth - indent - 7;

    // Draw bullet symbol
    doc.text('•', bulletX, y);

    const lines = doc.splitTextToSize(text, maxTextWidth);
    lines.forEach((line: string) => {
      doc.text(line, textX, y);
      y += lineGap;
    });
  };

  // ==========================================
  // PAGE 1: Core Leadership & 5+ Years Experience
  // ==========================================

  // Header Banner
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(PERSONAL_INFO.name.toUpperCase(), marginX, y);

  // Target Title & Experience Tag
  y += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(`${PERSONAL_INFO.targetTitle.toUpperCase()} • QA ENGINEERING ARCHITECT  |  5+ YEARS EXPERIENCE`, marginX, y);

  // Contact Strip
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const contactText = `Location: ${effectiveLocation}  |  Phone: ${PERSONAL_INFO.phone}  |  Email: ${PERSONAL_INFO.email}`;
  doc.text(contactText, marginX, y);

  y += 10;
  const linksText = `LinkedIn: ${PERSONAL_INFO.linkedin.replace('https://', '')}  |  GitHub: ${PERSONAL_INFO.github.replace('https://', '')}  |  Portfolio: ${PERSONAL_INFO.portfolioDomainIdea}`;
  doc.text(linksText, marginX, y);

  // Top Divider
  y += 5;
  doc.setDrawColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.setLineWidth(1.5);
  doc.line(marginX, y, marginX + contentWidth, y);

  // SECTION 1: PROFESSIONAL SUMMARY
  renderSectionHeader('Executive Professional Summary', 8, 7);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.4);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  const summaryLines = doc.splitTextToSize(
    `${PERSONAL_INFO.summary}`,
    contentWidth
  );
  summaryLines.forEach((line: string) => {
    doc.text(line, marginX, y);
    y += 10.8;
  });

  // SECTION 2: CORE TECHNICAL COMPETENCIES
  renderSectionHeader('Core Technical Competencies', 7, 7);

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
      val: 'Docker containerization, Kubernetes, Jenkins Pipeline As Code, Git/Bitbucket, AWS cloud infrastructure, JIRA/Zephyr defect governance, automated Google Meet/email quality alerts.',
    },
  ];

  competencies.forEach((c) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.3);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    doc.text(c.cat, marginX, y);

    const catWidth = doc.getTextWidth(c.cat) + 5;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.3);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);

    const remainingWidth = contentWidth - catWidth;
    const lines = doc.splitTextToSize(c.val, remainingWidth);

    if (lines.length > 0) {
      doc.text(lines[0], marginX + catWidth, y);
      y += 10.5;
      for (let i = 1; i < lines.length; i++) {
        doc.text(lines[i], marginX + catWidth, y);
        y += 10.5;
      }
    }
  });

  // SECTION 3: PROFESSIONAL EXPERIENCE (Freecharge & Nagarro)
  renderSectionHeader('Professional Experience', 7, 7);

  // Experience 1: Freecharge Payment Technologies by Axis Bank
  const exp1 = EXPERIENCES[0];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(exp1.role, marginX, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.4);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const periodText1 = `${exp1.period} | ${exp1.location}`;
  const periodWidth1 = doc.getTextWidth(periodText1);
  doc.text(periodText1, marginX + contentWidth - periodWidth1, y);

  y += 10.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.6);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(exp1.company, marginX, y);

  y += 9.5;
  const exp1Bullets = [
    'Sole QA Release Sign-Off Gatekeeper across 14+ core production microservices; sustained zero P0/P1 defect escapes across 18+ consecutive months under high-throughput FinTech load.',
    'Refactored API test framework using Java 21, Spring Boot, REST Assured, and applied Factory & Singleton design patterns, improving execution speed by 30% and reducing flaky tests by 20%.',
    'Designed reusable, data-driven API automation tests using Postman and REST Assured, boosting overall test coverage by 25%.',
    'Containerized test suite with Docker and Kubernetes for parallel multi-thread execution, cutting CI regression runtime by 40% and infrastructure costs by 15%.',
    'Led end-to-end testing of mission-critical 2FA module, delivering 10% ahead of schedule with zero production bugs; received commendation from Program Manager.',
    'Developed real-time automated reporting with Google Meet and email alerts, enhancing visibility and reducing issue resolution time by 20%.',
    'Mentored 4 engineers through paired programming, daily stand-ups, architectural reviews, and automation PR gatekeeping.',
  ];
  exp1Bullets.forEach((b) => renderBullet(b, 10, 10.2));

  y += 1;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const techLine1 = `Tech Stack: ${exp1.technologies.slice(0, 10).join(' • ')}`;
  doc.text(techLine1, marginX, y);

  // Experience 2: Nagarro Software Pvt. Ltd (Starts cleanly on Page 1)
  y += 8;
  const exp2 = EXPERIENCES[1];
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text(`${exp2.role}  (3.5+ Years Experience)`, marginX, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.4);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const exp2Period = `${exp2.period} | ${exp2.location}`;
  doc.text(exp2Period, marginX + contentWidth - doc.getTextWidth(exp2Period), y);

  y += 10.5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.6);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(exp2.company, marginX, y);

  y += 9.5;
  const exp2Bullets = [
    'Client - Saudi Bank (FinTech): Automated regression suite using Selenium WebDriver + Cucumber BDD, reducing test cycle time by 30%.',
    'Engineered modular BDD and Page Object Model (POM) frameworks, improving test asset reusability and onboarding speed.',
    'Defined 500+ test scenarios and managed 200+ defects via JIRA; integrated Jenkins CI for continuous test execution.',
    'Containerized Selenium tests with Docker; executed cross-browser suites across 15+ setups on BrowserStack.',
    'Client - LNRS (Data Services): Developed unified automation framework using Playwright and REST Assured for web and API testing.',
    'Conducted SQL-based database testing and built automated data-driven test suites for 1,000+ complex relational scenarios.',
  ];
  exp2Bullets.forEach((b) => renderBullet(b, 10, 10.2));

  y += 1;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(7.8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  const techLine2 = `Tech Stack: Java • Selenium WebDriver • Playwright • Cucumber BDD • Rest Assured • TestNG • Docker • Jenkins • SQL`;
  doc.text(techLine2, marginX, y);

  // Page 1 Footer (Evenly spaced at bottom, no empty void!)
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Page 1 of 2  •  ${PERSONAL_INFO.name} — Lead SDET Resume`, marginX, pageHeight - 20);
  doc.text(`Targeting Lead SDET / QA Architect Roles`, marginX + contentWidth - 190, pageHeight - 20);

  // ==========================================
  // PAGE 2: GenAI Projects, Languages & Credentials
  // ==========================================
  doc.addPage();
  y = 34;

  // Running Header on Page 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  doc.text(`${PERSONAL_INFO.name.toUpperCase()} — Lead SDET Resume  |  Projects & Credentials`, marginX, y);

  y += 3;
  doc.setDrawColor(dividerLine[0], dividerLine[1], dividerLine[2]);
  doc.setLineWidth(0.75);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 8;

  // SECTION 4: FEATURED ARCHITECTURAL & GENAI PROJECTS
  renderSectionHeader('Featured Engineering & GenAI Projects', 4, 7);

  // Project 1: OneDesk AI
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.4);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('OneDesk AI — Enterprise GenAI & RAG Assistant with Automated Testing Harness', marginX, y);
  y += 10.5;

  const proj1Bullets = [
    'Spearheaded RAG pipeline integration using Spring AI, pgvector embeddings, and dynamic agent routing between Gemini & Qwen models.',
    'Engineered automated GenAI test harness with JUnit 5 & Testcontainers, spinning up real PostgreSQL + pgvector instances during integration testing.',
    'Designed automated groundedness and hallucination detection tests, evaluating generated answers against retrieved context chunks using cosine similarity thresholds (>0.85).',
    'Implemented automated prompt regression suites verifying that model fine-tuning and system prompt updates do not degrade prior edge-case answers.',
  ];
  proj1Bullets.forEach((b) => renderBullet(b, 10, 10.4));

  // Project 2: Enterprise Hybrid Automation Framework
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.4);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('Enterprise Distributed Automation Framework (Playwright + RestAssured + Docker)', marginX, y);
  y += 10.5;

  const proj2Bullets = [
    'Multi-layer test architecture decoupling API pre-seeding from UI assertions, reducing execution time by 40-65%.',
    'Containerized Testcontainers test infrastructure ensuring 100% deterministic test execution on CI runners and eliminating flaky tests.',
    'Implemented parallel multi-browser regression grid supporting 1,000+ data-driven test scenarios.',
  ];
  proj2Bullets.forEach((b) => renderBullet(b, 10, 10.4));

  // Project 3: FinTech 2FA Security & Microservices Release Gate
  y += 3;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.4);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('FinTech 2FA Authentication & 14+ Microservices Release Gatekeeper (Freecharge)', marginX, y);
  y += 10.5;

  const proj3Bullets = [
    'Architected comprehensive security verification suite for 2FA authentication, delivering ahead of timeline with zero defects.',
    'Automated real-time defect triage via Google Meet webhooks and email alerting, lowering Mean Time to Resolution (MTTR) by 20%.',
  ];
  proj3Bullets.forEach((b) => renderBullet(b, 10, 10.4));

  // SECTION 5: LANGUAGES (DEDICATED SECTION REQUESTED BY USER)
  renderSectionHeader('Languages Known', 7, 7);

  LANGUAGES.forEach((lang) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.6);
    doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
    const langLabel = `${lang.name}: `;
    doc.text(langLabel, marginX + 10, y);

    const labelWidth = doc.getTextWidth(langLabel);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
    doc.text(`[${lang.level}]`, marginX + 10 + labelWidth, y);

    const levelWidth = doc.getTextWidth(`[${lang.level}] `);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.3);
    doc.setTextColor(textDark[0], textDark[1], textDark[2]);

    const remainingWidth = contentWidth - 10 - labelWidth - levelWidth;
    const descLines = doc.splitTextToSize(`— ${lang.proficiencyNote}`, remainingWidth);
    if (descLines.length > 0) {
      doc.text(descLines[0], marginX + 10 + labelWidth + levelWidth + 4, y);
      y += 10.5;
      for (let i = 1; i < descLines.length; i++) {
        doc.text(descLines[i], marginX + 10 + labelWidth + levelWidth + 4, y);
        y += 10.5;
      }
    }
  });

  // SECTION 6: EDUCATION & ACADEMIC CREDENTIALS
  renderSectionHeader('Education & Academic Background', 7, 7);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(primaryNavy[0], primaryNavy[1], primaryNavy[2]);
  doc.text('Bachelor of Technology (B.Tech) in Computer Science & Engineering', marginX, y);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.4);
  doc.setTextColor(accentTeal[0], accentTeal[1], accentTeal[2]);
  const eduPeriod = '2017 - 2021 | GPA: 8.0 / 10.0';
  doc.text(eduPeriod, marginX + contentWidth - doc.getTextWidth(eduPeriod), y);

  y += 10.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.4);
  doc.setTextColor(textDark[0], textDark[1], textDark[2]);
  doc.text('West Bengal University of Technology — Focus on Distributed Systems, Algorithms, and Software Quality Engineering', marginX, y);
  y += 10.5;

  // SECTION 7: PROFESSIONAL CERTIFICATIONS & LEADERSHIP ACCREDITATIONS
  renderSectionHeader('Professional Certifications & Quality Accreditations', 7, 7);

  const certs = [
    'Certified Automation Test Architect — Advanced Enterprise Test Automation & Architecture Design',
    'Generative AI Application Testing & Prompt Engineering Evaluation Specialist (RAG & LLM Validation)',
    'AWS Cloud Foundations & DevOps Infrastructure (EC2, EKS, Docker, Kubernetes Containerization)',
    'Agile / Scrum Master QA Practitioner — Cross-functional Quality Leadership & Release Gatekeeper',
  ];
  certs.forEach((cert) => renderBullet(cert, 10, 10.4));

  // Page 2 Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.8);
  doc.setTextColor(textMuted[0], textMuted[1], textMuted[2]);
  doc.text(`Page 2 of 2  •  ${PERSONAL_INFO.name} — Lead SDET Resume`, marginX, pageHeight - 20);
  doc.text(`Download verified from: ${PERSONAL_INFO.portfolioDomainIdea}`, marginX + contentWidth - 190, pageHeight - 20);

  return doc;
}

/**
 * Downloads the 2-page PDF file directly.
 */
export function downloadResumePdf(customLocation?: string): void {
  const doc = createResumePdfDoc(customLocation);
  const filename = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Lead_SDET_Resume.pdf`;
  doc.save(filename);
}

/**
 * Prints the resume cleanly in all environments (including iframes) by triggering
 * the native print dialog or opening the printable document in a fresh window.
 */
export function printResumePdf(customLocation?: string): void {
  try {
    const doc = createResumePdfDoc(customLocation);
    doc.autoPrint();

    const blob = doc.output('blob');
    const blobUrl = URL.createObjectURL(blob);

    // Attempt to open in a clean printable tab/window
    const printWindow = window.open(blobUrl, '_blank');
    if (printWindow) {
      printWindow.focus();
      printWindow.onload = () => {
        try {
          printWindow.print();
        } catch {
          // Window opened successfully
        }
      };
      return;
    }

    // Fallback: If popup is blocked by iframe, use invisible iframe print
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.src = blobUrl;
    document.body.appendChild(iframe);

    iframe.onload = () => {
      setTimeout(() => {
        try {
          iframe.contentWindow?.focus();
          iframe.contentWindow?.print();
        } catch {
          // If printing still blocked by container sandbox, save directly
          doc.save(`${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Lead_SDET_Resume.pdf`);
        }
      }, 350);
    };
  } catch (err) {
    console.error('Print PDF error:', err);
    // Absolute fallback: direct file download
    downloadResumePdf(customLocation);
  }
}
