import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Globe, 
  Sparkles, 
  Menu, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Printer,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, ATS_SCORE_DATA } from '../data/resumeData';

interface HeaderProps {
  onOpenResume: () => void;
  onOpenDomainGuide: () => void;
  onPrintResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenResume, 
  onOpenDomainGuide,
  onPrintResume 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About & Leadership', href: '#about' },
    { label: 'AI & GenAI Testing', href: '#ai-testing' },
    { label: 'OneDesk AI & Projects', href: '#projects' },
    { label: 'Live Test Harness', href: '#test-demo' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        isScrolled 
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E5E7EB] py-3 shadow-xs' 
          : 'bg-[#FBFBF9] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Name & Target Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#0D766E] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-[#0F766E]/90 transition-colors">
            UP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#111827] text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#ECFDF5] text-[#065F46] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
                Lead SDET Target
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">
              5+ Years Exp • Mentored 4 Eng • QA Release Sign-Off
            </p>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#4B5563] hover:text-[#0D766E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Domain & Hosting Guide Button */}
          <button
            id="header-domain-guide-btn"
            onClick={onOpenDomainGuide}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F766E] bg-[#F0FDFA] hover:bg-[#CCFBF1] px-3 py-2 rounded-lg border border-[#99F6E4] transition-all"
            title="Step-by-step guide to buy domain and host this portfolio"
          >
            <Globe className="w-3.5 h-3.5 text-[#0D766E]" />
            <span>Own Domain & Hosting</span>
          </button>

          {/* View / Download Resume */}
          <button
            id="header-view-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-[#0D766E] hover:bg-[#115E59] px-3.5 py-2 rounded-lg transition-all shadow-xs"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Resume</span>
          </button>

          <button
            id="header-print-resume-btn"
            onClick={onPrintResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#374151] bg-[#F3F4F6] hover:bg-[#E5E7EB] px-3 py-2 rounded-lg border border-[#E5E7EB] transition-all"
            title="Direct print / save PDF"
          >
            <Printer className="w-3.5 h-3.5 text-[#4B5563]" />
            <span className="hidden md:inline">Print / PDF</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={onOpenResume}
            className="text-xs font-semibold text-white bg-[#0D766E] px-2.5 py-1.5 rounded-md flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4B5563] hover:text-[#111827] rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBF9] border-b border-[#E5E7EB] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#374151] hover:text-[#0D766E] py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDomainGuide();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-[#0F766E] bg-[#F0FDFA] py-2 rounded-lg border border-[#99F6E4]"
            >
              <Globe className="w-4 h-4" />
              How to Buy Domain & Host Website
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold text-white bg-[#0D766E] py-2 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              Open ATS-Targeted Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
