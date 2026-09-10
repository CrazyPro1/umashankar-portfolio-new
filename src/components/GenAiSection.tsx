import React from 'react';

export const GenAiSection: React.FC = () => {
  const metrics = [
    { name: 'Retrieval quality', val: 'chunking recall, cosine similarity' },
    { name: 'Output fidelity', val: 'groundedness & hallucination scoring' },
    { name: 'Regression control', val: 'prompt regression suite, gated in CI' },
    { name: 'Models under test', val: 'Gemini, Qwen via Spring AI' },
    { name: 'Infra', val: 'pgvector, Testcontainers, Docker' },
  ];

  return (
    <section id="genai" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#1b222c]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-11 flex-wrap">
          <div className="flex items-center gap-3">
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
              AI &amp; GenAI testing
            </h2>
            <span className="font-mono text-[0.76rem] text-[#e3a857] border border-[#b98a46] px-2 py-0.5 rounded-[2px]">
              OneDesk AI
            </span>
          </div>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">02</span>
        </div>

        {/* GenAI Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#e8ecef] leading-snug">
              Testing a RAG pipeline isn't the same job as testing a form submission.
            </h3>
            <p className="text-[1.02rem] text-[#9ba7b4] leading-[1.68]">
              On OneDesk AI, I built the evaluation layer for a retrieval-augmented generation system —
              treating groundedness and hallucination rate as measurable, gate-able metrics instead of
              something QA "eyeballs" during review.
            </p>
          </div>

          {/* Right Metric List */}
          <div className="lg:col-span-7 flex flex-col">
            {metrics.map((m, idx) => (
              <div 
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-baseline justify-between py-4 border-t border-[rgba(232,236,239,0.12)] gap-2 sm:gap-6 ${
                  idx === metrics.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="text-[0.96rem] text-[#e8ecef] font-medium">
                  {m.name}
                </span>
                <span className="font-mono text-[#e3a857] text-[0.92rem]">
                  {m.val}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
