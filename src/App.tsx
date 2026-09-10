import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { PrintableResume } from './components/PrintableResume';
import { downloadResumePdf } from './utils/generateResumePdf';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Directly generates and downloads real 2-page ATS PDF file
  const handleDownloadPdf = () => {
    try {
      downloadResumePdf();
    } catch (err) {
      console.error('Direct PDF generation error:', err);
      window.print();
    }
  };

  const handlePrintResume = () => {
    try {
      window.print();
    } catch {
      downloadResumePdf();
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E232A] flex flex-col font-sans selection:bg-[#0D766E] selection:text-white">
      
      {/* Top Sticky Header */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        onPrintResume={handleDownloadPdf}
      />

      {/* Main Content Sections */}
      <main className="flex-1 no-print">
        {/* Modern Executive Hero */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onPrintResume={handleDownloadPdf}
        />

        {/* About & Engineering Leadership (4 Engineers Mentored, QA Release Sign-off) */}
        <AboutSection />

        {/* Work Experience Timeline (Recruiter High Priority) */}
        <ExperienceSection />

        {/* Projects (OneDesk AI Spotlight & Enterprise Test Architectures) */}
        <ProjectsSection />

        {/* Core Technical & Leadership Skills Matrix */}
        <SkillsMatrix />

        {/* Contact & Recruiter Outreach */}
        <ContactSection
          onOpenResume={() => setResumeModalOpen(true)}
          onPrintResume={handleDownloadPdf}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onPrintResume={handleDownloadPdf}
      />

      {/* Interactive Resume Modal with Direct PDF Download */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownloadPdf={handleDownloadPdf}
        onPrint={handlePrintResume}
      />

      {/* Dedicated Print-Only Resume for window.print() */}
      <PrintableResume />

    </div>
  );
}
