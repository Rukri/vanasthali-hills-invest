
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">Premium Location • Nagole, Hyderabad</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-white">Land That</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                  Multiplies Wealth
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
                Vanasthali Hills - Where natural beauty meets extraordinary returns. 
                <span className="text-emerald-400 font-semibold block mt-2">25% Annual ROI Track Record</span>
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-emerald-400">₹1.5K</div>
                <div className="text-xs text-gray-300">2014 Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-blue-400">₹35K</div>
                <div className="text-xs text-gray-300">Current Price</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl font-bold text-purple-400">2400%</div>
                <div className="text-xs text-gray-300">Total Returns</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Investment Report
              </Button>
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm">
                <Shield className="w-5 h-5 mr-2" />
                Schedule Site Visit
              </Button>
            </div>
          </div>
          
          {/* Right Content - Interactive Card */}
          <div className="lg:justify-self-end">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl max-w-md">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Investment Calculator</h3>
                  <p className="text-gray-300 text-sm">See your potential returns</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-xl p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Investment Amount</label>
                    <div className="text-3xl font-bold text-white">₹10,00,000</div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expected Value (5 Years)</label>
                    <div className="text-3xl font-bold text-emerald-400">₹30,00,000</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl p-4 border border-emerald-400/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-400">₹20,00,000</div>
                      <div className="text-sm text-emerald-300">Potential Profit</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white py-3 rounded-xl">
                  Calculate My Returns
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
