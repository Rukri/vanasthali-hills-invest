
import React from 'react';
import { Check } from 'lucide-react';

const WhyInvest = () => {
  const features = [
    "Forest on 3 sides, lake view plots",
    "Upcoming gated villas & apartments", 
    "Excellent appreciation potential",
    "Located on 120-ft road, 10 mins from Nagole",
    "Fully legal, clear title, spot registration",
    "Fastest-growing zone in East Hyderabad"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Vanasthali Hills is the 
            <span className="text-green-600"> Best Investment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prime location surrounded by nature with exceptional growth potential
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-gray-800 font-medium text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
