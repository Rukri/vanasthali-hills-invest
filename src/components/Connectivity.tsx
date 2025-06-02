
import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Connectivity = () => {
  const connections = [
    { name: "Nagole", time: "10 min", distance: "5 km" },
    { name: "Uppal Metro", time: "15 min", distance: "8 km" },
    { name: "ORR @ Gowrelly", time: "15 min", distance: "12 km" },
    { name: "Warangal Highway", time: "20 min", distance: "15 km" },
    { name: "RGIA Airport", time: "45 min", distance: "35 km" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connectivity That 
            <span className="text-green-600"> Multiplies Value</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategic location with excellent connectivity to major landmarks
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {connections.map((connection, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{connection.name}</h3>
                    <p className="text-green-600 font-medium">{connection.time}</p>
                    <p className="text-gray-500 text-sm">{connection.distance}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Vanasthali Hills Location & Connectivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connectivity;
