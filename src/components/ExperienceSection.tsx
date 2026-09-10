import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck,
  Cpu,
  Layers,
  Award
} from 'lucide-react';
import { EXPERIENCES } from '../data/resumeData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-16 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#059669]" />
            Career Trajectory & Track Record
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            5+ Years of Proven Quality Engineering Leadership
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            Progressive growth from individual automation engineer to Lead SDET driving quality strategy, mentoring squads, 
            and holding sole release sign-off authority across distributed systems.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-10 space-y-6">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#FBFBF9] border-[#0D766E]/40 shadow-xs'
                    : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                }`}
              >
                {/* Header Row (Clickable) */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
                        {exp.role}
                      </h3>
                      {exp.targetRole && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                          Lead Responsibilities
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-[#4B5563]">
                      <span className="text-[#0D766E] font-semibold">{exp.company}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#9CA3AF]" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#9CA3AF]" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Right side teaser metrics + expand icon */}
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-3">
                      {exp.impactMetrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="text-right">
                          <div className="text-xs text-[#6B7280]">{m.label}</div>
                          <div className="text-sm font-extrabold text-[#0D766E]">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="p-2 rounded-lg bg-white border border-[#E5E7EB] text-[#4B5563] hover:text-[#111827]"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB] space-y-6">
                    
                    {/* Impact Metrics Banner */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-xl border border-[#E5E7EB]">
                      {exp.impactMetrics.map((m, idx) => (
                        <div key={idx}>
                          <div className="text-xs text-[#6B7280]">{m.label}</div>
                          <div className="text-lg sm:text-xl font-extrabold text-[#0D766E] mt-0.5">
                            {m.value}
                          </div>
                          <div className="text-[11px] text-[#4B5563] mt-0.5 leading-snug">
                            {m.description}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Leadership & Ownership Highlights */}
                    <div>
                      <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#059669]" />
                        Leadership & Governance Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.leadershipHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] mt-2 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Technical Responsibilities */}
                    <div>
                      <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-[#0D766E]" />
                        Framework Architecture & Automation Delivery
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0D766E] mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        Technologies & Tools Utilized
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white text-[#374151] border border-[#E5E7EB]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
