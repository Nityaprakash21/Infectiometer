/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { AudienceTracksSection } from './components/AudienceTracksSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { FreeResourcesSection } from './components/FreeResourcesSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { QuickTestModal } from './components/QuickTestModal';
import { NoteReaderModal } from './components/NoteReaderModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { PremiumLoader } from './components/PremiumLoader';
import { VIDEO_LECTURES } from './data/mockData';
import { VideoLecture } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [quickTestOpen, setQuickTestOpen] = useState(false);
  const [sampleNoteOpen, setSampleNoteOpen] = useState(false);
  const [authAudience, setAuthAudience] = useState<'mbbs' | 'md-dnb' | 'neet-pg' | 'professional'>('mbbs');
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const handleOpenAuth = (mode: 'signin' | 'signup' = 'signup', audience?: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional') => {
    if (audience) {
      setAuthAudience(audience);
    }
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleSelectTrackForAuth = (audienceId: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional') => {
    handleOpenAuth('signup', audienceId);
  };

  const handleWatchVideo = (video: VideoLecture) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-[#181E28] flex flex-col font-sans selection:bg-[#FFE8E8] selection:text-[#FF4D4D]">
      
      {/* SECTION 0: Premium Calibration & Loader Screen upon Load/Reload */}
      {isLoading && (
        <PremiumLoader onComplete={() => setIsLoading(false)} />
      )}

      {/* SECTION 1: Navigation bar */}
      <Navbar 
        onOpenAuth={handleOpenAuth} 
        onNavigate={handleNavigate} 
      />

      <main className="flex-1">
        {/* SECTION 2: Hero section */}
        <Hero 
          onExploreResources={() => handleNavigate('what-you-get')}
          onExploreTracks={() => handleNavigate('tracks')}
          onOpenQuickTest={() => setQuickTestOpen(true)}
          onOpenSampleNote={() => setSampleNoteOpen(true)}
          onOpenSampleVideo={() => handleWatchVideo(VIDEO_LECTURES[0])}
          onOpenAuth={handleOpenAuth}
        />

        {/* SECTION 3: About Infectiometer (Mission, Scope, 6 Pillars, Vision) */}
        <AboutSection 
          onExplore={() => handleNavigate('tracks')} 
        />

        {/* SECTION 4: 4 Major Audiences (Who It's For - MBBS 2nd Year & NEET-PG Focus) */}
        <AudienceTracksSection 
          onSelectTrackForAuth={handleSelectTrackForAuth}
          onExploreNotes={() => handleNavigate('what-you-get')}
          onExploreVideos={() => handleNavigate('what-you-get')}
          onExploreQBank={() => handleNavigate('what-you-get')}
          onExploreTestSeries={() => handleNavigate('what-you-get')}
        />

        {/* SECTION 5: What You Get (Curriculum Overview: Notes+Slides, Videos, Q-Bank, Tests) */}
        <WhatYouGetSection 
          onOpenSampleNote={() => setSampleNoteOpen(true)}
          onOpenSampleVideo={() => handleWatchVideo(VIDEO_LECTURES[0])}
          onOpenSampleTest={() => setQuickTestOpen(true)}
          onOpenAuth={handleOpenAuth}
        />

        {/* SECTION 6: 100% Free Open-Access Hub (Stories, Micro Blog, News, Image Bank) */}
        <FreeResourcesSection />

        {/* SECTION 7: FAQ Section */}
        <FAQSection />

        {/* SECTION 8: Final CTA */}
        <FinalCTA 
          onGetStarted={() => handleOpenAuth('signup')}
          onExploreResources={() => handleNavigate('what-you-get')}
        />
      </main>

      {/* SECTION 9: Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenAuth={handleOpenAuth}
      />

      {/* Interactive Modal Dialogs */}
      <AuthModal 
        isOpen={authModalOpen} 
        initialMode={authMode} 
        initialAudience={authAudience}
        onClose={() => setAuthModalOpen(false)} 
      />

      <VideoPlayerModal
        video={selectedVideo}
        isOpen={videoModalOpen}
        onClose={() => {
          setVideoModalOpen(false);
          setSelectedVideo(null);
        }}
        onOpenAuth={() => {
          setVideoModalOpen(false);
          handleOpenAuth('signup');
        }}
      />

      <QuickTestModal 
        isOpen={quickTestOpen}
        onClose={() => setQuickTestOpen(false)}
      />

      <NoteReaderModal 
        isOpen={sampleNoteOpen}
        onClose={() => setSampleNoteOpen(false)}
        onOpenQuickTest={() => setQuickTestOpen(true)}
      />

    </div>
  );
}
