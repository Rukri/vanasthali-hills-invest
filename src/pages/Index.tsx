
import React from 'react';
import Hero from '@/components/Hero';
import WhyInvest from '@/components/WhyInvest';
import ROISection from '@/components/ROISection';
import InvestmentCalculator from '@/components/InvestmentCalculator';
import Connectivity from '@/components/Connectivity';
import Infrastructure from '@/components/Infrastructure';
import CountdownTimer from '@/components/CountdownTimer';
import LimitedPlots from '@/components/LimitedPlots';
import VideoTestimonials from '@/components/VideoTestimonials';
import Testimonials from '@/components/Testimonials';
import LeadCapture from '@/components/LeadCapture';
import TrustSection from '@/components/TrustSection';
import FloatingButtons from '@/components/FloatingButtons';
import LiveActivityFeed from '@/components/LiveActivityFeed';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Hero />
      <WhyInvest />
      <ROISection />
      <InvestmentCalculator />
      <Connectivity />
      <Infrastructure />
      <CountdownTimer />
      <LimitedPlots />
      <VideoTestimonials />
      <Testimonials />
      <LeadCapture />
      <TrustSection />
      <FloatingButtons />
      <LiveActivityFeed />
    </div>
  );
};

export default Index;
