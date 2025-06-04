
import React from 'react';
import { Check, TrendingUp, HandCoins } from 'lucide-react';

const WhyInvest = () => {
  const buyingFeatures = [
    "Forest on 3 sides, lake view plots",
    "Upcoming gated villas & apartments", 
    "Excellent appreciation potential"
  ];

  const sellingFeatures = [
    "Quick plot liquidation services",
    "Market-rate valuations",
    "Hassle-free documentation"
  ];

  const generalFeatures = [
    "Located on 120-ft road, 10 mins from Nagole",
    "Fully legal, clear title, spot registration",
    "Fastest-growing zone in East Hyderabad"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us for Your 
            <span className="text-green-600"> Land Investment Needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're buying or selling, we provide complete land investment solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Buying Section */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Plot Buying Services</h3>
            </div>
            <div className="space-y-3">
              {buyingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selling Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <HandCoins className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Plot Selling Services</h3>
            </div>
            <div className="space-y-3">
              {sellingFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* General Features */}
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Check className="w-8 h-8 text-yellow-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900">Location Advantages</h3>
            </div>
            <div className="space-y-3">
              {generalFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
