
import React from 'react';
import Hero from '@/components/Hero';
import WhyInvest from '@/components/WhyInvest';
import ROISection from '@/components/ROISection';
import Connectivity from '@/components/Connectivity';
import Infrastructure from '@/components/Infrastructure';
import LimitedPlots from '@/components/LimitedPlots';
import Testimonials from '@/components/Testimonials';
import LeadCapture from '@/components/LeadCapture';
import TrustSection from '@/components/TrustSection';
import FloatingButtons from '@/components/FloatingButtons';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <WhyInvest />
      <ROISection />
      <Connectivity />
      <Infrastructure />
      <LimitedPlots />
      <Testimonials />
      <LeadCapture />
      <TrustSection />
      <FloatingButtons />
    </div>
  );
};

export default Index;
