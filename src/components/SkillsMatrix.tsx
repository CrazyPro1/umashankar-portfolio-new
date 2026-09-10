import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Cpu, 
  Check, 
  Layers 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#0D766E]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#3B82F6]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#059669]" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#7C3AED]" />;
      default:
        return <Layers className="w-4 h-4 text-[#0D766E]" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-[#FBFBF9] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#0D766E]" />
            Technical & Leadership Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            Balanced expertise across cutting-edge GenAI validation, enterprise automation frameworks, 
            team leadership, and CI/CD quality gates.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2 border-b border-[#E5E7EB]">
          {SKILL_CATEGORIES.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === idx
                  ? 'bg-[#0D766E] text-white shadow-xs'
                  : 'bg-white text-[#4B5563] hover:bg-[#F3F4F6] border border-[#E5E7EB]'
              }`}
            >
              {getIcon(category.iconName)}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="mt-6 bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2">
              {getIcon(SKILL_CATEGORIES[activeTab].iconName)}
              <span>{SKILL_CATEGORIES[activeTab].title}</span>
            </h3>
            <p className="text-xs text-[#6B7280] mt-1">
              {SKILL_CATEGORIES[activeTab].description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all ${
                  skill.isAiKeyword
                    ? 'bg-[#F0FDFA]/60 border-[#99F6E4] hover:bg-[#F0FDFA]'
                    : 'bg-[#F9FAFB] border-[#E5E7EB] hover:bg-white'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold text-xs sm:text-sm text-[#111827] flex items-center gap-1.5">
                    {skill.isAiKeyword && (
                      <Sparkles className="w-3.5 h-3.5 text-[#0D766E] shrink-0" />
                    )}
                    <span>{skill.name}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                      skill.level === 'Expert'
                        ? 'bg-[#ECFDF5] text-[#047857]'
                        : 'bg-[#EFF6FF] text-[#1D4ED8]'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                {skill.tags && (
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {skill.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white text-[#4B5563] border border-[#E5E7EB]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
