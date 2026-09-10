import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AiTestingScorecard } from './components/AiTestingScorecard';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { LiveTestHarnessDemo } from './components/LiveTestHarnessDemo';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { DomainHostingGuideModal } from './components/DomainHostingGuideModal';
import { PrintableResume } from './components/PrintableResume';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [domainGuideModalOpen, setDomainGuideModalOpen] = useState<boolean>(false);

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FBFBF9] text-[#1E232A] flex flex-col font-sans">
      
      {/* Top Header Navigation */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenDomainGuide={() => setDomainGuideModalOpen(true)}
        onPrintResume={handlePrintResume}
      />

      {/* Main Content Area */}
      <main className="flex-1 no-print">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenDomainGuide={() => setDomainGuideModalOpen(true)}
          onPrintResume={handlePrintResume}
        />

        {/* AI Testing & Resume Rating Breakdown */}
        <AiTestingScorecard />

        {/* About & Leadership (4 Engineers Mentored, QA Release Sign-off) */}
        <AboutSection />

        {/* Projects (OneDesk AI Spotlight & Enterprise Test Frameworks) */}
        <ProjectsSection />

        {/* Interactive Live Test Harness Console Demo */}
        <LiveTestHarnessDemo />

        {/* Work Experience Timeline */}
        <ExperienceSection />

        {/* Core Skills Matrix */}
        <SkillsMatrix />

        {/* Contact & Recruiter Outreach */}
        <ContactSection
          onOpenResume={() => setResumeModalOpen(true)}
          onPrintResume={handlePrintResume}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenDomainGuide={() => setDomainGuideModalOpen(true)}
        onPrintResume={handlePrintResume}
      />

      {/* Interactive Resume Modal */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onPrint={handlePrintResume}
      />

      {/* Domain & Hosting Guide Modal */}
      <DomainHostingGuideModal
        isOpen={domainGuideModalOpen}
        onClose={() => setDomainGuideModalOpen(false)}
      />

      {/* Dedicated Print-Only Resume for window.print() */}
      <PrintableResume />

    </div>
  );
}
