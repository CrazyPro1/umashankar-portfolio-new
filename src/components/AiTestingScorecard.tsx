import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Cpu,
  Layers,
  Search,
  ExternalLink
} from 'lucide-react';
import { ATS_SCORE_DATA, ATS_KEYWORDS } from '../data/resumeData';

export const AiTestingScorecard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Keywords' },
    { id: 'GenAI & LLM Testing', label: 'GenAI & LLM Testing' },
    { id: 'Leadership & Ownership', label: 'Leadership & Ownership' },
    { id: 'Automation & Frameworks', label: 'Automation & Frameworks' },
    { id: 'CI/CD & Infrastructure', label: 'CI/CD & DevOps' },
  ];

  const filteredKeywords = ATS_KEYWORDS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.relevanceExplanation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="ai-testing" className="py-16 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#059669]" />
            AI Keywords & Resume Rating Assessment
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            How This Resume Rates for Modern SDET & AI Roles
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            In today&apos;s market, Tier-1 tech firms (including Amazon&apos;s Rufus GenAI team, Google, and Microsoft) prioritize 
            SDETs who combine <strong className="text-[#111827]">test framework leadership</strong> with <strong className="text-[#111827]">GenAI response validation</strong>.
            Here is the comprehensive evaluation and keyword breakdown built into Umashankar&apos;s resume.
          </p>
        </div>

        {/* Score Breakdown Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Rating Card */}
          <div className="bg-[#FBFBF9] rounded-xl border border-[#E5E7EB] p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">Editorial Assessment</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1]">Verified</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#111827]">{ATS_SCORE_DATA.overallScore}</span>
                <span className="text-xl font-medium text-[#6B7280]">/ 10</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-[#0D766E]">
                Exceptional Lead SDET Positioning
              </p>
              <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                {ATS_SCORE_DATA.reviewSummary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[11px] text-[#6B7280] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
              <span>Evidence-backed: Mentoring 4 engineers + QA release sign-off.</span>
            </div>
          </div>

          {/* ATS Keyword Match Percentage */}
          <div className="bg-[#FBFBF9] rounded-xl border border-[#E5E7EB] p-6 relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">ATS Keyword Match</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#047857]">Top 2% Candidate</span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-[#0D766E]">{ATS_SCORE_DATA.atsMatchPercentage}%</span>
                <span className="text-sm font-medium text-[#6B7280]">Keyword Coverage</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-[#111827]">
                Tuned for Amazon, Google, Meta & High-Growth AI Startups
              </p>
              <p className="mt-2 text-xs text-[#4B5563] leading-relaxed">
                Includes specific industry terminology: GenAI response validation, prompt evaluation, retrieval accuracy, RAG chunking, and Testcontainers.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[11px] text-[#6B7280] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0D766E] shrink-0" />
              <span>Matches current Job Descriptions for AI SDET & Lead QA.</span>
            </div>
          </div>

          {/* Next Level Advancements */}
          <div className="bg-[#FBFBF9] rounded-xl border border-[#E5E7EB] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">AI SDET Key Competencies</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309]">Crucial Edge</span>
              </div>
              <h4 className="mt-3 text-sm font-bold text-[#111827]">
                What Sets Umashankar Apart
              </h4>
              <ul className="mt-2.5 space-y-2 text-xs text-[#4B5563]">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#0D766E] font-bold">•</span>
                  <span><strong>AI Quality vs AI Usage:</strong> Not just using ChatGPT to write tests, but architecting tests <em>for</em> AI products (OneDesk AI).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#0D766E] font-bold">•</span>
                  <span><strong>Deterministic Gates for Non-Deterministic Models:</strong> Testing cosine similarity, BLEU scores, and prompt regressions.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#0D766E] font-bold">•</span>
                  <span><strong>True Technical Leadership:</strong> 4 engineers mentored, 14 microservices sign-off, zero critical escapes.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-[11px] text-[#6B7280]">
              <span>Ready for Lead SDET technical rounds and system design interviews.</span>
            </div>
          </div>

        </div>

        {/* Evaluation Sub-Scores */}
        <div className="mt-8 bg-[#FBFBF9] rounded-xl border border-[#E5E7EB] p-6">
          <h3 className="text-sm font-bold text-[#111827] uppercase tracking-wider mb-4">
            Rubric Breakdown for Lead SDET Evaluation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ATS_SCORE_DATA.evaluatedCriteria.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#111827]">{item.name}</span>
                  <span className="text-xs font-extrabold text-[#0D766E]">{item.score}/{item.max}</span>
                </div>
                <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden mb-2">
                  <div 
                    className="bg-[#0D766E] h-full rounded-full transition-all duration-500"
                    style={{ width: `${(item.score / item.max) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-[#6B7280] leading-snug">{item.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Keywords Matrix */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
            <div>
              <h3 className="text-lg font-bold text-[#111827]">
                ATS Keywords & Search Optimization Matrix
              </h3>
              <p className="text-xs text-[#6B7280] mt-0.5">
                Exact terms embedded in Umashankar&apos;s resume and project descriptions that trigger recruiter search filters.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search keywords..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#D1D5DB] rounded-lg focus:outline-none focus:border-[#0D766E]"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0D766E] text-white shadow-2xs'
                    : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Keywords Grid */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredKeywords.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#FAFAFA] hover:bg-white p-3.5 rounded-lg border border-[#E5E7EB] hover:border-[#99F6E4] transition-all hover:shadow-2xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
                    {item.category === 'GenAI & LLM Testing' && (
                      <Sparkles className="w-3.5 h-3.5 text-[#0D766E] shrink-0" />
                    )}
                    {item.category === 'Leadership & Ownership' && (
                      <ShieldCheck className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                    )}
                    {item.category === 'Automation & Frameworks' && (
                      <Cpu className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                    )}
                    {item.category === 'CI/CD & Infrastructure' && (
                      <Layers className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    )}
                    <span>{item.keyword}</span>
                  </h4>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase shrink-0 ${
                    item.importance === 'Critical' 
                      ? 'bg-[#FEE2E2] text-[#B91C1C]' 
                      : 'bg-[#ECFDF5] text-[#047857]'
                  }`}>
                    {item.importance}
                  </span>
                </div>
                
                <p className="mt-2 text-[11px] text-[#4B5563] leading-relaxed">
                  {item.relevanceExplanation}
                </p>

                <div className="mt-2.5 pt-2 border-t border-[#F3F4F6] flex items-center justify-between text-[10px] text-[#6B7280]">
                  <span className="font-medium">{item.category}</span>
                  <span className="font-semibold text-[#0D766E]">Mentioned {item.countInResume}x in resume</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
