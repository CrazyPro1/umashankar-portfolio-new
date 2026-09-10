import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  Code,
  FileDown
} from 'lucide-react';
import { PERSONAL_INFO, RESUME_ATS_TEXT, EXPERIENCES, PROJECTS } from '../data/resumeData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose,
  onPrint,
}) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'rawText'>('formatted');
  const [highlightAiKeywords, setHighlightAiKeywords] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(RESUME_ATS_TEXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTxt = () => {
    const blob = new Blob([RESUME_ATS_TEXT], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Umashankar_Pandey_Lead_SDET_ATS_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadDoc = () => {
    const header = `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Umashankar Pandey - Lead SDET Resume</title><style>body{font-family:Arial,sans-serif;line-height:1.4;color:#222;}h1{font-size:18pt;margin-bottom:2pt;color:#111;}h2{font-size:12pt;border-bottom:1pt solid #ccc;padding-bottom:2pt;margin-top:12pt;color:#0D766E;}p,li{font-size:10pt;}ul{margin-top:3pt;margin-bottom:6pt;padding-left:18pt;}</style></head><body>`;
    const footer = `</body></html>`;
    const docContent = `
      <h1>${PERSONAL_INFO.name}</h1>
      <p><strong>${PERSONAL_INFO.targetTitle} (Current: ${PERSONAL_INFO.currentTitle})</strong><br>
      Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}<br>
      LinkedIn: ${PERSONAL_INFO.linkedin} | Portfolio: https://${PERSONAL_INFO.portfolioDomainIdea}</p>
      
      <h2>PROFESSIONAL SUMMARY</h2>
      <p>${PERSONAL_INFO.summary}</p>
      
      <h2>LEADERSHIP & KEY IMPACTS</h2>
      <ul>
        <li>Mentored high-performing squad of 4 SDET engineers in automation design and anti-flakiness practices.</li>
        <li>Sole QA Release Sign-Off authority for 14+ core microservices with 0 critical escapes across 18 months.</li>
        <li>Standardized automation PR code reviews on 120+ PRs quarterly, reducing test debt by 40%.</li>
        <li>Architected OneDesk AI GenAI evaluation pipeline testing RAG retrieval recall (94.2%) and groundedness (98.1%).</li>
        <li>Reduced CI/CD regression execution time by 65% (from 4.2h to 45m) via Dockerized Playwright/RestAssured grid.</li>
      </ul>

      <h2>PROFESSIONAL EXPERIENCE</h2>
      ${EXPERIENCES.map(exp => `
        <p><strong>${exp.role}</strong> — ${exp.company} (${exp.period})<br>
        <em>${exp.location}</em></p>
        <p><strong>Leadership Highlights:</strong></p>
        <ul>${exp.leadershipHighlights.map(h => `<li>${h}</li>`).join('')}</ul>
        <p><strong>Key Responsibilities & Automation Delivery:</strong></p>
        <ul>${exp.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
      `).join('')}

      <h2>FEATURED PROJECTS</h2>
      ${PROJECTS.map(proj => `
        <p><strong>${proj.title}</strong> — <em>${proj.subtitle}</em><br>
        ${proj.description}</p>
        <ul>${proj.keyContributions.map(c => `<li>${c}</li>`).join('')}</ul>
      `).join('')}

      <h2>TECHNICAL SKILLS</h2>
      <p><strong>AI & GenAI Testing:</strong> Spring AI, pgvector, Gemini API, Qwen LLM, RAG Pipeline Evaluation, Groundedness Testing, Prompt Regression, Prompt Injection Guards, Cosine Similarity.<br>
      <strong>Automation Frameworks:</strong> Playwright, Selenium WebDriver, RestAssured, Testcontainers, JUnit 5, TestNG, PyTest, Docker, Jenkins, GitHub Actions.</p>
    `;
    const blob = new Blob([header + docContent + footer], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Umashankar_Pandey_Lead_SDET_Resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderHighlightedText = (text: string) => {
    if (!highlightAiKeywords) return text;

    const keywords = [
      'OneDesk AI', 'GenAI', 'RAG', 'Spring AI', 'pgvector', 'Gemini', 'Qwen',
      'Testcontainers', 'Playwright', 'RestAssured', 'mentored', 'mentoring',
      '4 engineers', 'release sign-off', 'sign-off', 'code review', 'groundedness',
      'hallucination', 'prompt regression', 'cosine similarity'
    ];

    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
        return (
          <span 
            key={i} 
            className="bg-[#CCFBF1] text-[#0F766E] font-semibold px-1 rounded mx-0.5 border border-[#99F6E4]"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print">
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl shadow-2xl border border-[#E5E7EB] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="bg-[#FBFBF9] px-6 py-4 border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-[#111827]">
                Umashankar Pandey — Lead SDET Resume
              </h3>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                8.5/10 Editorial Rating
              </span>
            </div>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Optimized 2-page format with verified leadership & GenAI keywords
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="bg-[#F3F4F6] p-1 rounded-lg flex items-center gap-1 text-xs">
              <button
                onClick={() => setViewMode('formatted')}
                className={`px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'formatted'
                    ? 'bg-white text-[#111827] shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Formatted</span>
              </button>
              <button
                onClick={() => setViewMode('rawText')}
                className={`px-2.5 py-1 rounded-md font-semibold flex items-center gap-1 transition-all ${
                  viewMode === 'rawText'
                    ? 'bg-white text-[#111827] shadow-2xs'
                    : 'text-[#4B5563] hover:text-[#111827]'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>ATS Text</span>
              </button>
            </div>

            {/* Keyword Highlighter Toggle */}
            {viewMode === 'formatted' && (
              <button
                onClick={() => setHighlightAiKeywords(!highlightAiKeywords)}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                  highlightAiKeywords
                    ? 'bg-[#F0FDFA] text-[#0F766E] border-[#99F6E4]'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB]'
                }`}
                title="Toggle visual keyword highlighting"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Highlight AI & Leadership</span>
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Action Strip (Download & Print Options) */}
        <div className="bg-[#FAFAFA] px-6 py-2.5 border-b border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#4B5563]">Export Options:</span>
            
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D766E] text-white hover:bg-[#115E59] font-bold shadow-2xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF (2-Page)</span>
            </button>

            <button
              onClick={handleDownloadDoc}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-[#374151] hover:bg-[#F3F4F6] border border-[#D1D5DB] font-semibold"
            >
              <FileDown className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Word (.doc)</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-[#374151] hover:bg-[#F3F4F6] border border-[#D1D5DB] font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-[#059669]" />
              <span>ATS Plain Text</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-[#374151] hover:bg-[#F3F4F6] border border-[#D1D5DB] font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#059669]" />
                <span className="text-[#059669]">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#6B7280]" />
                <span>Copy Full Resume Text</span>
              </>
            )}
          </button>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-[#F9FAFB]">
          
          {viewMode === 'rawText' ? (
            /* Plain Text Monospace ATS View */
            <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] font-mono text-xs leading-relaxed text-[#1F2937] whitespace-pre-wrap select-all">
              {RESUME_ATS_TEXT}
            </div>
          ) : (
            /* Formatted High-Contrast Clean Layout (Matches Word / PDF target) */
            <div className="bg-white max-w-4xl mx-auto p-8 sm:p-12 rounded-xl shadow-xs border border-[#E5E7EB] text-[#1F2937] space-y-7">
              
              {/* Resume Header */}
              <div className="border-b border-[#111827] pb-5">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base font-bold text-[#0D766E] mt-0.5">
                  {PERSONAL_INFO.targetTitle} <span className="text-xs text-[#6B7280] font-normal">(Current: {PERSONAL_INFO.currentTitle})</span>
                </p>
                <div className="mt-2 text-xs text-[#4B5563] flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span>Email: <strong className="text-[#111827]">{PERSONAL_INFO.email}</strong></span>
                  <span>Location: <strong className="text-[#111827]">{PERSONAL_INFO.location}</strong></span>
                  <span>LinkedIn: <strong className="text-[#111827]">{PERSONAL_INFO.linkedin}</strong></span>
                  <span>Portfolio: <strong className="text-[#0D766E]">https://{PERSONAL_INFO.portfolioDomainIdea}</strong></span>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB] pb-1 mb-2.5">
                  Professional Summary
                </h2>
                <p className="text-xs leading-relaxed text-[#374151]">
                  {renderHighlightedText(PERSONAL_INFO.summary)}
                </p>
              </div>

              {/* Core Competencies Checklist */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB] pb-1 mb-2.5">
                  Core Competencies & Keywords
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#374151]">
                  <div>
                    <strong className="text-[#111827]">AI & GenAI Testing:</strong>{' '}
                    {renderHighlightedText('GenAI Response Validation, Groundedness & Hallucination Testing, RAG Pipeline Evaluation, Prompt Regression, Spring AI, pgvector, Gemini API, Qwen LLM, Prompt Injection Guards.')}
                  </div>
                  <div>
                    <strong className="text-[#111827]">Automation Frameworks:</strong>{' '}
                    {renderHighlightedText('Playwright, Selenium WebDriver, RestAssured, Testcontainers, JUnit 5, TestNG, PyTest, Page Object Model, Screenplay Pattern, Parallel Docker Grids.')}
                  </div>
                  <div>
                    <strong className="text-[#111827]">Technical Leadership:</strong>{' '}
                    {renderHighlightedText('Mentored 4 engineers, Automation Code Reviews, Sole QA Release Sign-Off Authority, Test Strategy, Shift-Left Quality Gates.')}
                  </div>
                  <div>
                    <strong className="text-[#111827]">CI/CD & DevOps:</strong>{' '}
                    {renderHighlightedText('Docker, Jenkins, GitHub Actions, Linux/Bash, PostgreSQL, JMeter, k6, Allure Reporting, SonarQube.')}
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB] pb-1 mb-3">
                  Professional Experience
                </h2>

                <div className="space-y-6">
                  {EXPERIENCES.map((exp) => (
                    <div key={exp.id} className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div>
                          <span className="text-xs font-bold text-[#111827]">{exp.role}</span>
                          <span className="text-xs text-[#4B5563]"> | {exp.company}</span>
                        </div>
                        <span className="text-xs text-[#6B7280] font-medium">{exp.period} • {exp.location}</span>
                      </div>

                      {/* Leadership highlights */}
                      <ul className="space-y-1 pl-4 list-disc text-xs text-[#374151]">
                        {exp.leadershipHighlights.map((h, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {renderHighlightedText(h)}
                          </li>
                        ))}
                        {exp.responsibilities.map((r, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {renderHighlightedText(r)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB] pb-1 mb-3">
                  Key Projects & AI Innovation
                </h2>

                <div className="space-y-4">
                  {PROJECTS.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="text-xs font-bold text-[#111827]">
                        {proj.title} <span className="text-[#6B7280] font-normal">— {proj.subtitle}</span>
                      </div>
                      <p className="text-xs text-[#4B5563] leading-relaxed">
                        {renderHighlightedText(proj.description)}
                      </p>
                      <ul className="space-y-1 pl-4 list-disc text-xs text-[#374151]">
                        {proj.keyContributions.slice(0, 3).map((c, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {renderHighlightedText(c)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#111827] border-b border-[#E5E7EB] pb-1 mb-2">
                  Education & Certifications
                </h2>
                <div className="text-xs text-[#374151] space-y-1">
                  <div>• <strong>Bachelor of Technology (B.Tech)</strong> in Computer Science & Engineering</div>
                  <div>• Certified Automation Architect & Advanced Java / Python Test Engineering</div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FBFBF9] px-6 py-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>2-Page ATS Friendly Single-Column Format • Ready for Recruiter Submissions</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs font-semibold px-4 py-1.5 rounded-lg bg-[#E5E7EB] text-[#374151] hover:bg-[#D1D5DB]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
