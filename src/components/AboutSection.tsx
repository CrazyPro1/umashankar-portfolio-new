import React from 'react';
import { ShieldCheck, Users, Cpu, Globe2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, LANGUAGES } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 border-t border-[rgba(232,236,239,0.12)] bg-[#12171f]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-12 flex-wrap">
          <div>
            <div className="flex items-center gap-2 text-[#e3a857] text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 / Executive Profile & Background</span>
            </div>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)] font-bold text-[#e8ecef] tracking-tight">
              About Me &amp; Engineering Leadership
            </h2>
          </div>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">5+ Years Experience</span>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Narrative: Detailed "Write About Me" Story */}
          <div className="lg:col-span-7 space-y-6 text-[1.02rem] text-[#9ba7b4] leading-[1.72]">
            <p>
              Hello! I'm <strong className="text-[#e8ecef] font-semibold">{PERSONAL_INFO.name}</strong>, a <span className="text-[#e3a857] font-medium">Senior SDET &amp; QA Release Gatekeeper</span> with over 5 years of specialized experience architecting scalable test automation frameworks and hardening mission-critical enterprise systems across FinTech, Banking, and Data Services.
            </p>

            <p>
              Over the course of my career—spanning high-growth FinTech at <strong className="text-[#e8ecef]">Freecharge (Axis Bank)</strong> and tier-one global consultancy at <strong className="text-[#e8ecef]">Nagarro</strong>—I have systematically transitioned from individual test script execution to owning complete engineering quality strategy. Today, I serve as the sole QA release sign-off authority across <span className="text-[#e8ecef] font-semibold">14+ core production microservices</span>, sustaining an unbroken record of <span className="text-[#34D399] font-medium">zero high-severity (P0/P1) defect escapes</span> over 18+ consecutive months under massive transaction volume.
            </p>

            <p>
              I specialize in modern backend test architectures using <strong className="text-[#e8ecef]">Java 21, Spring Boot, and REST Assured</strong>, paired with distributed execution via <strong className="text-[#e8ecef]">Docker, Kubernetes, and Jenkins</strong> that slashes regression cycle times by 40% to 65%. Beyond traditional automation, I have pioneered automated <strong className="text-[#e8ecef]">GenAI &amp; RAG quality harnesses</strong>—employing Spring AI, pgvector embeddings, and JUnit 5 + Testcontainers to deterministically validate semantic groundedness and eliminate hallucinations with cosine similarity thresholds.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-[rgba(227,168,87,0.06)] border border-[rgba(227,168,87,0.22)]">
              <h4 className="text-sm font-semibold text-[#e8ecef] flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#e3a857]" />
                What I Bring to a Lead SDET Role:
              </h4>
              <p className="text-[0.92rem] text-[#cad2db] leading-relaxed">
                I am actively seeking a <strong className="text-[#e3a857]">Lead SDET / Staff QA Architect</strong> role where I can steer end-to-end quality architecture, mentor and grow automation engineers, institute shift-left deterministic release gates, and communicate architectural risk in clear, business-critical terms to executive stakeholders.
              </p>
            </div>

            {/* Dedicated Languages Section (Requested by User) */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#e8ecef] mb-3">
                <Globe2 className="w-4 h-4 text-[#e3a857]" />
                <span>Languages Known &amp; Communication</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {LANGUAGES.map((lang) => (
                  <div 
                    key={lang.name}
                    className="p-4 rounded-xl bg-[#18202b] border border-[rgba(232,236,239,0.12)] hover:border-[rgba(227,168,87,0.3)] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-[0.95rem] text-[#e8ecef]">{lang.name}</span>
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-[3px] bg-[rgba(227,168,87,0.12)] text-[#e3a857] border border-[rgba(227,168,87,0.25)]">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-[0.84rem] text-[#9ba7b4] leading-relaxed">
                      {lang.proficiencyNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Principles & Key Metrics */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Principle 1 */}
            <div className="p-5 rounded-xl bg-[#161d27] border border-[rgba(232,236,239,0.1)] hover:border-[rgba(227,168,87,0.3)] transition-all">
              <div className="flex items-center gap-2.5 text-[#e3a857] mb-2 font-medium text-xs font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Release Accountability</span>
              </div>
              <h3 className="text-[0.98rem] font-semibold text-[#e8ecef] mb-2">
                Sign-off is a responsibility, not a formality
              </h3>
              <p className="text-[0.88rem] text-[#9ba7b4] leading-relaxed">
                Sole QA gatekeeper for 14+ core production microservices at Freecharge with zero high-severity escapes over 18+ months under FinTech payment volumes.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-5 rounded-xl bg-[#161d27] border border-[rgba(232,236,239,0.1)] hover:border-[rgba(227,168,87,0.3)] transition-all">
              <div className="flex items-center gap-2.5 text-[#e3a857] mb-2 font-medium text-xs font-mono uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Engineering Multiplier</span>
              </div>
              <h3 className="text-[0.98rem] font-semibold text-[#e8ecef] mb-2">
                Mentorship compounds faster than any single test suite
              </h3>
              <p className="text-[0.88rem] text-[#9ba7b4] leading-relaxed">
                Mentoring 4 engineers through paired programming, daily architectural reviews, and automation PR gatekeeping to build an enduring culture of quality.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-5 rounded-xl bg-[#161d27] border border-[rgba(232,236,239,0.1)] hover:border-[rgba(227,168,87,0.3)] transition-all">
              <div className="flex items-center gap-2.5 text-[#e3a857] mb-2 font-medium text-xs font-mono uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Modern Quality Engineering</span>
              </div>
              <h3 className="text-[0.98rem] font-semibold text-[#e8ecef] mb-2">
                AI features demand rigorous, deterministic gates
              </h3>
              <p className="text-[0.88rem] text-[#9ba7b4] leading-relaxed">
                Non-deterministic LLM and RAG features still require objective quality bars—measuring cosine similarity, groundedness, and prompt regression with automated test suites.
              </p>
            </div>

            {/* Quick Summary Card */}
            <div className="p-5 rounded-xl bg-[#18202c] border border-[rgba(227,168,87,0.25)] text-xs text-[#9ba7b4] space-y-2.5">
              <div className="text-[#e8ecef] font-semibold text-sm">Key Facts at a Glance:</div>
              <div className="flex items-center justify-between py-1 border-b border-[rgba(232,236,239,0.08)]">
                <span>Location:</span>
                <span className="text-[#e8ecef] font-mono">{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[rgba(232,236,239,0.08)]">
                <span>Work Preference:</span>
                <span className="text-[#34D399] font-medium">Remote &amp; Relocation Open</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-[rgba(232,236,239,0.08)]">
                <span>Languages:</span>
                <span className="text-[#e8ecef] font-medium">English (Fluent) &amp; Hindi (Native)</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>Direct Contact:</span>
                <a
                  href="https://api.whatsapp.com/send?phone=918299867994&text=Hi%20Umashankar,%20I%20reviewed%20your%20Lead%20SDET%20portfolio%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#34D399] hover:text-[#059669] font-medium inline-flex items-center gap-1 transition-colors"
                >
                  <span>Connect on WhatsApp</span>
                  <span className="text-[11px]">↗</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
