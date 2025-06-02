
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      investment: "₹4.5 Lakhs in 2014",
      currentValue: "₹1.2 Cr",
      quote: "Bought 300 sq.yd for ₹4.5 Lakhs in 2014. Now worth ₹1.2 Cr+. Best investment decision of my life.",
      roi: "2400% Returns"
    },
    {
      name: "Priya Sharma", 
      investment: "₹8 Lakhs in 2016",
      currentValue: "₹45 Lakhs",
      quote: "The location is perfect - surrounded by nature yet well-connected. My plot value has increased 5x in just 8 years.",
      roi: "500% Returns"
    },
    {
      name: "Vikram Reddy",
      investment: "₹12 Lakhs in 2018", 
      currentValue: "₹28 Lakhs",
      quote: "Clean title, legal clarity, and amazing appreciation. Building my villa here next year. Highly recommended!",
      roi: "233% Returns"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories & 
            <span className="text-green-600"> Real Returns</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from investors who transformed their wealth with Vanasthali Hills
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-green-600 font-medium">{testimonials[currentTestimonial].roi}</p>
                </div>
                
                <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Initial Investment</div>
                    <div className="text-2xl font-bold text-red-600">{testimonials[currentTestimonial].investment}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Current Value</div>
                    <div className="text-2xl font-bold text-green-600">{testimonials[currentTestimonial].currentValue}</div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                  <Button onClick={prevTestimonial} variant="outline" size="sm">
                    ← Previous
                  </Button>
                  <div className="flex space-x-2 items-center">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                          index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <Button onClick={nextTestimonial} variant="outline" size="sm">
                    Next →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
