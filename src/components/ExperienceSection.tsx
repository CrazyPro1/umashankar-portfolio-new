import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-[rgba(232,236,239,0.12)] bg-[#12171f]">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-8">
        
        {/* Section Head */}
        <div className="flex items-baseline justify-between gap-6 mb-11 flex-wrap">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold text-[#e8ecef]">
            Experience
          </h2>
          <span className="font-mono text-[#6b7683] text-[0.88rem]">03</span>
        </div>

        {/* Changelog Entries */}
        <div className="flex flex-col">
          
          {/* v2.0 Current - Freecharge */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-8 first:pt-0 border-t first:border-t-0 border-[rgba(232,236,239,0.12)]">
            <div className="font-mono text-[#e3a857] text-[1.1rem] font-medium pt-0.5">
              v2.0
              <span className="block mt-2 text-[0.7rem] text-[#6b7683] font-sans uppercase tracking-wider">
                current
              </span>
            </div>
            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
                <h3 className="text-[1.15rem] font-semibold text-[#e8ecef]">
                  Senior SDET <span className="text-xs font-normal text-[#e3a857] ml-2 border border-[#b98a46]/60 px-2 py-0.5 rounded-[2px]">Targeting Lead SDET</span>
                </h3>
                <span className="text-[#6b7683] text-[0.88rem] font-mono">
                  Freecharge Payment Technologies by Axis Bank · FEB 2025 — Present
                </span>
              </div>
              <ul className="m-0 pl-5 text-[#9ba7b4] space-y-2 text-[0.98rem] marker:text-[#b98a46]">
                <li className="max-w-[68ch]">
                  <strong className="text-[#e8ecef]">Framework Architecture & Speedup:</strong> Refactored API test framework using Java 21, Spring Boot, REST Assured, and applied Factory & Singleton design patterns, boosting execution speed by 30% and cutting flaky tests by 20%.
                </li>
                <li className="max-w-[68ch]">
                  <strong className="text-[#e8ecef]">2FA Security Module QA Leadership:</strong> Commended by Program Manager for leading end-to-end testing of critical 2FA module, delivering 10% ahead of schedule with zero production escapes.
                </li>
                <li className="max-w-[68ch]">
                  <strong className="text-[#e8ecef]">Containerized Cloud Infrastructure:</strong> Containerized test suite with Docker and Kubernetes for parallel execution, cutting runtime by 40% and cloud infrastructure costs on AWS (EC2, EKS) by 15%.
                </li>
                <li className="max-w-[68ch]">
                  <strong className="text-[#e8ecef]">Data-Driven Coverage:</strong> Designed reusable, data-driven API automation with Postman and REST Assured, boosting overall test coverage by 25%.
                </li>
                <li className="max-w-[68ch]">
                  <strong className="text-[#e8ecef]">Real-Time Quality Governance:</strong> Developed automated reporting with Google Meet integrations and email alerts, reducing triage and issue resolution time by 20%.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Java 21', 'Spring Boot', 'REST Assured', 'Docker', 'Kubernetes', 'AWS (EC2, EKS)', 'Postman', 'TestNG', 'Jenkins'].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-[rgba(232,236,239,0.06)] text-[#cbd5e1] px-2 py-0.5 rounded-[2px] border border-[rgba(232,236,239,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* v1.0 - Nagarro */}
          <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-8 border-t border-[rgba(232,236,239,0.12)]">
            <div className="font-mono text-[#e3a857] text-[1.1rem] font-medium pt-0.5">
              v1.0
            </div>
            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
                <h3 className="text-[1.15rem] font-semibold text-[#e8ecef]">
                  Automation Analyst
                </h3>
                <span className="text-[#6b7683] text-[0.88rem] font-mono">
                  Nagarro Software Pvt. Ltd · SEPT 2021 — FEB 2025 (3.5 Years)
                </span>
              </div>
              <p className="text-xs text-[#9ba7b4] mb-3 italic">
                Delivered test automation strategy across multiple global enterprise clients in FinTech, Banking, and Data Services domains.
              </p>
              <div className="space-y-4">
                <div className="bg-[rgba(232,236,239,0.03)] p-3.5 rounded border border-[rgba(232,236,239,0.08)]">
                  <div className="text-xs font-semibold text-[#e3a857] uppercase tracking-wider mb-1">
                    Client: Saudi Bank (Onsite – FinTech Domain)
                  </div>
                  <ul className="m-0 pl-5 text-[#9ba7b4] space-y-1.5 text-[0.94rem] marker:text-[#b98a46]">
                    <li className="max-w-[68ch]">Automated core regression suite using Selenium + Cucumber BDD, reducing test cycle time by 30%.</li>
                    <li className="max-w-[68ch]">Built Page Object Model (POM) frameworks ensuring high reusability and fast team onboarding.</li>
                    <li className="max-w-[68ch]">Defined 500+ test scenarios and managed 200+ defects via JIRA; integrated Jenkins CI.</li>
                    <li className="max-w-[68ch]">Containerized Selenium tests with Docker and orchestrated cross-browser runs on BrowserStack.</li>
                  </ul>
                </div>

                <div className="bg-[rgba(232,236,239,0.03)] p-3.5 rounded border border-[rgba(232,236,239,0.08)]">
                  <div className="text-xs font-semibold text-[#e3a857] uppercase tracking-wider mb-1">
                    Client: LNRS (Data Services Domain)
                  </div>
                  <ul className="m-0 pl-5 text-[#9ba7b4] space-y-1.5 text-[0.94rem] marker:text-[#b98a46]">
                    <li className="max-w-[68ch]">Developed modular automation frameworks with Playwright and REST Assured for unified web and API testing.</li>
                    <li className="max-w-[68ch]">Conducted complex SQL-based DB validation and implemented data-driven test suites covering 1,000+ scenarios.</li>
                    <li className="max-w-[68ch]">Ensured continuous cross-platform coverage across 10+ device and browser environments with Git and Jenkins.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['Selenium', 'Playwright', 'Cucumber BDD', 'REST Assured', 'Java', 'Python', 'Docker', 'Jenkins', 'BrowserStack', 'JIRA', 'SQL'].map((tech) => (
                  <span key={tech} className="text-[11px] font-mono bg-[rgba(232,236,239,0.06)] text-[#cbd5e1] px-2 py-0.5 rounded-[2px] border border-[rgba(232,236,239,0.1)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
