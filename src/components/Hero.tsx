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

          {/* Prominent Location Display & Change / GPS Button */}
          <div className="flex items-center gap-2 text-xs">
            <div 
              onClick={onOpenPhotoLocationModal}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1b222c] border border-[#b98a46]/50 rounded-[2px] text-[#e8ecef] cursor-pointer hover:border-[#e3a857] transition-colors shadow-xs"
              title="Click to edit or detect live location"
            >
              <MapPin className="w-3.5 h-3.5 text-[#e3a857] shrink-0" />
              <span className="font-mono text-[#9ba7b4] text-[0.72rem] uppercase">Location:</span>
              <span className="font-semibold text-xs text-[#e8ecef]">{currentLocation}</span>
            </div>

            <button
              type="button"
              onClick={onOpenPhotoLocationModal}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#171e27] hover:bg-[rgba(227,168,87,0.15)] border border-[rgba(232,236,239,0.2)] hover:border-[#b98a46] text-[#9ba7b4] hover:text-[#e3a857] rounded-[2px] transition-colors text-xs cursor-pointer"
              title="Change photo or update location"
            >
              <Navigation className="w-3.5 h-3.5 text-[#e3a857]" />
              <span className="font-mono text-[0.75rem]">Change / Detect</span>
            </button>
          </div>

        </div>

        {/* Main Hero Body: Picture + Text Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Profile Picture Card & Visible Location */}
          <div className="lg:col-span-4 flex flex-col items-start sm:items-center lg:items-start">
            <div className="relative group">
              {/* Photo Frame with Accent Ring */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[4px] overflow-hidden border-2 border-[#b98a46] shadow-xl bg-[#1b222c] relative">
                <img
                  src={profilePicture}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay to change picture */}
                <button
                  type="button"
                  onClick={onOpenPhotoLocationModal}
                  className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity gap-1.5 cursor-pointer focus:outline-hidden"
                  title="Click to upload your own picture"
                >
                  <Camera className="w-7 h-7 text-[#e3a857]" />
                  <span className="text-xs font-semibold text-[#e8ecef]">Upload Photo</span>
                  <span className="text-[10px] text-[#9ba7b4]">Click to browse</span>
                </button>
              </div>

              {/* Verified Availability Tag */}
              <div className="absolute -bottom-3 left-4 right-4 sm:left-6 sm:right-6 bg-[#12171f] border border-[#b98a46] px-3 py-1.5 rounded-[2px] flex items-center justify-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="font-mono text-[0.72rem] text-[#e8ecef] font-semibold uppercase tracking-wider">
                  Available for Lead Roles
                </span>
              </div>
            </div>

            {/* Quick Action Buttons: Upload Photo & Location */}
            <div className="mt-5 flex items-center gap-2">
              <button
                type="button"
                onClick={onOpenPhotoLocationModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[rgba(227,168,87,0.12)] hover:bg-[rgba(227,168,87,0.22)] text-[#e3a857] border border-[#b98a46]/50 text-xs rounded-[2px] font-mono cursor-pointer transition-colors shadow-2xs"
                title="Upload custom profile photo"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Upload Photo</span>
              </button>

              <button
                type="button"
                onClick={onOpenPhotoLocationModal}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-[#171e27] hover:bg-[#1b222c] text-[#9ba7b4] hover:text-[#e8ecef] border border-[rgba(232,236,239,0.18)] text-xs rounded-[2px] font-mono cursor-pointer transition-colors"
                title="Update your current location"
              >
                <MapPin className="w-3.5 h-3.5 text-[#e3a857]" />
                <span>Set Location</span>
              </button>
            </div>

            {/* Prominent Dedicated Current Location Card */}
            <div className="mt-4 w-full max-w-[240px] bg-[#1b222c] border border-[#b98a46]/35 rounded-[3px] p-3 text-left shadow-sm">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#9ba7b4]">
                <span className="flex items-center gap-1 text-[#e3a857] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#e3a857] shrink-0" /> Current Location
                </span>
                <button
                  type="button"
                  onClick={onOpenPhotoLocationModal}
                  className="text-[10px] text-[#e3a857] hover:underline cursor-pointer"
                >
                  Edit
                </button>
              </div>
              <div className="mt-1 text-sm font-bold text-[#e8ecef] leading-snug">
                {currentLocation}
              </div>
              <div className="mt-1.5 text-[11px] text-[#10b981] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                <span>Open to Relocation &amp; Remote</span>
              </div>
            </div>

            {/* Profile Verification Badge */}
            <div className="mt-3 flex items-center gap-2 text-xs text-[#9ba7b4]">
              <Sparkles className="w-3.5 h-3.5 text-[#e3a857]" />
              <span className="text-[0.78rem] font-mono">Senior SDET @ Freecharge · Ex-Nagarro</span>
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
                title="Download 2-Page ATS Formatted Resume (PDF)"
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
