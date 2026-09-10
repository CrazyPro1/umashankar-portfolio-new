import React from 'react';
import { 
  X, 
  Printer, 
  Lock,
  Download
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS } from '../data/resumeData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
  onDownloadPdf?: () => void;
  currentLocation?: string;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose,
  onPrint,
  onDownloadPdf,
  currentLocation,
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    if (onDownloadPdf) {
      onDownloadPdf();
    } else {
      onPrint();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 no-print"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl sm:rounded-2xl w-full max-w-4xl shadow-2xl border border-[#E2E8F0] h-[95vh] sm:max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="bg-[#F8FAFC] px-4 py-3 sm:px-6 sm:py-4 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] truncate">
                {PERSONAL_INFO.name} — Lead SDET Resume
              </h3>
              <span className="hidden xs:inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                Lead SDET Profile
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full">
                <Lock className="w-3 h-3 text-[#64748B]" />
                View-Only
              </span>
            </div>
            <p className="text-xs text-[#64748B] mt-0.5 truncate sm:whitespace-normal">
              Standard 2-page executive format for engineering hiring managers & recruiters
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Action: Direct Download PDF */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D766E] text-white hover:bg-[#115E59] font-semibold text-xs shadow-xs transition-colors min-h-[38px]"
              title="Directly download 2-page PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF (2-Page)</span>
              <span className="sm:hidden">Download PDF</span>
            </button>

            {/* Secondary Action: Print */}
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#334155] hover:bg-[#F1F5F9] font-semibold text-xs transition-colors min-h-[38px]"
              title="Print resume or save via browser print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content (Strictly View-Only) */}
        <div className="p-3 sm:p-6 md:p-10 overflow-y-auto flex-1 bg-[#F8FAFC]">
          
          <div className="bg-white max-w-3xl mx-auto p-5 sm:p-8 md:p-12 rounded-xl shadow-xs border border-[#E2E8F0] text-[#1E293B] space-y-6 sm:space-y-7 select-text">
            
            {/* Resume Header */}
            <div className="border-b-2 border-[#0F172A] pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm sm:text-base font-bold text-[#0D766E] mt-0.5">
                {PERSONAL_INFO.targetTitle} <span className="text-xs text-[#64748B] font-normal">(Current: {PERSONAL_INFO.currentTitle})</span>
              </p>
              <div className="mt-2 text-xs text-[#475569] flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>Phone: <strong className="text-[#0F172A]">{PERSONAL_INFO.phone}</strong></span>
                <span>Email: <strong className="text-[#0F172A]">{PERSONAL_INFO.email}</strong></span>
                <span>Location: <strong className="text-[#0F172A]">{currentLocation || PERSONAL_INFO.location}</strong></span>
                <span>LinkedIn: <strong className="text-[#0F172A]">{PERSONAL_INFO.linkedin}</strong></span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Professional Summary
              </h2>
              <p className="text-xs leading-relaxed text-[#334155]">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Core Technical & Leadership Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#334155]">
                <div>
                  <strong className="text-[#0F172A]">AI & GenAI Testing:</strong>{' '}
                  GenAI Response Validation, Groundedness & Hallucination Testing, RAG Pipeline Evaluation, Prompt Regression, Spring AI, pgvector, Gemini API, Qwen LLM, Prompt Injection Guards.
                </div>
                <div>
                  <strong className="text-[#0F172A]">Automation Frameworks:</strong>{' '}
                  Playwright, Selenium WebDriver, RestAssured, Testcontainers, JUnit 5, TestNG, PyTest, Page Object Model, Screenplay Pattern, Parallel Docker Grids.
                </div>
                <div>
                  <strong className="text-[#0F172A]">Technical Leadership:</strong>{' '}
                  Mentored 4 engineers, Automation Code Reviews, Sole QA Release Sign-Off Authority, Test Strategy, Shift-Left Quality Gates.
                </div>
                <div>
                  <strong className="text-[#0F172A]">CI/CD & DevOps:</strong>{' '}
                  Docker, Jenkins, GitHub Actions, Linux/Bash, PostgreSQL, JMeter, k6, Allure Reporting, SonarQube.
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-3">
                Professional Experience
              </h2>

              <div className="space-y-6">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#0F172A]">{exp.role}</span>
                        <span className="text-xs text-[#475569]"> | {exp.company}</span>
                      </div>
                      <span className="text-xs text-[#64748B] font-medium">{exp.period} • {exp.location}</span>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-[#334155] leading-relaxed">
                      {exp.leadershipHighlights.map((h, i) => (
                        <li key={`l-${i}`}><strong className="text-[#0F172A]">{h}</strong></li>
                      ))}
                      {exp.responsibilities.map((r, i) => (
                        <li key={`r-${i}`}>{r}</li>
                      ))}
                    </ul>

                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="text-[11px] text-[#64748B] pt-1">
                        <span className="font-semibold text-[#475569]">Technologies:</span> {exp.technologies.join(' • ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-3">
                Featured Engineering Architectures & Projects
              </h2>

              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1 text-xs">
                    <div className="flex items-baseline justify-between">
                      <span className="font-bold text-[#0F172A]">{proj.title}</span>
                      <span className="text-[11px] text-[#0D766E] font-semibold">{proj.subtitle}</span>
                    </div>
                    <p className="text-[#334155] leading-relaxed">
                      {proj.description}
                    </p>
                    <ul className="list-disc list-outside ml-4 space-y-0.5 text-xs text-[#334155]">
                      {proj.keyContributions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                    {proj.technologies && proj.technologies.length > 0 && (
                      <div className="text-[11px] text-[#64748B]">
                        <span className="font-semibold text-[#475569]">Stack:</span> {proj.technologies.join(', ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Education & Certifications
              </h2>
              <div className="flex justify-between items-baseline text-xs text-[#334155]">
                <div>
                  <strong className="text-[#0F172A]">Bachelor of Technology (B.Tech)</strong> in Computer Science | West Bengal University of Technology (2017 - 2021)
                </div>
                <span className="text-[#0D766E] font-semibold">GPA: 8 / 10</span>
              </div>
              <div className="mt-1.5 text-xs text-[#475569]">
                <span>Languages: English (Fluent), Hindi (Fluent), German (Basics)</span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#F8FAFC] px-4 py-3 sm:px-6 sm:py-3.5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <span className="text-[#64748B] text-center sm:text-left text-[11px] sm:text-xs">
            Standard 2-page print format for A4 / Letter PDF
          </span>
          <button
            onClick={onPrint}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0D766E] text-white hover:bg-[#115E59] font-semibold text-xs shadow-xs transition-colors min-h-[42px]"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
};
