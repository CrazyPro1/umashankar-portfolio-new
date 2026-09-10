import { PERSONAL_INFO, EXPERIENCES, PROJECTS, LANGUAGES } from '../data/resumeData';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
  suggestedActions?: {
    label: string;
    actionType: 'download_pdf' | 'whatsapp' | 'email' | 'linkedin' | 'view_skills';
    payload?: string;
  }[];
}

export const HR_STARTER_PROMPTS = [
  'What is Umashankar’s notice period and current role?',
  'Tell me about his QA Release Sign-Off & leadership experience.',
  'What is his experience in GenAI and RAG test automation?',
  'What is his core technical stack?',
  'What languages does he know?',
  'Is he open to remote work or relocation?',
  'How do I schedule an interview or connect on WhatsApp?',
];

/**
 * Intelligent local fallback responder for Sarthi (सारथी) trained on Umashankar's verified metrics.
 * Note: Never exposes the raw mobile number in plain text to prevent spam scraping.
 */
function generateLocalKnowledgeResponse(query: string): { reply: string; actions?: ChatMessage['suggestedActions'] } {
  const q = query.toLowerCase();

  // Notice period / Availability
  if (q.includes('notice') || q.includes('available') || q.includes('join') || q.includes('start date')) {
    return {
      reply: `**Availability & Notice Period:**\n\nUmashankar is currently serving as Senior SDET at Freecharge (Axis Bank) and is available on **standard notice (negotiable for the right leadership opportunity)**. He can transition smoothly to lead your QA/SDET initiatives.\n\nHe is actively seeking **Lead SDET / Staff QA Architect** roles to scale automation squads, design resilient testing architectures, and govern production quality gates.`,
      actions: [
        { label: 'Connect via WhatsApp', actionType: 'whatsapp' },
        { label: 'Send Email Directly', actionType: 'email' },
      ],
    };
  }

  // Languages known (Explicit user request)
  if (q.includes('language') || q.includes('hindi') || q.includes('english') || q.includes('speak') || q.includes('communication')) {
    return {
      reply: `**Languages Known & Communication:**\n\nUmashankar is proficient in two primary languages:\n\n1. **English:** **Professional Working Proficiency (Fluent)** — Used daily for cross-functional communication with global engineering squads, client demos, sprint sign-off governance, technical PR reviews, and architectural documentation.\n2. **Hindi:** **Native / Bilingual Fluency** — Complete native fluency in verbal and written communication.\n\nHe has extensive experience coordinating with distributed engineering teams across India, the Middle East (Saudi Bank), and global clients (LNRS).`,
      actions: [
        { label: 'Download Verified Resume', actionType: 'download_pdf' },
        { label: 'Connect on LinkedIn', actionType: 'linkedin' },
      ],
    };
  }

  // Release Sign-Off / Leadership / Escapes
  if (q.includes('sign-off') || q.includes('sign off') || q.includes('gatekeeper') || q.includes('escape') || q.includes('leadership') || q.includes('mentor') || q.includes('microservice')) {
    return {
      reply: `**Production Release Sign-Off & Leadership:**\n\nAt Freecharge Payment Technologies by Axis Bank, Umashankar is the **sole QA Release Sign-Off Gatekeeper across 14+ core production microservices**.\n\nKey Leadership Metrics:\n• **Zero P0/P1 Defect Escapes** over 18+ consecutive months under high-throughput FinTech transaction volume.\n• **Mentored 4 Engineers** through pair programming, architectural design reviews, and automation PR gatekeeping.\n• Delivered the mission-critical **2FA Security Authentication module 10% ahead of schedule** with zero production defects.\n• Automated quality governance alerts with **Google Meet webhooks and Jenkins CI**, reducing Mean Time to Resolution (MTTR) by 20%.`,
      actions: [
        { label: 'Download 2-Page PDF Resume', actionType: 'download_pdf' },
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
      ],
    };
  }

  // GenAI & RAG testing
  if (q.includes('genai') || q.includes('rag') || q.includes('ai') || q.includes('llm') || q.includes('onedesk') || q.includes('hallucination') || q.includes('vector') || q.includes('prompt')) {
    return {
      reply: `**GenAI & RAG Quality Engineering (OneDesk AI):**\n\nUmashankar is an early pioneer in establishing deterministic quality gates for non-deterministic AI systems:\n\n• **RAG Pipeline Testing:** Built test harnesses using **Spring AI, pgvector embeddings**, and dynamic model routing between Gemini & Qwen.\n• **Automated Groundedness & Hallucination Testing:** Evaluates generated answers against retrieved context chunks using **cosine similarity thresholds (>0.85)**.\n• **Automated Prompt Regression Suites:** Runs continuous test suites verifying that prompt updates, fine-tuning, or model shifts do not degrade answers or cause prompt injection vulnerabilities.\n• **Testcontainers Integration:** Spins up ephemeral PostgreSQL + pgvector instances inside JUnit 5 for 100% deterministic test execution on CI runners.`,
      actions: [
        { label: 'Download Verified Resume', actionType: 'download_pdf' },
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
      ],
    };
  }

  // Tech Stack & Frameworks
  if (q.includes('tech') || q.includes('stack') || q.includes('skill') || q.includes('java') || q.includes('playwright') || q.includes('selenium') || q.includes('docker') || q.includes('automation')) {
    return {
      reply: `**Core Technical Stack:**\n\n• **Core Languages:** Java 21, Python, TypeScript, SQL\n• **API Test Architecture:** REST Assured, Spring Boot, Postman, WireMock, Factory & Singleton Design Patterns\n• **UI Automation:** Playwright, Selenium WebDriver, Cucumber BDD, TestNG, JUnit 5\n• **Cloud & Infrastructure:** Docker Containerization, Kubernetes (EKS), AWS (EC2, EKS), Jenkins Pipeline-as-Code\n• **Defect & Test Management:** JIRA, Zephyr, Git/Bitbucket, BrowserStack Grid\n• **AI Quality Frameworks:** Spring AI, pgvector, Testcontainers, Cosine Similarity Evaluation`,
      actions: [
        { label: 'Download 2-Page Resume', actionType: 'download_pdf' },
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
      ],
    };
  }

  // Location / Relocation / Remote
  if (q.includes('location') || q.includes('relocat') || q.includes('remote') || q.includes('where') || q.includes('city') || q.includes('office')) {
    return {
      reply: `**Location & Work Flexibility:**\n\n• **Current Base:** ${PERSONAL_INFO.location}\n• **Work Preferences:** Fully open to **100% Remote, Hybrid, or Onsite** arrangements.\n• **Relocation:** Open to relocation to major tech hubs including **Bangalore, NCR / Gurgaon, Hyderabad, Pune, Mumbai**, as well as international opportunities (US, Europe, UAE / Middle East).`,
      actions: [
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
        { label: 'Send Email', actionType: 'email' },
      ],
    };
  }

  // Contact / Interview / WhatsApp (No plain text mobile number exposure)
  if (q.includes('contact') || q.includes('interview') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('call') || q.includes('whatsapp') || q.includes('connect')) {
    return {
      reply: `**How to Connect with Umashankar Pandey:**\n\n• **Direct WhatsApp:** Click the **'Connect on WhatsApp'** button below to instantly initiate a chat with a pre-filled introduction without having to manually save any phone number.\n• **Work Email:** [${PERSONAL_INFO.email}](mailto:${PERSONAL_INFO.email})\n• **LinkedIn:** [linkedin.com/in/umashankar-pandey-sdet](${PERSONAL_INFO.linkedin})\n• **GitHub:** [github.com/umashankar-pandey](${PERSONAL_INFO.github})\n\n*(Note: Personal mobile number is protected from web crawlers. Tapping WhatsApp connects you directly.)*`,
      actions: [
        { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
        { label: 'Send Email', actionType: 'email' },
        { label: 'Download 2-Page PDF', actionType: 'download_pdf' },
      ],
    };
  }

  // General / Default overview
  return {
    reply: `**Umashankar Pandey — Executive Overview (from Sarthi):**\n\n• **Experience:** 5+ Years of QA Test Engineering & Automation Architecture.\n• **Current Role:** Senior SDET at Freecharge (Axis Bank), serving as the **sole QA Release Sign-Off Authority for 14+ production microservices with zero P0/P1 escapes over 18+ months**.\n• **Target Role:** Lead SDET / Staff QA Architect.\n• **Core Stack:** Java 21, Spring Boot, REST Assured, Playwright, Selenium, Docker, Kubernetes, AWS, Jenkins.\n• **Specialization:** Enterprise API Frameworks, 40-65% CI pipeline acceleration, GenAI/RAG test evaluation (OneDesk AI), and squad mentorship.\n• **Languages:** English (Fluent) & Hindi (Native).\n\nTap any button below to connect with Umashankar directly or ask me any questions!`,
    actions: [
      { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
      { label: 'Download 2-Page PDF', actionType: 'download_pdf' },
    ],
  };
}

/**
 * Sends a chat query to the server-side Gemini endpoint or gracefully falls back.
 */
export async function sendChatMessage(
  message: string,
  history: { sender: 'user' | 'assistant'; text: string }[]
): Promise<{ text: string; actions?: ChatMessage['suggestedActions'] }> {
  try {
    const formattedHistory = history.map((h) => ({
      role: h.sender === 'user' ? 'user' : 'model',
      text: h.text,
    }));

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        history: formattedHistory,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data && data.reply && !data.fallback) {
        return {
          text: data.reply,
          actions: [
            { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
            { label: 'Download 2-Page PDF Resume', actionType: 'download_pdf' },
          ],
        };
      }
    }
  } catch (err) {
    console.warn('Backend chat service unavailable, utilizing verified knowledge base:', err);
  }

  // Seamless fallback to intelligent local knowledge engine
  const localResult = generateLocalKnowledgeResponse(message);
  return {
    text: localResult.reply,
    actions: localResult.actions || [
      { label: 'Connect on WhatsApp', actionType: 'whatsapp' },
      { label: 'Download 2-Page PDF Resume', actionType: 'download_pdf' },
    ],
  };
}
