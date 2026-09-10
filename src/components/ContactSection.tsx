import React, { useState, useMemo } from 'react';
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
  MessageCircle,
  Phone,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2
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

  const [preferredChannel, setPreferredChannel] = useState<'whatsapp' | 'gmail' | 'default_mail'>('whatsapp');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastDispatchedChannel, setLastDispatchedChannel] = useState<string | null>(null);

  // Clean international phone for WhatsApp (no + or spaces)
  const whatsappCleanNumber = '918299867994';

  const constructEmailBody = (data: typeof formData) => {
    return (
      `Hi Umashankar,\n\n` +
      `I am reaching out regarding an opportunity at ${data.company || '[Company]'}.\n\n` +
      `• Target Position: ${data.role}\n` +
      `• Recruiter / HR Contact: ${data.name || '[Name]'}\n` +
      `• Work Email: ${data.email || '[Email]'}\n` +
      `• Mobile / WhatsApp: ${data.phone || '[Phone]'}\n` +
      `• Company / Organization: ${data.company || '[Company]'}\n\n` +
      `Role Scope & Message:\n` +
      `${data.message}\n\n` +
      `Looking forward to connecting!`
    );
  };

  const constructWhatsAppMessage = (data: typeof formData) => {
    return (
      `*Lead SDET Inquiry for Umashankar Pandey*\n\n` +
      `• *Company:* ${data.company || 'Not specified'}\n` +
      `• *Recruiter / Contact:* ${data.name || 'Hiring Manager'}\n` +
      `• *Position:* ${data.role}\n` +
      `• *Work Email:* ${data.email || 'Not specified'}\n` +
      `• *Phone / WhatsApp:* ${data.phone || 'Not specified'}\n\n` +
      `*Role Scope & Message:*\n` +
      `${data.message}`
    );
  };

  const emailSubject = useMemo(() => {
    return `[Lead SDET Inquiry] ${formData.role} at ${formData.company || 'Our Company'} - ${formData.name || 'Recruiter'}`;
  }, [formData.role, formData.company, formData.name]);

  const emailBody = useMemo(() => {
    return constructEmailBody(formData);
  }, [formData]);

  const whatsappText = useMemo(() => {
    return constructWhatsAppMessage(formData);
  }, [formData]);

  // URLs for reliable cross-platform redirection
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappCleanNumber}&text=${encodeURIComponent(whatsappText)}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  const safeOpenLink = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDispatch = (channel: 'whatsapp' | 'gmail' | 'default_mail') => {
    setLastDispatchedChannel(channel);
    setSubmitted(true);

    if (channel === 'whatsapp') {
      safeOpenLink(whatsappUrl);
    } else if (channel === 'gmail') {
      safeOpenLink(gmailUrl);
    } else if (channel === 'default_mail') {
      safeOpenLink(mailtoUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleDispatch(preferredChannel);
  };

  const handleCopyPrepared = () => {
    const text = preferredChannel === 'whatsapp' ? whatsappText : emailBody;
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
          <div className="lg:col-span-5 space-y-7">
            <p className="text-[1.05rem] text-[#9ba7b4] leading-[1.65]">
              I am actively interviewing with engineering leaders seeking a Lead SDET to drive framework reliability, mentor automation squads, and evaluate enterprise GenAI / LLM pipelines.
            </p>

            <div className="space-y-5 pt-1">
              
              {/* WhatsApp Direct Chat (Primary Fast Connect) */}
              <div className="border-l-2 border-[#10B981] pl-4 bg-[rgba(16,185,129,0.06)] p-3.5 rounded-r-[2px] border-r border-t border-b border-[rgba(16,185,129,0.15)]">
                <div className="flex items-center justify-between">
                  <div className="text-[0.78rem] text-[#34D399] font-mono uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                    <MessageCircle className="w-3.5 h-3.5" />
                    Direct WhatsApp
                  </div>
                  <span className="text-[10px] bg-[#10B981]/20 text-[#34D399] px-2 py-0.5 rounded-full font-mono">
                    Fastest Reply
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a 
                    href={`https://api.whatsapp.com/send?phone=${whatsappCleanNumber}&text=Hi%20Umashankar,%20I%20reviewed%20your%20Lead%20SDET%20portfolio%20and%20would%20like%20to%20discuss%20an%20engineering%20role.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span className="text-xs text-[#9ba7b4]">
                    Tap to open direct chat instantly
                  </span>
                </div>
              </div>

              {/* Email Options */}
              <div className="border-l-2 border-[#b98a46] pl-4">
                <div className="text-[0.78rem] text-[#6b7683] font-mono uppercase tracking-wider">
                  Personal &amp; Work Email
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="text-[#e8ecef] text-[1.02rem] font-medium hover:text-[#e3a857] transition-colors font-mono"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-xs">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=Lead%20SDET%20Inquiry%20from%20Portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e3a857] hover:text-[#eeb86c] underline underline-offset-2 inline-flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    <span>Open in Gmail</span>
                  </a>
                  <span className="text-[#475569]">•</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[#9ba7b4] hover:text-[#e8ecef] inline-flex items-center gap-1"
                  >
                    <span>Default Mail App</span>
                  </a>
                </div>
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
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-[rgba(227,168,87,0.1)] border border-[rgba(232,236,239,0.22)] hover:border-[#e3a857] text-[#e8ecef] text-[0.9rem] font-medium rounded-[2px] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#e3a857]" />
                <span>View Resume</span>
              </button>

              <button
                type="button"
                onClick={onPrintResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-[0.9rem] font-semibold rounded-[2px] transition-colors shadow-2xs cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#181205]" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Send Interview Inquiry Form */}
          <div className="lg:col-span-7 bg-[#12171f] border border-[rgba(232,236,239,0.12)] p-6 sm:p-8 rounded-[2px]">
            
            <div className="mb-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="text-xl font-semibold text-[#e8ecef]">
                  Send Inquiry to Umashankar
                </h3>
                <span className="text-[11px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-sm border border-[#10B981]/20 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Instant WhatsApp &amp; Email Sync
                </span>
              </div>
              <p className="text-[0.84rem] text-[#6b7683] mt-1 font-mono">
                Redirects directly to encrypted <span className="text-[#34D399]">WhatsApp</span> or Email (<span className="text-[#e3a857]">{PERSONAL_INFO.email}</span>)
              </p>
            </div>

            {/* Redirection Confirmation Panel (Shown after dispatch or click) */}
            {submitted && (
              <div className="mb-6 p-4 bg-[#1b222c] border border-[#10B981]/50 rounded-[2px] space-y-3 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#34D399] font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                    <span>Inquiry Ready &amp; Dispatched via {lastDispatchedChannel === 'whatsapp' ? 'WhatsApp' : lastDispatchedChannel === 'gmail' ? 'Gmail' : 'Email'}!</span>
                  </div>
                  <span className="text-[11px] text-[#6b7683] font-mono">Select any channel to re-open</span>
                </div>

                <p className="text-xs text-[#9ba7b4] leading-relaxed">
                  If your browser popup blocker prevented the tab from opening automatically, click below to open your preferred channel directly:
                </p>

                {/* Direct Channel Redirect Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Open WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {/* Gmail */}
                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-[#EA4335] hover:bg-[#d33828] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Gmail</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>

                  {/* Default Mail */}
                  <a
                    href={mailtoUrl}
                    className="flex items-center justify-center gap-1.5 p-2.5 bg-[#2a3442] hover:bg-[#344052] text-[#e8ecef] text-xs font-semibold rounded-[2px] transition-colors border border-[rgba(232,236,239,0.15)]"
                  >
                    <Send className="w-3.5 h-3.5 text-[#e3a857]" />
                    <span>Default Mail App</span>
                  </a>
                </div>

                {/* Copy Text Option */}
                <div className="pt-1 flex items-center justify-between gap-3 text-xs border-t border-[rgba(232,236,239,0.1)]">
                  <span className="text-[#6b7683] text-[11px]">Need a copy for your email or notes?</span>
                  <button
                    type="button"
                    onClick={handleCopyPrepared}
                    className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-[#e3a857] hover:text-[#eeb86c] transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-[#10B981]" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied Message!' : 'Copy Formatted Text'}</span>
                  </button>
                </div>
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

              {/* Channel Selector */}
              <div className="pt-2 pb-1">
                <label className="block text-[0.78rem] font-mono uppercase tracking-wider text-[#6b7683] mb-2">
                  Select Redirection Destination:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <label 
                    className={`flex items-center gap-2 p-2.5 rounded-[2px] border cursor-pointer transition-colors ${
                      preferredChannel === 'whatsapp' 
                        ? 'bg-[#10B981]/15 border-[#10B981] text-[#34D399]' 
                        : 'bg-[#1b222c] border-[rgba(232,236,239,0.12)] text-[#9ba7b4] hover:border-[rgba(232,236,239,0.25)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="channel"
                      value="whatsapp"
                      checked={preferredChannel === 'whatsapp'}
                      onChange={() => setPreferredChannel('whatsapp')}
                      className="accent-[#10B981]"
                    />
                    <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="font-semibold">WhatsApp</span>
                  </label>

                  <label 
                    className={`flex items-center gap-2 p-2.5 rounded-[2px] border cursor-pointer transition-colors ${
                      preferredChannel === 'gmail' 
                        ? 'bg-[#EA4335]/15 border-[#EA4335] text-[#ff8075]' 
                        : 'bg-[#1b222c] border-[rgba(232,236,239,0.12)] text-[#9ba7b4] hover:border-[rgba(232,236,239,0.25)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="channel"
                      value="gmail"
                      checked={preferredChannel === 'gmail'}
                      onChange={() => setPreferredChannel('gmail')}
                      className="accent-[#EA4335]"
                    />
                    <Mail className="w-3.5 h-3.5 text-[#EA4335]" />
                    <span className="font-semibold">Gmail Web</span>
                  </label>

                  <label 
                    className={`flex items-center gap-2 p-2.5 rounded-[2px] border cursor-pointer transition-colors ${
                      preferredChannel === 'default_mail' 
                        ? 'bg-[#e3a857]/15 border-[#e3a857] text-[#e3a857]' 
                        : 'bg-[#1b222c] border-[rgba(232,236,239,0.12)] text-[#9ba7b4] hover:border-[rgba(232,236,239,0.25)]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="channel"
                      value="default_mail"
                      checked={preferredChannel === 'default_mail'}
                      onChange={() => setPreferredChannel('default_mail')}
                      className="accent-[#e3a857]"
                    />
                    <Send className="w-3.5 h-3.5 text-[#e3a857]" />
                    <span className="font-semibold">Default Mail App</span>
                  </label>
                </div>
              </div>

              {/* Action Buttons: Direct Dual Pathways */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Primary Submit Button */}
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#e3a857] hover:bg-[#eeb86c] text-[#181205] text-[0.92rem] font-semibold rounded-[2px] transition-colors shadow-2xs cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#181205]" />
                  <span>
                    {preferredChannel === 'whatsapp'
                      ? 'Send via WhatsApp (Direct Chat)'
                      : preferredChannel === 'gmail'
                      ? 'Open & Send in Gmail'
                      : 'Send via Default Mail Client'}
                  </span>
                </button>

                {/* Direct Alternative Fast Buttons */}
                <div className="flex items-center gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSubmitted(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs"
                    title="Direct WhatsApp chat with pre-filled enquiry"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">WhatsApp</span>
                  </a>

                  <a
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSubmitted(true)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 bg-[#EA4335] hover:bg-[#d33828] text-white text-xs font-semibold rounded-[2px] transition-colors shadow-2xs"
                    title="Direct Gmail compose with pre-filled enquiry"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span className="hidden xs:inline">Gmail</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPrepared}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-transparent border border-[rgba(232,236,239,0.2)] hover:border-[#e3a857] text-[#9ba7b4] hover:text-[#e8ecef] text-xs rounded-[2px] transition-colors cursor-pointer"
                    title="Copy full message text"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="sr-only">Copy text</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[0.76rem] text-[#6b7683] font-mono pt-1">
                <span>Direct WhatsApp &amp; Sarthi Assistant</span>
                <span>Direct Email: {PERSONAL_INFO.email}</span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

