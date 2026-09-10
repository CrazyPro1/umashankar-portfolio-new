import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '../data/resumeData';

export const PrintableResume: React.FC = () => {
  return (
    <div className="hidden print-only text-black bg-white p-4 font-sans text-[11pt] leading-tight">
      
      {/* Page 1 */}
      <div>
        {/* Header */}
        <div className="border-b-2 border-black pb-3 mb-4">
          <h1 className="text-2xl font-bold tracking-tight uppercase text-black">
            {PERSONAL_INFO.name}
          </h1>
          <div className="text-sm font-bold text-gray-800 mt-0.5">
            {PERSONAL_INFO.targetTitle} (Current Title: {PERSONAL_INFO.currentTitle})
          </div>
          <div className="text-xs text-gray-700 mt-1 flex flex-wrap gap-x-4">
            <span>Email: {PERSONAL_INFO.email}</span>
            <span>Location: {PERSONAL_INFO.location}</span>
            <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
            <span>Portfolio: https://{PERSONAL_INFO.portfolioDomainIdea}</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed text-gray-900">
            {PERSONAL_INFO.summary}
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Core Competencies & Keywords
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-900">
            <div>
              <strong>AI & GenAI Testing:</strong> GenAI Response Validation, Groundedness Testing, RAG Pipeline Evaluation, Prompt Regression, Spring AI, pgvector, Gemini API, Qwen LLM, Cosine Similarity.
            </div>
            <div>
              <strong>Automation Frameworks:</strong> Playwright, Selenium WebDriver, RestAssured, Testcontainers, JUnit 5, TestNG, PyTest, Page Object Model, Screenplay, Parallel Docker Grids.
            </div>
            <div>
              <strong>Leadership & Governance:</strong> Mentored 4 Engineers, Automation Code Reviews, Sole QA Release Sign-Off Authority, Flaky Test Reduction, Shift-Left Quality Gates.
            </div>
            <div>
              <strong>CI/CD & DevOps:</strong> Docker, Jenkins, GitHub Actions, Linux/Bash, PostgreSQL, JMeter, k6, Allure Reporting, SonarQube.
            </div>
          </div>
        </div>

        {/* Experience - Part 1 */}
        <div className="mb-3">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">
            Professional Experience
          </h2>

          {/* Current Senior SDET (Lead Responsibilities) */}
          <div className="mb-4">
            <div className="flex justify-between items-baseline text-xs font-bold text-black">
              <span>{EXPERIENCES[0].role} — {EXPERIENCES[0].company}</span>
              <span>{EXPERIENCES[0].period} | {EXPERIENCES[0].location}</span>
            </div>
            <div className="text-[11px] font-semibold text-gray-800 mt-0.5">Leadership & Governance:</div>
            <ul className="list-disc pl-4 text-xs space-y-0.5 mt-0.5 text-gray-900">
              {EXPERIENCES[0].leadershipHighlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="text-[11px] font-semibold text-gray-800 mt-1">Automation Architecture & Delivery:</div>
            <ul className="list-disc pl-4 text-xs space-y-0.5 mt-0.5 text-gray-900">
              {EXPERIENCES[0].responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Page Break */}
      <div className="print-page-break"></div>

      {/* Page 2 */}
      <div className="pt-2">
        {/* Prior Roles */}
        <div className="mb-4">
          {EXPERIENCES.slice(1).map((exp) => (
            <div key={exp.id} className="mb-3">
              <div className="flex justify-between items-baseline text-xs font-bold text-black">
                <span>{exp.role} — {exp.company}</span>
                <span>{exp.period} | {exp.location}</span>
              </div>
              <ul className="list-disc pl-4 text-xs space-y-0.5 mt-1 text-gray-900">
                {exp.leadershipHighlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
                {exp.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Key Projects */}
        <div className="mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2">
            Key Projects & GenAI Innovation
          </h2>
          {PROJECTS.slice(0, 3).map((proj) => (
            <div key={proj.id} className="mb-2.5 text-xs text-gray-900">
              <div className="font-bold text-black">
                {proj.title} <span className="font-normal text-gray-700">— {proj.subtitle}</span>
              </div>
              <p className="mt-0.5 leading-snug">{proj.description}</p>
              <ul className="list-disc pl-4 mt-0.5 space-y-0.5">
                {proj.keyContributions.slice(0, 2).map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5">
            Education & Certifications
          </h2>
          <ul className="list-disc pl-4 text-xs space-y-0.5 text-gray-900">
            <li><strong>Bachelor of Technology (B.Tech)</strong> in Computer Science & Engineering</li>
            <li>Certified Automation Architect & Advanced Java/Python Test Engineering</li>
          </ul>
        </div>
      </div>

    </div>
  );
};
