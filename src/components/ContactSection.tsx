import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Download, 
  FileText, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  Navigation,
  Briefcase,
  Target
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
  currentLocation: string;
  onOpenPhotoLocationModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onPrintResume,
  currentLocation,
  onOpenPhotoLocationModal,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'Lead SDET (Team Mentorship & QA Sign-Off)',
    message: 'Hi Umashankar, we reviewed your OneDesk AI project and 5+ years test leadership experience. We would like to schedule a 30-minute introductory discussion for our team...',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const constructEmailBody = (data: typeof formData) => {
    return (
      `Hi Umashankar,\n\n` +
      `I am reaching out regarding an opportunity at ${data.company || '[Company]'}.\n\n` +
      `• Candidate Position: ${data.role}\n` +
      `• Recruiter / HR Contact: ${data.name || '[Name]'}\n` +
      `• Work Email: ${data.email || '[Email]'}\n` +
      `• Mobile / WhatsApp: ${data.phone || '[Phone]'}\n` +
      `• Company / Organization: ${data.company || '[Company]'}\n\n` +
      `Role Scope & Message:\n` +
      `${data.message}\n\n` +
      `Looking forward to connecting!`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Lead SDET Inquiry] ${formData.role} at ${formData.company || 'Our Company'} - ${formData.name || 'Recruiter'}`;
    const body = constructEmailBody(formData);

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyPrepared = () => {
    const text = constructEmailBody(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#1b222c]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-12 flex-wrap">
          <div>
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
              Let's Connect for Lead SDET Roles
            </h2>
            {/* Designation Distinction */}
            <div className="flex items-center gap-2 mt-2 text-xs">
              <span className="text-[#9ba7b4]">Current: <strong className="text-[#e8ecef]">{PERSONAL_INFO.currentDesignation}</strong></span>
              <span className="text-[#e3a857]">➔</span>
              <span className="text-[#e3a857] font-semibold">Actively Seeking: {PERSONAL_INFO.lookingForDesignation}</span>
            </div>
          </div>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">06</span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Info & Resumes */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-[1.05rem] text-[#9ba7b4] leading-[1.65]">
              I am actively interviewing with engineering leaders seeking a Lead SDET to drive framework reliability, mentor automation squads, and evaluate enterprise GenAI / LLM pipelines.
            </p>

            <div className="space-y-6 pt-2">
              {/* Email */}
              <div className="border-l-2 border-[#b98a46] pl-4">
                <div className="text-[0.78rem] text-[#6b7683] font-mono uppercase tracking-wider">
                  Personal &amp; Work Email
                </div>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="mt-1 block text-[#e8ecef] text-[1.02rem] font-medium hover:text-[#e3a857] transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Mobile / WhatsApp */}
              <div className="border-l-2 border-[#b98a46] pl-4">
                <div className="text-[0.78rem] text-[#6b7683] font-mono uppercase tracking-wider">
                  Mobile / Direct WhatsApp
                </div>
                <a 
                  href={`tel:${PERSONAL_INFO.phone}`} 
                  className="mt-1 block text-[#e8ecef] text-[1.02rem] font-medium hover:text-[#e3a857] transition-colors font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="border-l-2 border-[#b98a46] pl-4">
                <div className="text-[0.78rem] text-[#6b7683] font-mono uppercase tracking-wider">
                  LinkedIn Profile
                </div>
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-[#e8ecef] text-[1.02rem] font-medium hover:text-[#e3a857] transition-colors"
                >
                  <span>Umashankar Pandey (SDET)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#6b7683]" />
                </a>
              </div>

              {/* Verified Location */}
              <div className="border-l-2 border-[#b98a46] pl-4">
                <div className="text-[0.78rem] text-[#6b7683] font-mono uppercase tracking-wider">
                  Verified Location
                </div>
                <div className="mt-1 text-[#e8ecef] text-[1.02rem] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e3a857] shrink-0" />
                  <span>{currentLocation}</span>
                </div>
                <div className="text-[0.84rem] text-[#e3a857] font-mono mt-0.5">
                  Open to Remote &amp; Immediate Worldwide Relocation
                </div>
              </div>
            </div>

            {/* Resume Buttons (American English) */}
            <div className="pt-4 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-[rgba(227,168,87,0.1)] border border-[rgba(232,236,239,0.22)] hover:border-[#e3a857] text-[#e8ecef] text-[0.9rem] font-medium rounded-[2px] transition-colors"
              >
                <FileText className="w-4 h-4 text-[#e3a857]" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={onPrintResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-[0.9rem] font-semibold rounded-[2px] transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-[#181205]" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Send Interview Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12171f] border border-[rgba(232,236,239,0.12)] p-6 sm:p-8 rounded-[2px]">
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#e8ecef]">
                Send an Interview Inquiry or Role Proposal
              </h3>
              <p className="text-[0.84rem] text-[#6b7683] mt-1 font-mono">
                Delivered directly to Umashankar's verified inbox:{' '}
                <span className="text-[#e3a857]">{PERSONAL_INFO.email}</span>
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-[rgba(227,168,87,0.1)] border border-[#b98a46] rounded-[2px] text-xs space-y-2">
                <div className="flex items-center gap-2 text-[#e3a857] font-semibold">
                  <Check className="w-4 h-4" />
                  <span>Draft generated for your email client!</span>
                </div>
                <p className="text-[#9ba7b4]">
                  If your email client did not open automatically, click below to copy the message text and paste it directly into an email to <span className="text-[#e8ecef]">{PERSONAL_INFO.email}</span>:
                </p>
                <button
                  type="button"
                  onClick={handleCopyPrepared}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1b222c] border border-[rgba(232,236,239,0.22)] hover:border-[#e3a857] text-[#e8ecef] rounded-[2px] font-mono text-[0.8rem]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#e3a857]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Full Message Text'}</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                    Your Name (HR / Hiring Manager) <span className="text-[#e3a857]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                    Company / Organization <span className="text-[#e3a857]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Stripe, Amazon, Google"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                    Your Work Email Address <span className="text-[#e3a857]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah.jenkins@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors"
                  />
                  <span className="block text-[0.72rem] text-[#6b7683] mt-1">
                    Umashankar will reply directly to this email
                  </span>
                </div>

                <div>
                  <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                    Mobile / WhatsApp Number <span className="text-[#e3a857]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210 or +1 (415) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors"
                  />
                  <span className="block text-[0.72rem] text-[#6b7683] mt-1">
                    For interview scheduling and WhatsApp sync
                  </span>
                </div>
              </div>

              {/* Row 3: Target Position */}
              <div>
                <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                  Target Position Under Discussion
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors"
                />
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-[0.82rem] font-medium text-[#e8ecef] mb-1.5">
                  Your Message or Role Scope <span className="text-[#e3a857]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#1b222c] border border-[rgba(232,236,239,0.15)] focus:border-[#e3a857] text-[#e8ecef] px-3.5 py-2.5 rounded-[2px] text-[0.92rem] focus:outline-hidden transition-colors resize-y leading-relaxed font-sans"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-[0.92rem] font-semibold rounded-[2px] transition-colors shadow-2xs"
                >
                  <Send className="w-4 h-4 text-[#181205]" />
                  <span>Send Inquiry to Umashankar</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyPrepared}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-transparent border border-[rgba(232,236,239,0.2)] hover:border-[#e3a857] text-[#9ba7b4] hover:text-[#e8ecef] text-[0.88rem] rounded-[2px] transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#e3a857]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard' : 'Copy Prepared Message'}</span>
                </button>
              </div>

              <div className="text-[0.76rem] text-[#6b7683] font-mono pt-1">
                Opens prefilled draft to {PERSONAL_INFO.email}
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
