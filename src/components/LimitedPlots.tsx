
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LimitedPlots = () => {
  const [plotsLeft, setPlotsLeft] = useState(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlotsLeft(prev => Math.max(prev - 1, 3));
    }, 30000); // Decrease every 30 seconds for demo
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    "Buy premium plots with clear title",
    "Sell your existing plots quickly", 
    "Custom villa construction support",
    "Complete legal documentation"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Limited Plots. 
            <span className="text-yellow-600"> Unlimited Returns.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure your investment today with limited inventory remaining
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl border-2 border-yellow-200 mb-8">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="text-6xl font-bold text-yellow-600 mb-2">{plotsLeft}</div>
                <div className="text-xl text-gray-700 font-medium">Premium Plots Available</div>
                <div className="text-sm text-gray-500">Ongoing registrations in progress</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/918074915275?text=Hi, I want to buy a plot in Vanasthali Hills"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    🏡 Buy a Plot
                  </Button>
                </a>
                <a
                  href="https://wa.me/918074915275?text=Hi, I want to sell my plot in Vanasthali Hills"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    💰 Sell Your Plot
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-800 font-medium text-lg">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedPlots;
