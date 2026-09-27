/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroHome2 } from './components/HeroHome2';
import { AboutModulux } from './components/AboutModulux';
import { ServicesSlider } from './components/ServicesSlider';
import { KeyFeatures } from './components/KeyFeatures';
import { CollectionsSolutions } from './components/CollectionsSolutions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { InsideVideoMetrics } from './components/InsideVideoMetrics';
import { Approaches } from './components/Approaches';
import { MaterialsSection } from './components/MaterialsSection';
import { HowWeWork } from './components/HowWeWork';
import { ProjectsHome2 } from './components/ProjectsHome2';
import { FaqHome2 } from './components/FaqHome2';
import { TestimonialsHome2 } from './components/TestimonialsHome2';
import { BlogHome2 } from './components/BlogHome2';
import { FooterHome2 } from './components/FooterHome2';
import { ContactEstimateModal } from './components/ContactEstimateModal';
import { VideoModal } from './components/VideoModal';
import { OriginalPreloader, OriginalMagicCursor } from './components/OriginalMotion';

export default function App() {
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimate = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    } else {
      setSelectedService(null);
    }
    setEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1a1e21] flex flex-col font-body selection:bg-[#c4121a] selection:text-white">
      
      {/* Original Theme Preloader */}
      <OriginalPreloader />

      {/* Original Theme Magic Cursor */}
      <OriginalMagicCursor />

      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Main Navigation Header */}
      <Navbar
        onOpenEstimate={() => handleOpenEstimate()}
        onNavigate={handleNavigate}
      />

      {/* Main Sections matching exact Elementor markup */}
      <main className="flex-1">
        {/* 3. Hero Home-2 */}
        <HeroHome2
          onOpenEstimate={() => handleOpenEstimate()}
          onExploreDesigns={() => handleNavigate('collections')}
        />

        {/* 4. About Modulux */}
        <AboutModulux
          onLearnMore={() => handleNavigate('services')}
        />

        {/* 5. Our Services Slider */}
        <ServicesSlider
          onSelectService={(service) => handleOpenEstimate(service)}
          onOpenContact={() => handleOpenEstimate()}
        />

        {/* 6. Key Features */}
        <KeyFeatures
          onExploreKitchens={() => handleNavigate('collections')}
        />

        {/* 7. Modular Kitchen Collections (The 4 Solutions) */}
        <CollectionsSolutions
          onSelectSolution={(solution) => handleOpenEstimate(solution)}
        />

        {/* 8. Why Choose Modulux */}
        <WhyChooseUs />

        {/* 9. Inside Modulux Video & Metrics */}
        <InsideVideoMetrics
          onOpenVideo={() => setVideoModalOpen(true)}
          onStartProject={() => handleOpenEstimate()}
        />

        {/* 10. Our Approaches */}
        <Approaches
          onExploreApproach={() => handleOpenEstimate()}
        />

        {/* 11. Our Material Collections */}
        <MaterialsSection
          onOpenContact={() => handleOpenEstimate()}
        />

        {/* 12. How We Work */}
        <HowWeWork
          onStartProject={() => handleOpenEstimate()}
        />

        {/* 13. Our Projects */}
        <ProjectsHome2
          onSelectProject={(project) => handleOpenEstimate(project)}
          onViewAllProjects={() => handleNavigate('projects')}
        />

        {/* 14. Questions & Answers (FAQ) */}
        <FaqHome2
          onTalkToExpert={() => handleOpenEstimate()}
        />

        {/* 15. Our Testimonials & Client Logos */}
        <TestimonialsHome2
          onViewAllReviews={() => handleOpenEstimate()}
        />

        {/* 16. Kitchen Insights (Blog) */}
        <BlogHome2
          onViewAllBlogs={() => handleNavigate('blog')}
          onReadArticle={(title) => handleOpenEstimate(title)}
        />
      </main>

      {/* 17. Footer */}
      <FooterHome2
        onNavigate={handleNavigate}
        onOpenEstimate={() => handleOpenEstimate()}
      />

      {/* Interactive Modals */}
      <ContactEstimateModal
        isOpen={estimateModalOpen}
        onClose={() => setEstimateModalOpen(false)}
        serviceTitle={selectedService}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

    </div>
  );
}
