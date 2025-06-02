
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TrustSection = () => {
  const trustFeatures = [
    {
      title: "RERA Approved",
      description: "Government registered project",
      icon: "✅"
    },
    {
      title: "Clear Title",
      description: "No legal complications",
      icon: "📋"
    },
    {
      title: "Spot Registration",
      description: "Immediate ownership transfer",
      icon: "⚡"
    },
    {
      title: "Development Permissions",
      description: "All approvals in place",
      icon: "🏗️"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trust & 
            <span className="text-green-600"> Legal Assurance</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency and legal clarity for your peace of mind
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Card className="bg-white shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Download Legal Documents
              </h3>
              <p className="text-gray-600 mb-6">
                Get complete documentation including title deeds, approvals, and project brochure
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full">
                📄 Download Legal Brochure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
