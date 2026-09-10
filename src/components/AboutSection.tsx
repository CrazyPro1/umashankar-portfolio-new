import React from 'react';
import { 
  Users, 
  ShieldCheck, 
  Code2, 
  GitPullRequest, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Subtle ambient tech glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none -mr-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] mb-3">
              <Users className="w-3.5 h-3.5 text-[#0D766E]" />
              Leadership & Technical Ownership
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
              Leading Engineering Quality from First Line of Code to Production Sign-Off
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#4B5563] leading-relaxed">
              <p>
                Over the past <strong className="text-[#111827]">5+ years</strong>, I have transitioned from writing individual UI and API automation test scripts to 
                architecting resilient quality infrastructure, driving testing standards across engineering squads, and taking 
                <strong className="text-[#111827]"> full ownership of production release sign-offs</strong>.
              </p>
              
              <p>
                As an SDET leader, I operate on the belief that quality cannot be tested in at the end of a sprint—it must be engineered from inception. 
                I directly <strong className="text-[#111827]">mentor a squad of 4 SDET engineers</strong>, guiding them on automation design patterns, clean code principles, 
                and anti-flakiness practices. Through standardized code reviews on over 120 PRs quarterly, we eliminated fragile XPath selectors, replaced arbitrary sleep delays 
                with deterministic polling conditions, and slashed automation test flakiness to below 0.8%.
              </p>

              <p>
                When generative AI became a focal capability of our internal products through <strong className="text-[#111827]">OneDesk AI</strong>, I stepped up to architect 
                the automated evaluation framework. Bridging Spring AI, pgvector embeddings, and Testcontainers, I designed deterministic test harnesses for 
                non-deterministic LLM responses—validating context chunk retrieval accuracy, groundedness scores, and prompt injection defense barriers.
              </p>
            </div>

            {/* Core Leadership Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <div className="w-8 h-8 rounded-lg bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold mb-3">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#111827]">Mentorship & Team Growth</h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                  Run weekly 1-on-1s, framework pairing sessions, and upskilled 4 junior/mid QA engineers to write production-grade Java and Playwright code.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <div className="w-8 h-8 rounded-lg bg-[#FEF3C7] text-[#D97706] flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#111827]">Release Sign-Off Authority</h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                  Sole go/no-go sign-off decision maker for 14+ core microservices, resulting in zero P0/P1 production escapes over 18 consecutive months.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <div className="w-8 h-8 rounded-lg bg-[#F0FDFA] text-[#0D766E] flex items-center justify-center font-bold mb-3">
                  <GitPullRequest className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#111827]">Automation Code Reviews</h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                  Established rigorous PR checklists for test code: enforced Page Object encapsulation, DRY test data factories, and zero flaky sleeps.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E7EB]">
                <div className="w-8 h-8 rounded-lg bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#111827]">GenAI System Evaluation</h3>
                <p className="mt-1 text-xs text-[#6B7280] leading-relaxed">
                  Built automated RAG evaluation test suites testing retrieval recall, cosine similarity thresholds (&gt;0.85), and prompt regression.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Leadership Statistics & Verification */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Leadership Verification Card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-xs">
              <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0D766E]" />
                Lead SDET Verification Metrics
              </h3>

              <div className="mt-5 space-y-4">
                <div className="border-l-2 border-[#0D766E] pl-3">
                  <div className="text-xs text-[#6B7280]">Team Size Mentored</div>
                  <div className="text-lg font-bold text-[#111827]">4 SDET Engineers</div>
                  <div className="text-xs text-[#4B5563] mt-0.5">Automated framework onboarding, PR reviews, career coaching.</div>
                </div>

                <div className="border-l-2 border-[#059669] pl-3">
                  <div className="text-xs text-[#6B7280]">Production Escape Rate</div>
                  <div className="text-lg font-bold text-[#059669]">0 Critical / P0 Escapes</div>
                  <div className="text-xs text-[#4B5563] mt-0.5">Across 18 months and 140+ staged microservice releases.</div>
                </div>

                <div className="border-l-2 border-[#D97706] pl-3">
                  <div className="text-xs text-[#6B7280]">Test Cycle Acceleration</div>
                  <div className="text-lg font-bold text-[#111827]">4.2h → 45 mins (-65%)</div>
                  <div className="text-xs text-[#4B5563] mt-0.5">Parallel Dockerized test runner + API state pre-seeding.</div>
                </div>

                <div className="border-l-2 border-[#7C3AED] pl-3">
                  <div className="text-xs text-[#6B7280]">Test Flakiness Reduction</div>
                  <div className="text-lg font-bold text-[#7C3AED]">35% down to &lt;0.8%</div>
                  <div className="text-xs text-[#4B5563] mt-0.5">Eliminated static sleeps via dynamic condition listeners.</div>
                </div>
              </div>
            </div>

            {/* Code Review Checklist Preview */}
            <div className="bg-[#1E232A] rounded-xl p-5 text-white font-mono text-xs shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[#374151] mb-3">
                <span className="text-[#9CA3AF] flex items-center gap-1.5 font-semibold">
                  <Code2 className="w-3.5 h-3.5 text-[#10B981]" />
                  PR Checklist Enforced by Umashankar
                </span>
                <span className="text-[10px] text-[#10B981] bg-[#064E3B] px-1.5 py-0.5 rounded">
                  Lead Gate
                </span>
              </div>
              <ul className="space-y-2 text-[#D1D5DB]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>No Thread.sleep() or hardcoded waits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>API state pre-seeding used for UI prerequisites</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Testcontainers for isolated integration tests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>Page Object encapsulation (Zero locator leaks)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                  <span>AssertJ fluent assertions with failure messages</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
