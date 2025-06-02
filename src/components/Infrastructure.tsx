
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('hospitals');

  const infrastructure = {
    hospitals: [
      "Kamineni Hospital - 12 min",
      "Sai Bhavani Hospital - 15 min", 
      "Sanjeevani Hospital - 18 min"
    ],
    schools: [
      "Johnson Grammar School - 10 min",
      "Oakridge International - 15 min",
      "Bhashyam Public School - 12 min"
    ],
    shopping: [
      "Swagath Grand Mall - 15 min",
      "BVK Multiplex - 18 min",
      "Uppal Shopping Complex - 20 min"
    ],
    upcoming: [
      "Gated Villa Community - Phase 1",
      "Premium Apartments - Under Construction",
      "Commercial Complex - Planned"
    ]
  };

  const tabs = [
    { id: 'hospitals', label: '🏥 Hospitals', emoji: '🏥' },
    { id: 'schools', label: '🎓 Schools', emoji: '🎓' },
    { id: 'shopping', label: '🍴 Shopping', emoji: '🛒' },
    { id: 'upcoming', label: '🏠 Upcoming', emoji: '🏗️' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nearby Infrastructure & 
            <span className="text-green-600"> Facilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for modern living is just minutes away
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {infrastructure[activeTab as keyof typeof infrastructure].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-gray-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
