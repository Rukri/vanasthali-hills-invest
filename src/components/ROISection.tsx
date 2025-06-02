
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ROISection = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [roi, setRoi] = useState(0);
  const [futurePrice, setFuturePrice] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setOldPrice(Math.floor(1500 * progress));
        setCurrentPrice(Math.floor(35000 * progress));
        setRoi(Math.floor(25 * progress));
        setFuturePrice(Math.floor(50000 * progress));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateNumbers();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Land, Your <span className="text-yellow-400">Wealth</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            See how Vanasthali Hills has transformed investments into wealth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">₹{oldPrice.toLocaleString()}</div>
              <div className="text-sm opacity-90">Price 10 Years Ago</div>
              <div className="text-xs opacity-70">per sq.yd</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">₹{currentPrice.toLocaleString()}</div>
              <div className="text-sm opacity-90">Current Price</div>
              <div className="text-xs opacity-70">per sq.yd</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{roi}%</div>
              <div className="text-sm opacity-90">Annual ROI</div>
              <div className="text-xs opacity-70">Consistent Growth</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">₹{futurePrice.toLocaleString()}+</div>
              <div className="text-sm opacity-90">Expected in 5 Years</div>
              <div className="text-xs opacity-70">per sq.yd</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur border-white/20">
            <CardContent className="p-8">
              <blockquote className="text-center">
                <div className="text-6xl text-yellow-400 mb-4">"</div>
                <p className="text-xl md:text-2xl font-medium mb-6 italic">
                  Bought 300 sq.yd for ₹4.5 Lakhs in 2014. Now worth ₹1 Cr+. Best decision of my life.
                </p>
                <footer className="text-lg opacity-90">
                  — Rajesh Kumar, Satisfied Investor
                </footer>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
