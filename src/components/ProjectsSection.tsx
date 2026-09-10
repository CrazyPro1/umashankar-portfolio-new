import React, { useState } from 'react';
import { 
  Bot, 
  Sparkles, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ExternalLink, 
  Activity, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  Database,
  Terminal
} from 'lucide-react';
import { PROJECTS } from '../data/resumeData';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('onedesk-ai');

  const selectedProject = PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  return (
    <section id="projects" className="py-16 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0] mb-3">
            <Bot className="w-3.5 h-3.5 text-[#059669]" />
            Featured Engineering & Test Architectures
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
            Key Projects & Automated Test Innovations
          </h2>
          <p className="mt-3 text-base text-[#4B5563] leading-relaxed">
            Spotlighting <strong className="text-[#111827]">OneDesk AI</strong>—an enterprise RAG agent tested with modern GenAI evaluation methodologies—alongside 
            enterprise test frameworks that slashed regression cycle times by 65%.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 pb-2 border-b border-[#E5E7EB]">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${
                selectedProjectId === project.id
                  ? 'bg-[#0D766E] text-white shadow-xs'
                  : 'bg-[#F9FAFB] text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827] border border-[#E5E7EB]'
              }`}
            >
              {project.id === 'onedesk-ai' ? (
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <Layers className="w-3.5 h-3.5" />
              )}
              <span>{project.title.split('—')[0]}</span>
              {project.id === 'onedesk-ai' && (
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                  selectedProjectId === project.id ? 'bg-[#044E48] text-teal-100' : 'bg-[#E6F4EA] text-[#137333]'
                }`}>
                  Flagship GenAI
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Spotlight Project Details Card */}
        <div className="mt-8 bg-[#FBFBF9] rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Project Overview & Contributions */}
            <div className="lg:col-span-8 space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E0F2FE] text-[#0369A1]">
                    {selectedProject.category}
                  </span>
                  {selectedProject.id === 'onedesk-ai' && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Spring AI + pgvector + Gemini/Qwen
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-medium text-[#0D766E] mt-1">
                  {selectedProject.subtitle}
                </p>
                <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Key SDET Contributions */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  Lead SDET Engineering Contributions
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.keyContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#374151] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0D766E] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Testing Focus if applicable */}
              {selectedProject.aiTestingFocus && (
                <div className="bg-[#F0FDFA] rounded-xl border border-[#99F6E4] p-5">
                  <h4 className="text-xs font-bold text-[#0F766E] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#0D766E]" />
                    GenAI Testing & Response Validation Dimensions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.aiTestingFocus.map((focus, idx) => (
                      <div key={idx} className="bg-white/80 p-2.5 rounded-lg border border-[#CCFBF1] text-xs text-[#134E4A] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D766E] mt-0.5 shrink-0" />
                        <span className="font-medium">{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture & Stack */}
              <div>
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-2.5">
                  Architecture & Implementation Breakdown
                </h4>
                <div className="space-y-1.5 text-xs text-[#4B5563]">
                  {selectedProject.architecture.map((arch, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#0D766E] font-mono text-xs">→</span>
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Metrics, Stack Pills & Live CTA */}
            <div className="lg:col-span-4 space-y-5">
              
              {/* Quantifiable Metrics Card */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-[#0D766E]" />
                  Verified Project Metrics
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="bg-[#F9FAFB] p-3 rounded-lg border border-[#F3F4F6]">
                      <div className="text-xs text-[#6B7280] font-medium">{m.label}</div>
                      <div className="text-lg sm:text-xl font-extrabold text-[#0D766E] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Tag Cloud */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h4 className="text-xs font-bold text-[#111827] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#4B5563]" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F3F4F6] text-[#374151] border border-[#E5E7EB]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive Test Simulation Prompt */}
              <div className="bg-gradient-to-br from-[#0F766E] to-[#115E59] rounded-xl p-5 text-white shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-[#99F6E4]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#99F6E4]">
                    Interactive Demo Available
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  See the OneDesk AI Test Harness in Action
                </h4>
                <p className="mt-1 text-xs text-teal-100 leading-relaxed">
                  Run simulated RAG evaluation assertions and containerized pgvector tests right on this page.
                </p>
                <a
                  href="#test-demo"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold bg-white text-[#0F766E] hover:bg-teal-50 px-3.5 py-2 rounded-lg transition-colors"
                >
                  <span>Launch Live Test Runner</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
