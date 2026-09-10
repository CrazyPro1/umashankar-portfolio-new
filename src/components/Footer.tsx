import React from 'react';
import { Download, FileText, ExternalLink, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface FooterProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
  onOpenPhotoLocationModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onPrintResume,
  onOpenPhotoLocationModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12171f] border-t border-[rgba(232,236,239,0.12)] py-12 text-[#9ba7b4] text-[0.88rem] no-print">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[rgba(232,236,239,0.12)]">
          <div>
            <div className="flex items-baseline gap-3">
              <span className="font-semibold text-[#e8ecef] text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#e3a857] font-mono text-[0.82rem]">
                Lead SDET / Senior SDET
              </span>
            </div>
            <p className="text-[#6b7683] text-[0.83rem] mt-1">
              5+ Years Experience • Mentored 4 Engineers • QA Release Sign-Off • OneDesk AI &amp; GenAI Testing
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.85rem] font-medium text-[#e8ecef] border border-[rgba(232,236,239,0.22)] rounded-[2px] hover:border-[#e3a857] hover:bg-[rgba(227,168,87,0.1)] transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#e3a857]" />
              <span>View Resume</span>
            </button>

            <button
              onClick={onPrintResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.85rem] font-semibold text-[#181205] bg-[#e3a857] rounded-[2px] hover:bg-[#eeb86c] transition-colors shadow-2xs"
              title="Directly download 2-page PDF resume"
            >
              <Download className="w-3.5 h-3.5 text-[#181205]" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 border border-[rgba(232,236,239,0.15)] rounded-[2px] text-[#9ba7b4] hover:text-[#e8ecef] hover:border-[#e3a857] transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#6b7683] text-[0.82rem]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Umashankar Pandey. All rights reserved.</span>
            {onOpenPhotoLocationModal && (
              <button
                type="button"
                onClick={onOpenPhotoLocationModal}
                className="text-[0.74rem] text-[#475569] hover:text-[#e3a857] transition-colors font-mono cursor-pointer"
                title="Owner Settings: Customize Photo & Location"
              >
                • Owner Settings
              </button>
            )}
          </div>
          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e3a857] transition-colors inline-flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#6b7683]" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#e3a857] transition-colors font-mono"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
