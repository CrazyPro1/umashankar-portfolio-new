import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Award, 
  CheckCircle2, 
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, LANGUAGES } from '../data/resumeData';

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
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
                <ShieldCheck className="w-3 h-3 text-[#059669]" />
                Verified Candidate Profile
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                <Award className="w-3 h-3 text-[#2563EB]" />
                5+ Years Experience
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                <Briefcase className="w-3 h-3 text-[#B45309]" />
                Senior SDET · Freecharge
              </span>
            </div>
            <p className="text-xs text-[#64748B] mt-0.5 truncate sm:whitespace-normal">
              Executive 2-Page Format • QA Test Architecture &amp; Release Leadership
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Action: Direct Download PDF */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0D766E] text-white hover:bg-[#115E59] font-semibold text-xs shadow-xs transition-colors min-h-[38px] cursor-pointer"
              title="Download 2-page PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF (2-Page)</span>
              <span className="sm:hidden">Download PDF</span>
            </button>

            {/* Secondary Action: Print */}
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-[#CBD5E1] text-[#334155] hover:bg-[#F1F5F9] font-semibold text-xs transition-colors min-h-[38px] cursor-pointer"
              title="Print resume or save via browser print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors min-w-[38px] min-h-[38px] flex items-center justify-center cursor-pointer"
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
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0D766E] bg-[#F0FDFA] px-2.5 py-1 rounded-md border border-[#99F6E4]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  5+ Years Total Experience
                </span>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#0D766E] mt-1">
                {PERSONAL_INFO.targetTitle} • QA Engineering Architect <span className="text-xs text-[#64748B] font-normal">(Current: {PERSONAL_INFO.currentTitle} & QA Release Gatekeeper)</span>
              </p>
              <div className="mt-2 text-xs text-[#475569] flex flex-wrap items-center gap-x-4 gap-y-1">
                <a 
                  href="https://api.whatsapp.com/send?phone=918299867994&text=Hi%20Umashankar,%20I%20reviewed%20your%20Lead%20SDET%20resume%20and%20would%20like%20to%20connect." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0D766E] hover:text-[#0f766e] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>WhatsApp: Connect Directly ↗</span>
                </a>
                <span>Email: <strong className="text-[#0F172A]">{PERSONAL_INFO.email}</strong></span>
                <span>Location: <strong className="text-[#0F172A]">{currentLocation || PERSONAL_INFO.location}</strong></span>
                <span>LinkedIn: <strong className="text-[#0F172A]">{PERSONAL_INFO.linkedin.replace('https://', '')}</strong></span>
                <span>GitHub: <strong className="text-[#0F172A]">{PERSONAL_INFO.github.replace('https://', '')}</strong></span>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Executive Professional Summary
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
                  RAG Pipeline Testing, Semantic Groundedness Scoring, Hallucination Prevention, Prompt Regression Suites, Spring AI, pgvector, Gemini & Qwen LLM Evaluation, Cosine Similarity Thresholds (&gt;0.85).
                </div>
                <div>
                  <strong className="text-[#0F172A]">Automation Frameworks:</strong>{' '}
                  Java 21, Spring Boot, Playwright, Selenium WebDriver, REST Assured, Testcontainers, JUnit 5, TestNG, PyTest, Page Object Model, Factory & Singleton Patterns.
                </div>
                <div>
                  <strong className="text-[#0F172A]">Technical Leadership & Governance:</strong>{' '}
                  Sole QA Release Sign-Off Authority (14+ Microservices), Zero-Defect Escapes (18+ Months), Mentoring 4+ Engineers, Automation PR Reviews, Shift-Left Quality Gates.
                </div>
                <div>
                  <strong className="text-[#0F172A]">CI/CD & Cloud Infrastructure:</strong>{' '}
                  Docker Containerization, Kubernetes (EKS), AWS (EC2, EKS, S3), Jenkins Pipeline As Code, GitHub Actions, Linux/Bash, PostgreSQL, JMeter, BrowserStack.
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
                Featured Engineering Architectures & GenAI Projects
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

            {/* Languages Known (Explicitly Added) */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Languages Known
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0]">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs text-[#0F172A]">{lang.name}</span>
                      <span className="text-[10px] font-semibold text-[#0D766E] px-2 py-0.5 rounded-full bg-[#CCFBF1] border border-[#99F6E4]">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#475569] mt-1 leading-relaxed">
                      {lang.proficiencyNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] border-b border-[#E2E8F0] pb-1 mb-2.5">
                Education & Professional Certifications
              </h2>
              <div className="flex justify-between items-baseline text-xs text-[#334155]">
                <div>
                  <strong className="text-[#0F172A]">Bachelor of Technology (B.Tech)</strong> in Computer Science | West Bengal University of Technology (2017 - 2021)
                </div>
                <span className="text-[#0D766E] font-semibold">GPA: 8.0 / 10</span>
              </div>
              <div className="mt-1.5 text-xs text-[#475569]">
                <span>Certified Automation Test Architect • Advanced Java / Python Test Engineering • GenAI & LLM Quality Engineering</span>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="bg-[#F8FAFC] px-4 py-3 sm:px-6 sm:py-3.5 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-3 text-[#64748B] text-center sm:text-left text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 font-semibold text-[#047857]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified 5+ Years Lead SDET Profile
            </span>
            <span>•</span>
            <span>Standard 2-Page Executive PDF</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onPrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-white border border-[#CBD5E1] text-[#334155] hover:bg-[#F1F5F9] font-semibold text-xs transition-colors min-h-[42px] cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#64748B]" />
              <span>Print Resume</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0D766E] text-white hover:bg-[#115E59] font-semibold text-xs shadow-xs transition-colors min-h-[42px] cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
