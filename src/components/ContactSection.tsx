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
  Phone
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
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: 'Lead SDET',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending email via mailto fallback
    const subject = encodeURIComponent(`Lead SDET Opportunity - ${formData.company || 'Hiring Inquiry'}`);
    const body = encodeURIComponent(
      `Hi Umashankar,\n\nI reviewed your portfolio and resume for the ${formData.role} role.\n\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 bg-[#FBFBF9] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-3">
                <Mail className="w-3.5 h-3.5 text-[#059669]" />
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                Let&apos;s Connect for Lead SDET Roles
              </h2>
              <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                I am actively interviewing with engineering teams looking for a Lead SDET to elevate framework stability, 
                mentor automation engineers, and evaluate GenAI/LLM pipelines.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F0FDFA] text-[#0D766E] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">Email Address</div>
                    <div className="text-sm font-bold text-[#111827]">{PERSONAL_INFO.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563]"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#059669]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#6B7280]">LinkedIn Profile</div>
                    <div className="text-sm font-bold text-[#111827]">Umashankar Pandey (SDET)</div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563]"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Location Card */}
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Location & Mobility</div>
                  <div className="text-sm font-bold text-[#111827]">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            {/* Quick Resume Actions */}
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0D766E] hover:bg-[#115E59]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open 2-Page Resume</span>
              </button>

              <button
                onClick={onPrintResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold text-[#374151] bg-white border border-[#D1D5DB] hover:bg-[#F9FAFB]"
              >
                <span>Print PDF Copy</span>
              </button>
            </div>
          </div>

          {/* Right Column: Quick Recruiter Outreach Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-[#0D766E]" />
                <h3 className="text-base font-bold text-[#111827]">
                  Send a Direct Interview Inquiry or Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Jane Smith (Engineering Manager)"
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#0D766E] text-xs"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-[#374151] mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g., Stripe, Amazon, Flipkart"
                      className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#0D766E] text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-[#374151] mb-1">Target Position</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#0D766E] text-xs"
                  >
                    <option value="Lead SDET">Lead SDET (Team Mentorship & QA Sign-Off)</option>
                    <option value="Senior SDET - GenAI Testing">Senior SDET - GenAI & RAG Testing</option>
                    <option value="QA Automation Architect">QA Automation Architect / Staff SDET</option>
                    <option value="Senior Automation Engineer">Senior Automation Engineer</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-[#374151] mb-1">Your Message or Role Scope</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="We loved your OneDesk AI work and leadership experience. We'd like to schedule a 30-minute introductory conversation..."
                    className="w-full px-3 py-2 bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#0D766E] text-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#0D766E] hover:bg-[#115E59] shadow-xs transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message to Umashankar</span>
                  </button>
                  <span className="text-[11px] text-[#6B7280]">
                    Direct mailto integration
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
