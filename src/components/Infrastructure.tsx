
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Infrastructure = () => {
  const [activeTab, setActiveTab] = useState('hospitals');

  const infrastructure = {
    hospitals: [
      "Kamineni Hospital - 12 min",
      "Sai Bhavani Hospital - 15 min", 
      "Sanjeevani Hospital - 18 min",
      "ESIC Super Speciality Hospital - 20 min",
      "Maxcure Hospitals - 22 min",
      "Continental Hospitals - 25 min"
    ],
    schools: [
      "Johnson Grammar School - 10 min",
      "Oakridge International - 15 min",
      "Bhashyam Public School - 12 min",
      "Delhi Public School - 18 min",
      "Siva Sivani Public School - 20 min",
      "Chirec International School - 22 min"
    ],
    shopping: [
      "Swagath Grand Mall - 15 min",
      "BVK Multiplex - 18 min",
      "Uppal Shopping Complex - 20 min",
      "Galleria Mall - 25 min",
      "Forum Sujana Mall - 30 min",
      "Raghavendra Shopping Mall - 12 min"
    ],
    transport: [
      "Nagole Metro Station - 10 min",
      "Uppal Metro Station - 15 min",
      "LB Nagar Bus Station - 20 min",
      "Secunderabad Railway Station - 45 min",
      "Hyderabad Airport - 45 min",
      "Outer Ring Road - 15 min"
    ],
    entertainment: [
      "Ramoji Film City - 35 min",
      "Wonderla Amusement Park - 40 min",
      "Ocean Park Water World - 25 min",
      "PVR Cinemas Uppal - 20 min",
      "Inox Movies - 22 min",
      "Snow World - 35 min"
    ],
    banking: [
      "SBI Branch Nagole - 12 min",
      "HDFC Bank - 10 min",
      "ICICI Bank - 15 min",
      "Axis Bank - 18 min",
      "Canara Bank - 14 min",
      "Indian Bank - 16 min"
    ]
  };

  const tabs = [
    { id: 'hospitals', label: '🏥 Hospitals', emoji: '🏥' },
    { id: 'schools', label: '🎓 Schools', emoji: '🎓' },
    { id: 'shopping', label: '🛒 Shopping', emoji: '🛒' },
    { id: 'transport', label: '🚇 Transport', emoji: '🚇' },
    { id: 'entertainment', label: '🎢 Entertainment', emoji: '🎢' },
    { id: 'banking', label: '🏦 Banking', emoji: '🏦' }
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
        
        <div className="max-w-6xl mx-auto">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
