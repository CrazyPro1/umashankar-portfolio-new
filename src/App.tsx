import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GenAiSection } from './components/GenAiSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeViewerModal } from './components/ResumeViewerModal';
import { PrintableResume } from './components/PrintableResume';
import { PhotoLocationModal } from './components/PhotoLocationModal';
import { AIChatbotModal } from './components/AIChatbotModal';
import { useUserProfile } from './utils/useUserProfile';
import { downloadResumePdf, printResumePdf } from './utils/generateResumePdf';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [photoLocationModalOpen, setPhotoLocationModalOpen] = useState<boolean>(false);

  // User profile picture & live location management
  const {
    profilePicture,
    updateProfilePicture,
    resetProfilePicture,
    currentLocation,
    updateLocation,
    fetchLiveLocation,
    isFetchingLocation,
    locationStatusMessage,
  } = useUserProfile();

  // Directly generates and downloads real 2-page ATS PDF file with current location
  const handleDownloadPdf = () => {
    try {
      downloadResumePdf(currentLocation);
    } catch (err) {
      console.error('Direct PDF generation error:', err);
      printResumePdf(currentLocation);
    }
  };

  const handlePrintResume = () => {
    printResumePdf(currentLocation);
  };

  return (
    <div className="min-h-screen bg-[#12171f] text-[#e8ecef] flex flex-col font-sans selection:bg-[#e3a857]/20 selection:text-[#e3a857]">
      
      {/* Sticky Navigation Header with American English, Photo & Location */}
      <Header
        onOpenResume={() => setResumeModalOpen(true)}
        onPrintResume={handleDownloadPdf}
        onOpenPhotoLocationModal={() => setPhotoLocationModalOpen(true)}
        currentLocation={currentLocation}
        profilePicture={profilePicture}
      />

      {/* Main Content Sections */}
      <main className="flex-1 no-print">
        {/* Executive Hero with Photo, Designation Distinction, Visible Location */}
        <Hero
          onOpenResume={() => setResumeModalOpen(true)}
          onPrintResume={handleDownloadPdf}
          onOpenPhotoLocationModal={() => setPhotoLocationModalOpen(true)}
          profilePicture={profilePicture}
          currentLocation={currentLocation}
        />

        {/* 01 About & Leadership */}
        <AboutSection />

        {/* 02 AI & GenAI Testing (OneDesk AI) */}
        <GenAiSection />

        {/* 03 Experience Changelog */}
        <ExperienceSection />

        {/* 04 Skills Matrix */}
        <SkillsMatrix />

        {/* 05 Case Studies */}
        <ProjectsSection />

        {/* 06 Let's Connect & Recruiter Messaging Feature */}
        <ContactSection
          onOpenResume={() => setResumeModalOpen(true)}
          onPrintResume={handleDownloadPdf}
          currentLocation={currentLocation}
          onOpenPhotoLocationModal={() => setPhotoLocationModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setResumeModalOpen(true)}
        onPrintResume={handleDownloadPdf}
        onOpenPhotoLocationModal={() => setPhotoLocationModalOpen(true)}
      />

      {/* Interactive Resume Viewer Modal */}
      <ResumeViewerModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onDownloadPdf={handleDownloadPdf}
        onPrint={handlePrintResume}
        currentLocation={currentLocation}
      />

      {/* Photo & Location Manager Modal */}
      <PhotoLocationModal
        isOpen={photoLocationModalOpen}
        onClose={() => setPhotoLocationModalOpen(false)}
        profilePicture={profilePicture}
        onUpdatePicture={updateProfilePicture}
        onResetPicture={resetProfilePicture}
        currentLocation={currentLocation}
        onUpdateLocation={updateLocation}
        onFetchLiveLocation={fetchLiveLocation}
        isFetchingLocation={isFetchingLocation}
        locationStatusMessage={locationStatusMessage}
      />

      {/* Dedicated Print-Only Resume for window.print() */}
      <PrintableResume currentLocation={currentLocation} />

      {/* AI HR & Recruiter Chatbot Assistant */}
      <AIChatbotModal onDownloadPdf={handleDownloadPdf} />

    </div>
  );
}
