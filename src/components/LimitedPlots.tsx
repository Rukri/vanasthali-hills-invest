
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LimitedPlots = () => {
  const [plotsLeft, setPlotsLeft] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlotsLeft(prev => Math.max(prev - 1, 35));
    }, 30000); // Decrease every 30 seconds for demo
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    "100% legal plots with clear title",
    "Investor-friendly payment plans",
    "Custom villa construction support",
    "Spot registration facility"
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
              
              <div className="bg-yellow-100 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium">
                  ⚡ Limited Time: EMI Options Available Starting ₹25,000/month
                </p>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                💼 Reserve Your Plot Now
              </Button>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-lg shadow-md">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-800 font-medium text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedPlots;
