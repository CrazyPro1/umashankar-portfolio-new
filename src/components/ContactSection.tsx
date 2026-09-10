import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  MapPin, 
  Copy, 
  Check, 
  FileText, 
  Send, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  Phone,
  Building,
  User,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Share2,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

interface ContactSectionProps {
  onOpenResume: () => void;
  onPrintResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenResume,
  onPrintResume,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<null | {
    name: string;
    company: string;
    email: string;
    phone: string;
    role: string;
    message: string;
    timestamp: string;
  }>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    role: 'Lead SDET (Team Mentorship & QA Sign-Off)',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const constructFormattedBody = (data: typeof formData) => {
    return (
      `Hi Umashankar,\n\n` +
      `I am reaching out regarding an opportunity at ${data.company}.\n\n` +
      `• Candidate Position: ${data.role}\n` +
      `• Recruiter / HR Contact: ${data.name}\n` +
      `• Work Email: ${data.email}\n` +
      `• Mobile / WhatsApp: ${data.phone}\n` +
      `• Company: ${data.company}\n\n` +
      `Message Details:\n` +
      `${data.message}\n\n` +
      `Looking forward to connecting!`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedBody = constructFormattedBody(formData);
    const subject = `[Recruiter Inquiry] ${formData.role} at ${formData.company} - ${formData.name}`;

    setSubmittedInquiry({
      ...formData,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    // Automatically trigger mailto link
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyFullInquiry = () => {
    if (!submittedInquiry) return;
    const formatted = constructFormattedBody(submittedInquiry);
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleOpenWebGmail = () => {
    if (!submittedInquiry) return;
    const subject = encodeURIComponent(`[Recruiter Inquiry] ${submittedInquiry.role} at ${submittedInquiry.company} - ${submittedInquiry.name}`);
    const body = encodeURIComponent(constructFormattedBody(submittedInquiry));
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`, '_blank');
  };

  const handleOpenWhatsApp = () => {
    if (!submittedInquiry) return;
    const text = encodeURIComponent(
      `Hello Umashankar, I am ${submittedInquiry.name} from ${submittedInquiry.company}. ` +
      `We'd like to discuss the ${submittedInquiry.role} position with you. My email is ${submittedInquiry.email} and phone is ${submittedInquiry.phone}.`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F0FDFA] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle ambient gradient orbs */}
      <div className="absolute top-0 right-10 w-[550px] h-[350px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Candidate Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-3">
                <Mail className="w-3.5 h-3.5 text-[#059669]" />
                Direct Outreach
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Let&apos;s Connect for Lead SDET Roles
              </h2>
              <p className="mt-3 text-sm text-[#475569] leading-relaxed">
                I am actively interviewing with engineering leaders seeking a Lead SDET to drive framework reliability, 
                mentor automation squads, and evaluate enterprise GenAI / LLM pipelines.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] text-[#0D766E] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">Personal & Work Email</div>
                    <div className="text-sm font-bold text-[#0F172A]">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#64748B]">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-[#0F172A]">Umashankar Pandey (SDET)</div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#475569] transition-colors"
                  title="Open LinkedIn"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-2xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#64748B]">Current Location</div>
                  <div className="text-sm font-bold text-[#0F172A]">
                    Lucknow, Uttar Pradesh, India
                  </div>
                  <div className="text-xs text-[#059669] font-medium mt-0.5">
                    Open to Remote & Immediate Relocation
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Actions */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0D766E] hover:bg-[#115E59] shadow-xs transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onPrintResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] shadow-2xs transition-colors"
                title="Directly download 2-page PDF resume"
              >
                <Download className="w-3.5 h-3.5 text-[#0D766E]" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Right Column: Recruiter Inquiry Form with Email & Mobile fields */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E2E8F0] shadow-sm relative">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-[#F0FDFA] text-[#0D766E]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0F172A]">
                      Send an Interview Inquiry or Role Proposal
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Delivered directly to Umashankar&apos;s verified inbox: <strong className="text-[#0D766E]">{PERSONAL_INFO.email}</strong>
                    </p>
                  </div>
                </div>
              </div>

              {submittedInquiry ? (
                /* Interactive Confirmation & "How It Reaches Me" Preview */
                <div className="space-y-5 animate-fadeIn">
                  <div className="bg-[#ECFDF5] border border-[#A7F3D0] rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#065F46]">
                        Inquiry Formatted & Prepared for Transmission!
                      </h4>
                      <p className="text-xs text-[#047857] mt-0.5">
                        A direct email draft to <strong className="underline">{PERSONAL_INFO.email}</strong> has been opened.
                        You can also send it with 1-click via Gmail or WhatsApp below.
                      </p>
                    </div>
                  </div>

                  {/* "How it looks in Umashankar's Inbox" preview */}
                  <div className="bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] p-4 text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] mb-3 text-[#64748B]">
                      <span className="font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#0D766E]" />
                        Preview: How this reaches Umashankar Pandey
                      </span>
                      <span>Received at {submittedInquiry.timestamp}</span>
                    </div>

                    <div className="space-y-2 text-[#334155]">
                      <div>
                        <span className="text-[#64748B] w-28 inline-block">To:</span>
                        <strong className="text-[#0F172A]">{PERSONAL_INFO.name} &lt;{PERSONAL_INFO.email}&gt;</strong>
                      </div>
                      <div>
                        <span className="text-[#64748B] w-28 inline-block">Subject:</span>
                        <span className="font-semibold text-[#0D766E]">
                          [Recruiter Inquiry] {submittedInquiry.role} at {submittedInquiry.company} - {submittedInquiry.name}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#F1F5F9]">
                        <div>
                          <span className="text-[#64748B] block">Recruiter / HR Name:</span>
                          <strong className="text-[#0F172A]">{submittedInquiry.name}</strong>
                        </div>
                        <div>
                          <span className="text-[#64748B] block">Company / Org:</span>
                          <strong className="text-[#0F172A]">{submittedInquiry.company}</strong>
                        </div>
                        <div>
                          <span className="text-[#64748B] block">Work Email:</span>
                          <strong className="text-[#0F172A]">{submittedInquiry.email}</strong>
                        </div>
                        <div>
                          <span className="text-[#64748B] block">Mobile / WhatsApp:</span>
                          <strong className="text-[#0F172A]">{submittedInquiry.phone}</strong>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#F1F5F9]">
                        <span className="text-[#64748B] block mb-1">Message Body:</span>
                        <div className="bg-white p-3 rounded-lg border border-[#E2E8F0] text-[#1E293B] whitespace-pre-wrap leading-relaxed">
                          {submittedInquiry.message}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Immediate 1-Click Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <button
                      onClick={handleOpenWebGmail}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#EA4335] hover:bg-[#D93025] shadow-xs transition-colors"
                      title="Open directly in browser Gmail"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Browser Gmail</span>
                    </button>

                    <button
                      onClick={handleOpenWhatsApp}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5B] shadow-xs transition-colors"
                      title="Send directly via WhatsApp"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleCopyFullInquiry}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#334155] bg-white border border-[#CBD5E1] hover:bg-[#F8FAFC] transition-colors"
                    >
                      {copiedMessage ? <Check className="w-3.5 h-3.5 text-[#059669]" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedMessage ? 'Copied to Clipboard!' : 'Copy Full Details'}</span>
                    </button>

                    <button
                      onClick={() => setSubmittedInquiry(null)}
                      className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-medium text-[#64748B] hover:text-[#0F172A] transition-colors ml-auto"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Edit / Send Another</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Form with Email & Mobile fields */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  {/* Recruiter Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="recruiter-name-input" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                        Your Name (HR / Hiring Manager) <span className="text-[#EF4444]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="recruiter-name-input"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] min-h-[44px]"
                        />
                        <User className="w-4 h-4 text-[#94A3B8] absolute left-2.5 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="recruiter-company-input" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                        Company / Organization <span className="text-[#EF4444]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="recruiter-company-input"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. Stripe, Amazon, Google"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] min-h-[44px]"
                        />
                        <Building className="w-4 h-4 text-[#94A3B8] absolute left-2.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Recruiter Email & Mobile Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="recruiter-email-input" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                        Your Work Email Address <span className="text-[#EF4444]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="recruiter-email-input"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. sarah.jenkins@company.com"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] min-h-[44px]"
                        />
                        <Mail className="w-4 h-4 text-[#94A3B8] absolute left-2.5 top-3.5" />
                      </div>
                      <span className="text-[10px] text-[#64748B] mt-1 block">Umashankar will reply directly to this email</span>
                    </div>

                    <div>
                      <label htmlFor="recruiter-phone-input" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                        Mobile / WhatsApp Number <span className="text-[#EF4444]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="recruiter-phone-input"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210 or +1 (415) 555-0192"
                          className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] min-h-[44px]"
                        />
                        <Phone className="w-4 h-4 text-[#94A3B8] absolute left-2.5 top-3.5" />
                      </div>
                      <span className="text-[10px] text-[#64748B] mt-1 block">For interview scheduling and WhatsApp sync</span>
                    </div>
                  </div>

                  {/* Target Position */}
                  <div>
                    <label htmlFor="recruiter-role-select" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                      Target Position Under Discussion
                    </label>
                    <select
                      id="recruiter-role-select"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] min-h-[44px]"
                    >
                      <option value="Lead SDET (Team Mentorship & QA Sign-Off)">Lead SDET (Team Mentorship & QA Sign-Off)</option>
                      <option value="Senior SDET - GenAI & RAG Testing">Senior SDET - GenAI & RAG Testing (OneDesk AI focus)</option>
                      <option value="QA Automation Architect / Staff SDET">QA Automation Architect / Staff SDET</option>
                      <option value="Senior Automation Engineer">Senior Automation Engineer</option>
                      <option value="Consulting / Advisory Discussion">Consulting / Advisory Discussion</option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label htmlFor="recruiter-message-textarea" className="block font-semibold text-[#334155] mb-1.5 cursor-pointer">
                      Your Message or Role Scope <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      id="recruiter-message-textarea"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Umashankar, we reviewed your OneDesk AI project and 5+ years test leadership experience. We would like to schedule a 30-minute introductory discussion for our team..."
                      className="w-full px-3 py-2.5 bg-white border border-[#CBD5E1] rounded-lg focus:outline-none focus:border-[#0D766E] focus:ring-1 focus:ring-[#0D766E] text-base sm:text-xs text-[#0F172A] leading-relaxed min-h-[100px]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-xs font-bold text-white bg-[#0D766E] hover:bg-[#115E59] shadow-sm hover:shadow transition-all min-h-[44px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to Umashankar</span>
                    </button>
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                      <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0"></span>
                      <span>Opens prefilled draft to umashankar.sdet@gmail.com</span>
                    </div>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
