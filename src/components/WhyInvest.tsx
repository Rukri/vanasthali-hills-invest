
import React from 'react';
import { Trees, Building2, TrendingUp, MapPin, FileCheck, Zap } from 'lucide-react';

const WhyInvest = () => {
  const features = [
    {
      icon: Trees,
      title: "Nature's Paradise",
      description: "Forest on 3 sides, lake view plots",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Future Development",
      description: "Upcoming gated villas & apartments",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      title: "High Appreciation",
      description: "Excellent appreciation potential",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "120-ft road, 10 mins from Nagole",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: FileCheck,
      title: "Legal Clarity",
      description: "Clear title, spot registration",
      color: "from-teal-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Growth Zone",
      description: "Fastest-growing area in East Hyderabad",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full mb-6 border border-blue-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg">
              Why Choose Vanasthali Hills
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"> Investment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Six compelling reasons why Vanasthali Hills stands out as the smartest land investment choice
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                
                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
