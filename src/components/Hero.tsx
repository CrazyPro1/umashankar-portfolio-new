import React from 'react';
import { 
  FileText, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Bot,
  Terminal,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO, ATS_SCORE_DATA } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenDomainGuide: () => void;
  onPrintResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  onOpenDomainGuide,
  onPrintResume 
}) => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E5E7EB] bg-gradient-to-b from-[#F7F7F4] to-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline & Editorial Pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F4EA] text-[#137333] border border-[#CEEAD6]">
            <Sparkles className="w-3.5 h-3.5 text-[#137333]" />
            AI-Era Test Engineering & Quality Leadership
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F1F3F4] text-[#3C4043] border border-[#DADCE0]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D766E]" />
            Resume Rated 8.5/10 • 96% ATS Target Match
          </span>
        </div>

        {/* Hero Title & Framing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
              Architecting Resilient Automation &{' '}
              <span className="text-[#0D766E] underline decoration-[#99F6E4] decoration-4 underline-offset-4">
                Evaluating GenAI Systems
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-[#4B5563] max-w-3xl leading-relaxed font-normal">
              I’m <strong className="text-[#111827] font-semibold">{PERSONAL_INFO.name}</strong>, a Senior SDET targeting{' '}
              <strong className="text-[#111827] font-semibold">Lead SDET</strong> roles. 5+ years of experience leading QA release sign-offs, 
              mentoring 4 engineers, scaling Playwright/Selenium frameworks, and validating enterprise RAG & LLM pipelines (OneDesk AI).
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                id="hero-view-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-[#0D766E] hover:bg-[#115E59] transition-all shadow-sm hover:shadow"
              >
                <FileText className="w-4 h-4" />
                <span>View ATS-Targeted Resume</span>
                <ArrowRight className="w-4 h-4 opacity-75" />
              </button>

              <button
                id="hero-download-resume-cta"
                onClick={onPrintResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#1F2937] bg-white hover:bg-[#F9FAFB] border border-[#D1D5DB] transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#0D766E]" />
                <span>Download PDF (2-Page)</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6] transition-all"
              >
                <Bot className="w-4 h-4 text-[#0D766E]" />
                <span>OneDesk AI Project</span>
              </a>

              <button
                onClick={onOpenDomainGuide}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-[#0F766E] bg-[#F0FDFA] hover:bg-[#CCFBF1] border border-[#99F6E4] transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Buy Domain & Host Guide</span>
              </button>
            </div>

            {/* Credibility Chips */}
            <div className="mt-8 pt-6 border-t border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#111827]">5+ Years</div>
                <div className="text-xs text-[#6B7280] font-medium mt-0.5">Automation & Testing Exp</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D766E]">4 Engineers</div>
                <div className="text-xs text-[#6B7280] font-medium mt-0.5">Directly Mentored & Guided</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#111827]">100% Sign-Off</div>
                <div className="text-xs text-[#6B7280] font-medium mt-0.5">Production QA Governance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0D766E]">65% Faster</div>
                <div className="text-xs text-[#6B7280] font-medium mt-0.5">CI/CD Regression Speedup</div>
              </div>
            </div>
          </div>

          {/* Right: Technical Card / Profile Snapshot */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CCFBF1]/40 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="flex items-center gap-3 pb-4 border-b border-[#F3F4F6]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D766E] to-[#115E59] text-white flex items-center justify-center font-bold text-xl shadow-xs">
                  UP
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] text-base leading-snug">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs font-medium text-[#0D766E]">
                    {PERSONAL_INFO.targetTitle}
                  </p>
                  <p className="text-[11px] text-[#6B7280]">
                    {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="mt-4 space-y-3 text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-[#ECFDF5] text-[#059669] shrink-0 mt-0.5">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937]">Team Leadership & Mentorship</div>
                    <div className="text-[#6B7280]">Mentors 4 engineers, reviews automation PRs, and upholds test architecture purity.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-[#F0FDFA] text-[#0D766E] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937]">GenAI & RAG Testing Expertise</div>
                    <div className="text-[#6B7280]">Validates chunking recall, groundedness, hallucination mitigation & prompt regression.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-[#FEF3C7] text-[#D97706] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937]">QA Release Sign-Off Authority</div>
                    <div className="text-[#6B7280]">Sole sign-off gatekeeper for 14+ core production microservices with 0 high-severity escapes.</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-[#EDE9FE] text-[#7C3AED] shrink-0 mt-0.5">
                    <Terminal className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1F2937]">Modern Automation Stack</div>
                    <div className="text-[#6B7280]">Playwright, RestAssured, Spring AI, Testcontainers, Docker, Java 17 & Python.</div>
                  </div>
                </div>
              </div>

              {/* Direct Resume CTA inside profile card */}
              <div className="mt-5 pt-4 border-t border-[#F3F4F6] flex gap-2">
                <button
                  onClick={onOpenResume}
                  className="w-full text-center text-xs font-semibold py-2 px-3 rounded-lg bg-[#0D766E] text-white hover:bg-[#115E59] transition-colors"
                >
                  Inspect Resume & ATS Match
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
