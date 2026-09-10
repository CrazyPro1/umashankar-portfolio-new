import React from 'react';
import { 
  FileText, 
  Download, 
  ArrowRight,
  ShieldCheck, 
  Users, 
  Zap, 
  Sparkles,
  MapPin,
  Mail,
  Linkedin,
  Github,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  onPrintResume
}) => {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-[#E2E8F0] overflow-hidden"
    >
      {/* Subtle architectural background grid */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E2E8F0_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available for Lead SDET & QA Engineering Roles</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#F1F5F9] text-[#475569] border border-[#E2E8F0]">
            <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
            <span>Bangalore / Lucknow • Open to Remote & Relocation</span>
          </div>
        </div>

        {/* Main Grid: Headline + Bio + Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left / Primary Column */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0D766E]">
                Lead SDET & Quality Engineering Architect
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-normal">
              Senior QA leader with <strong className="font-bold text-[#0F172A]">5+ years</strong> architecting enterprise test automation frameworks (Playwright, Selenium, RestAssured), pioneering <strong className="font-bold text-[#0F172A]">GenAI & RAG quality evaluation gates</strong> (OneDesk AI), directly mentoring <strong className="font-bold text-[#0F172A]">4 engineers</strong>, and holding <strong className="font-bold text-[#0F172A]">sole release sign-off authority</strong> for mission-critical microservices.
            </p>

            {/* Quick Badges of Core Specialization */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#334155] border border-[#E2E8F0] shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D766E]" />
                Hybrid Test Frameworks (UI & API)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#334155] border border-[#E2E8F0] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0D766E]" />
                GenAI & RAG Evaluation (Spring AI)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#334155] border border-[#E2E8F0] shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0D766E]" />
                100% Production Release Sign-Off
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#334155] border border-[#E2E8F0] shadow-2xs">
                <Users className="w-3.5 h-3.5 text-[#0D766E]" />
                Mentored 4 Engineers & Code Reviews
              </span>
            </div>

            {/* Primary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-download-resume-btn"
                onClick={onPrintResume}
                className="inline-flex items-center justify-center gap-2 bg-[#0D766E] hover:bg-[#0F766E] text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
                title="Download 2-Page ATS Formatted PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#0F172A] text-sm font-bold px-6 py-3.5 rounded-xl border border-[#CBD5E1] transition-all shadow-2xs hover:border-[#94A3B8]"
              >
                <FileText className="w-4 h-4 text-[#0D766E]" />
                <span>View Full Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#334155] text-sm font-semibold px-5 py-3.5 rounded-xl transition-colors"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Channels */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-[#64748B]">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center gap-1.5 hover:text-[#0D766E] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <span className="text-[#CBD5E1]">•</span>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0D766E] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#CBD5E1]">•</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#0D766E] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Candidate Profile Card & Key Metrics */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-xs space-y-6">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#0D766E] text-white flex items-center justify-center text-xl font-black shadow-xs shrink-0">
                  UP
                </div>
                <div>
                  <h2 className="text-base font-bold text-[#0F172A]">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-xs font-semibold text-[#0D766E]">
                    Lead SDET / Senior SDET
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    5+ Years QA Architecture Experience
                  </p>
                </div>
              </div>

              {/* 4 Quantified Key Metrics */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xl font-black text-[#0F172A] tracking-tight">
                    5+ Years
                  </div>
                  <div className="text-xs font-semibold text-[#334155] mt-0.5">
                    QA Architecture
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    Multi-tier automation
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xl font-black text-[#0D766E] tracking-tight">
                    4 Eng
                  </div>
                  <div className="text-xs font-semibold text-[#334155] mt-0.5">
                    Team Mentorship
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    PR code reviews
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xl font-black text-[#0F172A] tracking-tight">
                    65% Cut
                  </div>
                  <div className="text-xs font-semibold text-[#334155] mt-0.5">
                    CI/CD Pipeline
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    Docker grid parallelization
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <div className="text-xl font-black text-[#0D766E] tracking-tight">
                    100%
                  </div>
                  <div className="text-xs font-semibold text-[#334155] mt-0.5">
                    Release Sign-Off
                  </div>
                  <div className="text-[10px] text-[#64748B] mt-0.5">
                    0 critical escapes
                  </div>
                </div>
              </div>

              {/* Verified Quality Authority Callout */}
              <div className="p-4 rounded-xl bg-[#ECFDF5] border border-[#A7F3D0] text-xs text-[#065F46] space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Verified Production Sign-Off</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#047857]">
                  Maintained a 99.4% release stability index across 14+ core production microservices with zero P0/P1 escapes in 18 months.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
