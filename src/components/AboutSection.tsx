import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#12171f]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-11 flex-wrap">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
            About &amp; leadership
          </h2>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">01</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[1.02rem] text-[#9ba7b4] leading-[1.68]">
            <p>
              I've spent the last five years moving quality earlier in the pipeline and further up the
              org chart — from writing tests to owning release sign-off across 14+ production
              microservices, with zero high-severity escapes on my watch. Along the way I've mentored
              four engineers, run automation PR reviews, and set the standards other people's tests get
              written against.
            </p>
            <p>
              <strong className="text-[#e8ecef] font-semibold">What I'm looking for next</strong> is a Lead SDET role where quality strategy is
              owned end-to-end — hiring and growing SDETs, setting architecture standards, and reporting
              risk to stakeholders in terms they act on, not just test counts.
            </p>
          </div>

          {/* Right Principles */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="border-l-2 border-[#b98a46] pl-4">
              <h3 className="text-[0.96rem] font-semibold text-[#e8ecef] mb-1.5">
                Sign-off is a responsibility, not a formality
              </h3>
              <p className="text-[0.9rem] text-[#9ba7b4] leading-relaxed">
                Sole QA gatekeeper for 14+ core production microservices with zero high-severity escapes — that record is the actual credential.
              </p>
            </div>

            <div className="border-l-2 border-[#b98a46] pl-4">
              <h3 className="text-[0.96rem] font-semibold text-[#e8ecef] mb-1.5">
                Mentorship compounds faster than any one test suite
              </h3>
              <p className="text-[0.9rem] text-[#9ba7b4] leading-relaxed">
                Reviewing automation PRs and upholding test architecture across 4 engineers scales quality further than writing every test myself.
              </p>
            </div>

            <div className="border-l-2 border-[#b98a46] pl-4">
              <h3 className="text-[0.96rem] font-semibold text-[#e8ecef] mb-1.5">
                AI features still need deterministic gates
              </h3>
              <p className="text-[0.9rem] text-[#9ba7b4] leading-relaxed">
                A non-deterministic model doesn't get a pass on quality bars — it gets different ones, and someone has to define them.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
