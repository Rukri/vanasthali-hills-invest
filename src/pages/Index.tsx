
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
import TrustSection from '@/components/TrustSection';
import FloatingButtons from '@/components/FloatingButtons';
import LeadCapture from '@/components/LeadCapture';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hide Live Activity component completely */}
      <style>{`
        /* Hide any element containing "Live Activity" text */
        *:has-text("Live Activity"),
        *:contains("Live Activity"),
        [class*="live-activity"],
        [class*="LiveActivity"],
        [class*="live_activity"],
        [id*="live-activity"],
        [id*="LiveActivity"],
        [id*="live_activity"],
        .live-activity,
        .LiveActivity,
        .live_activity,
        /* Hide elements that contain viewing count text patterns */
        *:has-text("viewing"),
        *:contains("viewing"),
        *:has-text("viewed investment calculator"),
        *:contains("viewed investment calculator"),
        *:has-text("checked location"),
        *:contains("checked location"),
        *:has-text("High investor interest"),
        *:contains("High investor interest"),
        /* Hide any fixed/absolute positioned elements that might be the activity feed */
        div[style*="position: fixed"]:has-text("viewing"),
        div[style*="position: absolute"]:has-text("viewing"),
        /* More specific targeting */
        div:has(> div:contains("viewing")),
        div:has(> p:contains("viewing")),
        div:has(> span:contains("viewing")) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          overflow: hidden !important;
          position: absolute !important;
          left: -9999px !important;
        }
        
        /* Alternative approach - hide based on common patterns in activity feeds */
        div:has-text("ago"),
        div:contains("ago"),
        *[class]:has-text("ago"):not(.testimonial):not(.review):not(.comment) {
          display: none !important;
        }
      `}</style>
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
      <TrustSection />
      <LeadCapture />
      <FloatingButtons />
    </div>
  );
};

export default Index;
