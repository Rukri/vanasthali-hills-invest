
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react';

const ROISection = () => {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(0);
  const [roi, setRoi] = useState(0);
  const [futurePrice, setFuturePrice] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 50;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setOldPrice(Math.floor(1500 * progress));
        setCurrentPrice(Math.floor(35000 * progress));
        setRoi(Math.floor(25 * progress));
        setFuturePrice(Math.floor(50000 * progress));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateNumbers();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-md mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-600 font-bold">Investment Performance</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Wealth Creation</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track record of consistent growth and exceptional returns for our investors
          </p>
        </div>
        
        {/* Performance Dashboard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹{oldPrice.toLocaleString()}</div>
              <div className="text-sm text-gray-600 font-medium">Price in 2014</div>
              <div className="text-xs text-gray-500">per sq.yd</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹{currentPrice.toLocaleString()}</div>
              <div className="text-sm text-gray-600 font-medium">Current Price</div>
              <div className="text-xs text-gray-500">per sq.yd</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{roi}%</div>
              <div className="text-sm text-gray-600 font-medium">Annual ROI</div>
              <div className="text-xs text-gray-500">Consistent Growth</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">₹{futurePrice.toLocaleString()}+</div>
              <div className="text-sm text-gray-600 font-medium">5-Year Target</div>
              <div className="text-xs text-gray-500">per sq.yd</div>
            </CardContent>
          </Card>
        </div>
        
        {/* Success Story */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-white to-blue-50 border-0 shadow-2xl">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Rajesh Kumar</h3>
                      <p className="text-blue-600 font-medium">Satisfied Investor</p>
                    </div>
                  </div>
                  <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                    "Invested ₹4.5 Lakhs in 2014. Today it's worth ₹1.2 Cr+. 
                    Vanasthali Hills has been the cornerstone of my family's financial security."
                  </blockquote>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
                    <div className="text-3xl font-bold mb-2">2400%</div>
                    <div className="text-sm opacity-90">Total Returns</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
