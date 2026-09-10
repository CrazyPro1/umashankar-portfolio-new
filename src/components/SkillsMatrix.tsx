import React from 'react';

export const SkillsMatrix: React.FC = () => {
  const skillCategories = [
    {
      title: 'Automation frameworks',
      skills: ['Playwright', 'Selenium', 'RestAssured', 'Testcontainers', 'Cypress'],
    },
    {
      title: 'Languages',
      skills: ['Java 17', 'Python', 'TypeScript', 'SQL'],
    },
    {
      title: 'CI/CD & infrastructure',
      skills: ['Docker', 'Jenkins', 'GitHub Actions', 'Linux'],
    },
    {
      title: 'GenAI / RAG evaluation',
      skills: ['Spring AI', 'pgvector', 'Gemini', 'Qwen', 'Prompt regression'],
    },
    {
      title: 'Test management',
      skills: ['Jira', 'TestRail', 'Grafana', 'Allure Reports'],
    },
    {
      title: 'Leadership',
      skills: ['PR review', 'Mentoring (4 Eng)', 'Release sign-off', 'Risk reporting'],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#1b222c]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-11 flex-wrap">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
            Skills
          </h2>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">04</span>
        </div>

        {/* Matrix Grid: 3 Columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(232,236,239,0.12)] border border-[rgba(232,236,239,0.12)]">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#12171f] p-6 sm:p-7">
              <h3 className="text-[0.92rem] text-[#9ba7b4] font-medium mb-3.5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-[0.8rem] text-[#e8ecef] border border-[rgba(232,236,239,0.22)] px-2.5 py-1 rounded-[2px] hover:border-[#e3a857] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
