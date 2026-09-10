import React, { useState, useEffect } from 'react';
import { Menu, X, Download, FileText, MapPin, SlidersHorizontal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface HeaderProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
  onOpenPhotoLocationModal: () => void;
  currentLocation: string;
  profilePicture: string;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenResume, 
  onPrintResume,
  onOpenPhotoLocationModal,
  currentLocation,
  profilePicture,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'about', 'genai', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'GenAI Testing', href: '#genai', id: 'genai' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Case Studies', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#12171f]/95 backdrop-blur-md border-b border-[rgba(232,236,239,0.12)] no-print">
      <nav className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between gap-4">
        
        {/* Brand: Clean single-line typography with no wrap or collision */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#b98a46] shrink-0 bg-[#1b222c]">
            <img
              src={profilePicture}
              alt="Umashankar Pandey"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          <a href="#top" className="flex flex-col group text-left">
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="font-bold text-[0.98rem] sm:text-[1.05rem] tracking-tight text-[#e8ecef] group-hover:text-[#e3a857] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#e3a857] font-mono text-[0.8rem]">·sdet</span>
            </div>
            
            <div className="text-[0.68rem] sm:text-[0.72rem] font-mono text-[#9ba7b4] whitespace-nowrap leading-none mt-0.5">
              <span>{PERSONAL_INFO.currentDesignation}</span>
              <span className="text-[#b98a46] mx-1">·</span>
              <span className="text-[#e3a857]">Freecharge</span>
            </div>
          </a>
        </div>

        {/* Center Nav Links - Spaced cleanly for laptops and desktops */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-[0.85rem] xl:text-[0.9rem] py-1.5 border-b transition-colors whitespace-nowrap ${
                  activeSection === link.id
                    ? 'text-[#e8ecef] border-[#e3a857] font-medium'
                    : 'text-[#9ba7b4] border-transparent hover:text-[#e8ecef]'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Buttons: Clean & Professional (No public edit clutter) */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-[0.85rem] font-medium text-[#e8ecef] border border-[rgba(232,236,239,0.22)] rounded-[2px] hover:border-[#e3a857] hover:bg-[rgba(227,168,87,0.1)] transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#e3a857]" />
            <span>View Resume</span>
          </button>

          <button
            onClick={onPrintResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[0.85rem] font-semibold text-[#181205] bg-[#e3a857] border border-[#e3a857] rounded-[2px] hover:bg-[#eeb86c] transition-colors shadow-2xs cursor-pointer"
            title="Download PDF format resume"
          >
            <Download className="w-3.5 h-3.5 text-[#181205]" />
            <span>Download Resume</span>
          </button>

          {/* Discreet Owner Settings Button (Only for owner to update photo/location) */}
          <button
            type="button"
            onClick={onOpenPhotoLocationModal}
            className="p-2 text-[#6b7683] hover:text-[#e3a857] hover:bg-[rgba(227,168,87,0.08)] rounded-[2px] border border-transparent hover:border-[#b98a46]/30 transition-colors cursor-pointer"
            title="Owner Settings: Customize Photo & Location"
            aria-label="Owner Settings: Customize Photo & Location"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onPrintResume}
            className="px-2.5 py-1.5 text-xs font-semibold text-[#181205] bg-[#e3a857] rounded-[2px]"
          >
            Resume PDF
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#e8ecef] hover:text-[#e3a857] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-[rgba(232,236,239,0.12)] bg-[#1b222c] px-6 py-4 flex flex-col space-y-3">
          {/* Location Badge on Mobile (Pristine, non-editable badge) */}
          <div className="flex items-center gap-2 p-2.5 bg-[#12171f] border border-[rgba(232,236,239,0.15)] rounded-[2px] text-xs text-[#e8ecef]">
            <MapPin className="w-4 h-4 text-[#e3a857] shrink-0" />
            <span className="truncate">Location: {currentLocation}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#9ba7b4] hover:text-[#e8ecef] py-2 text-[0.92rem] border-b border-[rgba(232,236,239,0.06)]"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2.5 text-center text-xs font-medium text-[#e8ecef] border border-[rgba(232,236,239,0.22)] rounded-[2px]"
            >
              View Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onPrintResume();
              }}
              className="flex-1 py-2.5 text-center text-xs font-bold text-[#181205] bg-[#e3a857] rounded-[2px]"
            >
              Download PDF
            </button>
          </div>

          {/* Discreet Owner Link at bottom of mobile menu */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPhotoLocationModal();
            }}
            className="w-full text-left py-2 px-1 text-xs text-[#6b7683] hover:text-[#e3a857] flex items-center justify-between border-t border-[rgba(232,236,239,0.06)] pt-3 mt-1"
          >
            <span>Customize Photo &amp; Location</span>
            <span className="text-[10px] font-mono text-[#b98a46]">Owner</span>
          </button>
        </div>
      )}
    </header>
  );
};
