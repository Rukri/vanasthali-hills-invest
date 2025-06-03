
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-green-600/80 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Just 10 Minutes from Nagole, Hyderabad
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Invest Where
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
            Nature Meets High Returns
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 opacity-90 max-w-4xl mx-auto">
          Plots in Vanasthali Hills – Surrounded by Lake, Forest & Hills
        </p>
        
        <p className="text-lg md:text-xl mb-8 font-semibold text-yellow-300">
          From ₹1,500 to ₹35,000/sq.yd in 10 Years – 25% Annual ROI
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/918074915275?text=Hi, I'm interested in Vanasthali Hills plots"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              💬 Contact on WhatsApp
            </Button>
          </a>
        </div>
        
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
