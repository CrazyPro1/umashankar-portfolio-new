import React from 'react';
import { 
  Globe, 
  FileText, 
  Printer, 
  Linkedin, 
  Github, 
  Mail, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
  onOpenDomainGuide: () => void;
  onPrintResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onOpenDomainGuide,
  onPrintResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-12 text-[#4B5563] text-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111827] text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-semibold bg-[#ECFDF5] text-[#065F46] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                {PERSONAL_INFO.targetTitle}
              </span>
            </div>
            <p className="text-[#6B7280] text-xs mt-1">
              5+ Years Experience • Mentored 4 Engineers • QA Release Sign-Off • OneDesk AI & GenAI Testing
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDomainGuide}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] font-semibold hover:bg-[#CCFBF1]"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Own Domain & Hosting Guide</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D766E] text-white font-semibold hover:bg-[#115E59]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#F3F4F6] text-[#4B5563] hover:text-[#111827]"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#6B7280]">
          <div>
            © {new Date().getFullYear()} Umashankar Pandey. Built with modern React, Vite & Tailwind.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0D766E] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#0D766E] transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
            <span className="text-[#9CA3AF]">Planned Domain: {PERSONAL_INFO.portfolioDomainIdea}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
