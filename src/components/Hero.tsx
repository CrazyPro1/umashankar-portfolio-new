import React from 'react';
import { 
  Download, 
  FileText, 
  ArrowRight, 
  MapPin, 
  Camera, 
  Navigation, 
  Sparkles,
  Briefcase,
  Target
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeroProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
  onOpenPhotoLocationModal: () => void;
  profilePicture: string;
  currentLocation: string;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenResume, 
  onPrintResume,
  onOpenPhotoLocationModal,
  profilePicture,
  currentLocation,
}) => {
  return (
    <section id="top" className="pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#12171f]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Top Header: Designation Differentiation & Location Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[rgba(232,236,239,0.12)]">
          
          {/* Visual Role Distinction: Current vs Looking For */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            {/* Current Designation Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#1b222c] border border-[rgba(232,236,239,0.16)] text-[#9ba7b4]">
              <Briefcase className="w-3.5 h-3.5 text-[#6b7683]" />
              <span className="font-mono text-[#6b7683] uppercase tracking-wider text-[0.7rem]">Current Role:</span>
              <span className="font-semibold text-[#e8ecef]">{PERSONAL_INFO.currentDesignation}</span>
            </div>

            <span className="text-[#e3a857] font-bold">➔</span>

            {/* Target Role / Looking For Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[rgba(227,168,87,0.12)] border border-[#b98a46] text-[#e3a857]">
              <Target className="w-3.5 h-3.5 text-[#e3a857]" />
              <span className="font-mono uppercase tracking-wider text-[0.7rem] font-bold">Looking For:</span>
              <span className="font-bold text-[#e8ecef]">{PERSONAL_INFO.lookingForDesignation}</span>
            </div>
          </div>

          {/* Prominent Location Display & Status */}
          <div className="flex items-center gap-2 text-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1b222c] border border-[rgba(232,236,239,0.16)] rounded-[2px] text-[#e8ecef] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#e3a857] shrink-0" />
              <span className="font-mono text-[#9ba7b4] text-[0.72rem] uppercase">Location:</span>
              <span className="font-semibold text-xs text-[#e8ecef]">{currentLocation}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] ml-1 shrink-0" />
              <span className="text-[#10b981] text-[0.72rem] font-mono hidden sm:inline">Open to Relocation</span>
            </div>
          </div>

        </div>

        {/* Main Hero Body: Picture + Text Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Profile Picture Card & Visible Location (100% Unobstructed Photo) */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
            
            {/* Photo Frame: Clean, unobstructed frame with zero badges overlapping it */}
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[4px] overflow-hidden border-2 border-[#b98a46] shadow-xl bg-[#1b222c]">
              <img
                src={profilePicture}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Available for Lead Roles: Sits cleanly BELOW the photo frame */}
            <div className="mt-3.5 w-48 sm:w-56 bg-[#12171f] border border-[#b98a46] px-3 py-2 rounded-[2px] flex items-center justify-center gap-2 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse shrink-0" />
              <span className="font-mono text-[0.72rem] text-[#e8ecef] font-semibold uppercase tracking-wider whitespace-nowrap">
                Available for Lead Roles
              </span>
            </div>

            {/* Dedicated Current Location Card */}
            <div className="mt-3 w-48 sm:w-56 bg-[#1b222c] border border-[rgba(232,236,239,0.14)] rounded-[3px] p-3 text-left shadow-xs">
              <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#e3a857] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#e3a857] shrink-0" />
                <span>Current Location</span>
              </div>
              <div className="mt-1 text-[0.88rem] font-bold text-[#e8ecef] leading-snug">
                {currentLocation}
              </div>
              <div className="mt-1.5 text-[11px] text-[#10b981] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0" />
                <span>Open to Relocation &amp; Remote</span>
              </div>
            </div>

            {/* Company Experience Badge */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#9ba7b4] w-48 sm:w-56">
              <Sparkles className="w-3.5 h-3.5 text-[#e3a857] shrink-0" />
              <span className="text-[0.76rem] font-mono leading-tight">Freecharge · Ex-Nagarro</span>
            </div>
          </div>

          {/* Heading & Executive Summary */}
          <div className="lg:col-span-8">
            <div className="text-[#e3a857] font-mono text-[0.84rem] mb-3 tracking-[0.02em] uppercase font-medium">
              Senior SDET ➔ Targeting Lead SDET Roles
            </div>

            <h1 className="text-[clamp(1.9rem,3.8vw,3.2rem)] font-semibold text-[#e8ecef] leading-[1.18] tracking-[-0.01em]">
              Automation architecture built to hold — including for systems that don't give deterministic answers.
            </h1>

            <p className="mt-5 text-[1.05rem] text-[#9ba7b4] leading-[1.65] max-w-[62ch]">
              5+ years leading QA release sign-off, refactoring high-throughput API frameworks in FinTech, and scaling Playwright and Selenium test suites. Currently leading automation at Freecharge Payment Technologies (Axis Bank) and architecting GenAI / RAG evaluation harnesses (OneDesk AI).
            </p>

            {/* American English Action Buttons (Resume, not French résumé) */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onPrintResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-[0.92rem] font-semibold rounded-[2px] transition-colors shadow-2xs cursor-pointer"
                title="Download 2-Page Executive Resume (PDF)"
              >
                <Download className="w-4 h-4 text-[#181205]" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-[rgba(227,168,87,0.1)] border border-[rgba(232,236,239,0.22)] hover:border-[#e3a857] text-[#e8ecef] text-[0.92rem] font-medium rounded-[2px] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#e3a857]" />
                <span>View Resume</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-[0.92rem] text-[#9ba7b4] hover:text-[#e8ecef] transition-colors"
              >
                <span>Read Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Status Strip (4 Columns) */}
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8 mt-14">
        <div className="border-t border-b border-[rgba(232,236,239,0.12)] grid grid-cols-2 md:grid-cols-4">
          <div className="p-5 sm:p-6 border-r border-[rgba(232,236,239,0.12)]">
            <div className="font-mono text-2xl sm:text-[1.65rem] font-medium text-[#e3a857]">
              5+
            </div>
            <div className="mt-1.5 text-[0.82rem] text-[#9ba7b4]">
              years in automation &amp; test engineering
            </div>
          </div>

          <div className="p-5 sm:p-6 md:border-r border-[rgba(232,236,239,0.12)]">
            <div className="font-mono text-2xl sm:text-[1.65rem] font-medium text-[#e3a857]">
              4
            </div>
            <div className="mt-1.5 text-[0.82rem] text-[#9ba7b4]">
              engineers directly mentored
            </div>
          </div>

          <div className="p-5 sm:p-6 border-t md:border-t-0 border-r border-[rgba(232,236,239,0.12)]">
            <div className="font-mono text-2xl sm:text-[1.65rem] font-medium text-[#e3a857]">
              14+
            </div>
            <div className="mt-1.5 text-[0.82rem] text-[#9ba7b4]">
              production services under sign-off, 0 high-sev escapes
            </div>
          </div>

          <div className="p-5 sm:p-6 border-t md:border-t-0">
            <div className="font-mono text-2xl sm:text-[1.65rem] font-medium text-[#e3a857]">
              65%
            </div>
            <div className="mt-1.5 text-[0.82rem] text-[#9ba7b4]">
              faster CI/CD regression cycle
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
