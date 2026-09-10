import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink, 
  Server, 
  ShieldCheck, 
  ArrowRight,
  Share2,
  DollarSign,
  HelpCircle
} from 'lucide-react';
import { DOMAIN_AND_HOSTING_STEPS, PERSONAL_INFO } from '../data/resumeData';

interface DomainHostingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainHostingGuideModal: React.FC<DomainHostingGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copiedRecord, setCopiedRecord] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRecord(id);
    setTimeout(() => setCopiedRecord(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print">
      <div 
        className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl border border-[#E5E7EB] max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="bg-[#F0FDFA] px-6 py-5 border-b border-[#99F6E4] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0D766E] text-white flex items-center justify-center shadow-xs">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#111827]">
                Connect Your Domain: umashankar-sdet.com
              </h3>
              <p className="text-xs text-[#0F766E] font-medium">
                Step-by-step instructions for BigRock & free hosting setup
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6B7280] hover:text-[#111827] hover:bg-white/80"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 bg-[#FAFAFA]">
          
          {/* Executive Overview Box */}
          <div className="bg-white rounded-xl border border-[#A7F3D0] p-5 shadow-xs bg-gradient-to-r from-white to-[#ECFDF5]">
            <div className="flex items-center gap-2 text-[#047857] font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 text-[#059669]" />
              <span>Great Job! umashankar-sdet.com is successfully purchased on BigRock!</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#374151] leading-relaxed">
              Your domain matches your professional email <strong className="text-[#111827]">umashankar.sdet@gmail.com</strong>.
              Now follow the two simple steps below to deploy the website for <strong>$0/month</strong> and connect your BigRock domain so it goes live!
            </p>
          </div>

          {/* Step 1: Deploy for Free on Vercel */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0D766E] text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Deploy Your Code to Free Hosting (Vercel)
              </h4>
            </div>

            <p className="text-xs text-[#4B5563] leading-relaxed">
              Vercel provides free global hosting with unlimited SSL certificates and 0 server fees for personal developer portfolios.
            </p>

            <div className="bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0] space-y-2.5 text-xs text-[#334155]">
              <div className="font-bold text-[#0F172A] flex items-center gap-2">
                <Server className="w-4 h-4 text-[#3B82F6]" />
                How to deploy in 2 minutes:
              </div>
              <ol className="list-decimal pl-5 space-y-1.5 leading-relaxed">
                <li>In Google AI Studio (top right menu), click <strong>Export</strong> → <strong>GitHub</strong> (or download as ZIP and push to GitHub).</li>
                <li>Go to <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-[#2563EB] underline font-semibold">vercel.com</a> and sign in with your GitHub account.</li>
                <li>Click <strong>&quot;Add New Project&quot;</strong> and select your repository.</li>
                <li>Vercel automatically detects <code>Vite</code>. Leave all default settings as is.</li>
                <li>Click <strong>Deploy</strong>. Your site is built and live in ~30 seconds!</li>
              </ol>
            </div>
          </div>

          {/* Step 2: Configure BigRock DNS */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0D766E] text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Add 2 DNS Records in BigRock for umashankar-sdet.com
              </h4>
            </div>

            <div className="text-xs text-[#4B5563] leading-relaxed space-y-1.5">
              <p>In your BigRock account (shown in your screenshot):</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Click <strong>&quot;ORDERS&quot;</strong> or <strong>&quot;DOMAIN SPECIFIC&quot;</strong> in the left sidebar.</li>
                <li>Click on <strong>umashankar-sdet.com</strong> to open its management page.</li>
                <li>Scroll down to the <strong>&quot;DNS Management&quot;</strong> panel and click <strong>&quot;Manage DNS&quot;</strong>.</li>
                <li>Add these two standard records:</li>
              </ol>
            </div>

            <div className="space-y-3 pt-1">
              {/* A Record */}
              <div className="bg-[#1E232A] text-white p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <div>
                  <span className="text-[#9CA3AF]">Record Type:</span> <span className="text-[#FACC15] font-bold">A</span> |{' '}
                  <span className="text-[#9CA3AF]">Host Name:</span> <span className="text-white font-bold">@ (or leave blank)</span><br className="sm:hidden" />
                  <span className="text-[#9CA3AF] sm:ml-2">Points to (Destination IPv4):</span>{' '}
                  <span className="text-[#34D399] font-bold">76.76.21.21</span>
                </div>
                <button
                  onClick={() => copyToClipboard('76.76.21.21', 'a-record')}
                  className="p-1.5 rounded bg-[#374151] hover:bg-[#4B5563] text-xs flex items-center justify-center gap-1 self-start sm:self-auto"
                >
                  {copiedRecord === 'a-record' ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copiedRecord === 'a-record' ? 'Copied' : 'Copy IP'}</span>
                </button>
              </div>

              {/* CNAME Record */}
              <div className="bg-[#1E232A] text-white p-3.5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                <div>
                  <span className="text-[#9CA3AF]">Record Type:</span> <span className="text-[#FACC15] font-bold">CNAME</span> |{' '}
                  <span className="text-[#9CA3AF]">Host Name:</span> <span className="text-white font-bold">www</span><br className="sm:hidden" />
                  <span className="text-[#9CA3AF] sm:ml-2">Points to (Value):</span>{' '}
                  <span className="text-[#38BDF8] font-bold">cname.vercel-dns.com</span>
                </div>
                <button
                  onClick={() => copyToClipboard('cname.vercel-dns.com', 'cname-record')}
                  className="p-1.5 rounded bg-[#374151] hover:bg-[#4B5563] text-xs flex items-center justify-center gap-1 self-start sm:self-auto"
                >
                  {copiedRecord === 'cname-record' ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px]">{copiedRecord === 'cname-record' ? 'Copied' : 'Copy CNAME'}</span>
                </button>
              </div>
            </div>

            <p className="text-[11px] text-[#059669] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Free SSL certificate (https://umashankar-sdet.com) is automatically issued within 2–5 minutes.</span>
            </p>
          </div>

          {/* Step 3: Where to Share Your Link */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#0D766E] text-white flex items-center justify-center text-xs font-bold">
                3
              </div>
              <h4 className="text-base font-bold text-[#111827]">
                Where to Share umashankar-sdet.com
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                <div className="font-bold text-[#111827]">1. On Your 2-Page Resume</div>
                <p className="text-[#6B7280] mt-1">
                  Header link: <em>https://umashankar-sdet.com</em>
                </p>
              </div>

              <div className="p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                <div className="font-bold text-[#111827]">2. On LinkedIn Profile</div>
                <p className="text-[#6B7280] mt-1">
                  In your headline & featured section: <em>Lead SDET | Live Portfolio ↗</em>
                </p>
              </div>

              <div className="p-3 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                <div className="font-bold text-[#111827]">3. In Job Applications</div>
                <p className="text-[#6B7280] mt-1">
                  In the &quot;Website / Portfolio&quot; field on Greenhouse & Lever.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#FBFBF9] px-6 py-4 border-t border-[#E5E7EB] flex items-center justify-between">
          <div className="text-xs text-[#6B7280]">
            Total cost to launch: <strong className="text-[#111827]">~$10/year</strong> (domain only; hosting is free).
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-bold bg-[#0D766E] text-white hover:bg-[#115E59]"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
