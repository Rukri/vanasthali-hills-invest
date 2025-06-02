
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Star, TrendingUp } from 'lucide-react';

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Software Engineer",
      investment: "₹4.5L → ₹1.2Cr",
      roi: "2400%",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Best investment decision of my life. The returns exceeded all expectations.",
      year: "2014-2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Doctor",
      investment: "₹8L → ₹45L",
      roi: "560%",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=150&h=150&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "The location is perfect and the team is very professional. Highly recommended!",
      year: "2016-2024"
    },
    {
      id: 3,
      name: "Vikram Reddy",
      title: "Business Owner",
      investment: "₹12L → ₹28L",
      roi: "233%",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Clear documentation, legal transparency, and excellent appreciation potential.",
      year: "2018-2024"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Play className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold">Video Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Investors, 
            <span className="text-purple-600"> Real Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how Vanasthali Hills transformed their financial future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={() => setActiveVideo(testimonial)}
                      className="bg-white/90 hover:bg-white text-black rounded-full p-4"
                    >
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      +{testimonial.roi}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
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
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-bold text-lg">{activeVideo.name}'s Success Story</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveVideo(null)}
                >
                  ✕ Close
                </Button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={activeVideo.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
