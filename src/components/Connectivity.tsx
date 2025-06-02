
import React from 'react';
import { MapPin, Clock, Route } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Connectivity = () => {
  const connections = [
    { name: "Nagole", time: "10 min", distance: "5 km", icon: MapPin },
    { name: "Uppal Metro", time: "15 min", distance: "8 km", icon: Route },
    { name: "ORR @ Gowrelly", time: "15 min", distance: "12 km", icon: Route },
    { name: "Warangal Highway", time: "20 min", distance: "15 km", icon: Route },
    { name: "RGIA Airport", time: "45 min", distance: "35 km", icon: Clock }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-green-600 mr-2" />
            <span className="text-green-700 font-semibold">Prime Location</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Strategic Location,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600"> Endless Possibilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfectly positioned with world-class connectivity to transform your investment into extraordinary returns
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Connectivity Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Route className="w-6 h-6 text-green-600 mr-3" />
              Connectivity Highlights
            </h3>
            {connections.map((connection, index) => {
              const IconComponent = connection.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900">{connection.name}</h4>
                          <p className="text-gray-600">{connection.distance}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                          {connection.time}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Interactive Map */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Location Map</h3>
                <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm font-medium">Live Location</span>
                </div>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4284985485825!2d78.5707!3d17.3238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0x88021c52e6e112be!2sVanasthali%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1643789012345!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  title="Vanasthali Hills Location"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-800 font-medium">
                    📍 Vanasthali Hills, Near Nagole, Hyderabad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
