import React from 'react';

export const ProjectsSection: React.FC = () => {
  const caseStudies = [
    {
      title: "Evaluating a RAG pipeline that doesn't give the same answer twice",
      impactNum: "OneDesk AI",
      impactLabel: "GenAI evaluation framework",
      problem: "OneDesk AI's retrieval-augmented pipeline had no repeatable way to catch regressions — a prompt or model change could silently degrade answer quality with nothing in CI to flag it.",
      approach: "Built an evaluation layer scoring chunking recall and cosine similarity for retrieval, plus groundedness and hallucination-rate checks for generated output, run against Gemini and Qwen via Spring AI and gated in CI as a prompt-regression suite.",
      impact: "Gave the team a deterministic gate for a non-deterministic system — regressions in retrieval or output quality now fail the build instead of shipping quietly."
    },
    {
      title: "Cutting the CI/CD regression cycle by 65%",
      impactNum: "65%",
      impactLabel: "faster regression cycle",
      problem: "The existing Playwright/Selenium suite ran sequentially, making regression the slowest step in every release and forcing releases onto a fixed, infrequent schedule.",
      approach: "Re-architected the suite around parallelized execution using Testcontainers for isolated, reproducible environments, and wired it into CI as a merge-blocking gate.",
      impact: "Regression cycle time dropped 65%, and release cadence stopped being bottlenecked by test runtime."
    },
    {
      title: "Zero high-severity escapes across 14+ services",
      impactNum: "0",
      impactLabel: "high-severity production escapes",
      problem: "As sole QA sign-off for 14+ core production microservices, any gap in release governance would surface directly as a production incident.",
      approach: "Instituted structured release sign-off criteria, mandatory automation PR review, and risk-based test prioritization so sign-off decisions were evidence-based rather than a rubber stamp.",
      impact: "Zero high-severity escapes to date across all 14+ services under that governance process over 18 consecutive months."
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#12171f]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-11 flex-wrap">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
            Case studies
          </h2>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">05</span>
        </div>

        {/* Case Studies List */}
        <div className="flex flex-col">
          {caseStudies.map((cs, idx) => (
            <div 
              key={idx}
              className="py-10 first:pt-0 border-t first:border-t-0 border-[rgba(232,236,239,0.12)] grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-6 lg:gap-11"
            >
              {/* Left Title & Impact Num */}
              <div>
                <h3 className="text-[1.28rem] font-semibold text-[#e8ecef] leading-snug max-w-[20ch]">
                  {cs.title}
                </h3>
                <div className="mt-4 font-mono text-[#e3a857] text-2xl font-medium">
                  {cs.impactNum}
                </div>
                <div className="text-[0.83rem] text-[#6b7683] mt-0.5">
                  {cs.impactLabel}
                </div>
              </div>

              {/* Right Problem, Approach, Impact */}
              <div className="space-y-4">
                <div>
                  <div className="text-[0.76rem] text-[#6b7683] font-mono mb-1.5 uppercase tracking-wider">
                    Problem
                  </div>
                  <p className="m-0 text-[#9ba7b4] text-[0.96rem] leading-relaxed max-w-[66ch]">
                    {cs.problem}
                  </p>
                </div>

                <div>
                  <div className="text-[0.76rem] text-[#6b7683] font-mono mb-1.5 uppercase tracking-wider">
                    Approach
                  </div>
                  <p className="m-0 text-[#9ba7b4] text-[0.96rem] leading-relaxed max-w-[66ch]">
                    {cs.approach}
                  </p>
                </div>

                <div>
                  <div className="text-[0.76rem] text-[#6b7683] font-mono mb-1.5 uppercase tracking-wider">
                    Impact
                  </div>
                  <p className="m-0 text-[#9ba7b4] text-[0.96rem] leading-relaxed max-w-[66ch]">
                    {cs.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
