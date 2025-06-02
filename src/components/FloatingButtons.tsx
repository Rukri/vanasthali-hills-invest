
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in Vanasthali Hills plots"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <span className="text-white text-xl">💬</span>
      </a>
      
      {/* Phone Button */}
      <a
        href="tel:+919876543210"
        className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
      
      {/* Sticky CTA Button */}
      <Button 
        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap text-sm font-bold"
      >
        📞 Talk to Advisor
      </Button>
    </div>
  );
};

export default FloatingButtons;
