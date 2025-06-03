
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, TrendingUp } from 'lucide-react';

const VideoTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Software Engineer",
      investment: "₹4.5L → ₹1.2Cr",
      roi: "2400%",
      quote: "Best investment decision of my life. The returns exceeded all expectations.",
      year: "2014-2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Doctor",
      investment: "₹8L → ₹45L",
      roi: "560%",
      quote: "The location is perfect and the team is very professional. Highly recommended!",
      year: "2016-2024"
    },
    {
      id: 3,
      name: "Vikram Reddy",
      title: "Business Owner",
      investment: "₹12L → ₹28L",
      roi: "233%",
      quote: "Clear documentation, legal transparency, and excellent appreciation potential.",
      year: "2018-2024"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Investors, 
            <span className="text-purple-600"> Real Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Vanasthali Hills transformed their financial future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 italic mb-4 text-lg">
                  "{testimonial.quote}"
                </blockquote>

                <div className="space-y-2">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <div className="text-xs text-gray-500">Investment Growth</div>
                      <div className="font-bold text-green-600 flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {testimonial.investment}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Period</div>
                      <div className="font-semibold">{testimonial.year}</div>
                    </div>
                  </div>
                  
                  <div className="text-center pt-2">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold inline-block">
                      +{testimonial.roi} ROI
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
