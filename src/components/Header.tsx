import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Download,
  Mail,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeaderProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenResume, 
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
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'OneDesk AI & Projects', href: '#projects' },
    { label: 'Skills Matrix', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 no-print ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] py-3 shadow-xs' 
          : 'bg-[#F8FAFC]/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Name & Target Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#0D766E] text-white flex items-center justify-center font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
            UP
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#0F172A] text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#ECFDF5] text-[#065F46] px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Lead SDET
              </span>
            </div>
            <p className="text-xs text-[#64748B]">
              5+ Years Exp • Mentored 4 Eng • QA Release Sign-Off
            </p>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold text-[#475569] hover:text-[#0D766E] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Download PDF Button */}
          <button
            id="header-download-pdf-btn"
            onClick={onPrintResume}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0D766E] hover:bg-[#0F766E] px-3.5 py-2 rounded-lg transition-all shadow-xs"
            title="Download 2-Page ATS Formatted PDF Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>

          {/* View Interactive Resume */}
          <button
            id="header-view-resume-btn"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F172A] bg-white hover:bg-[#F8FAFC] border border-[#CBD5E1] px-3 py-2 rounded-lg transition-all shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-[#0D766E]" />
            <span>View Resume</span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#0D766E] hover:text-[#044E48] bg-[#F0FDFA] border border-[#99F6E4] transition-colors"
            title="Contact Umashankar"
            aria-label="Contact Umashankar"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onPrintResume}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#0D766E] px-3 py-2 rounded-lg shadow-xs min-h-[40px]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[60px] bg-black/40 z-30 md:hidden backdrop-blur-2xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-3 pb-6 space-y-4 shadow-xl">
            <div className="divide-y divide-[#F1F5F9]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#334155] hover:text-[#0D766E] py-3.5 px-2 rounded-lg hover:bg-[#F8FAFC] flex items-center justify-between transition-colors min-h-[44px]"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F1F5F9] flex gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onPrintResume();
                }}
                className="flex-1 text-center py-3 px-3 rounded-lg text-xs font-bold text-white bg-[#0D766E] shadow-xs flex items-center justify-center gap-1.5 min-h-[44px]"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 text-center py-3 px-3 rounded-lg text-xs font-bold text-[#0F172A] bg-[#F1F5F9] border border-[#CBD5E1] min-h-[44px]"
              >
                View Resume
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
