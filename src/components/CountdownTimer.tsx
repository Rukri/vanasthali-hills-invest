
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Zap } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white/10 backdrop-blur border-white/20 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
              <h2 className="text-2xl md:text-3xl font-bold">
                Limited Time Offer Ends Soon!
              </h2>
            </div>

            <p className="text-xl mb-8 opacity-90">
              Lock in current prices before the next price revision
            </p>

            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Days</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Minutes</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold animate-pulse">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm opacity-80">Seconds</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-yellow-400/20 rounded-lg p-4 mb-6">
                <p className="text-lg font-semibold">
                  🎯 Special Launch Pricing: Starting ₹25,000/month EMI
                </p>
                <p className="text-sm opacity-90">
                  Regular pricing resumes after countdown expires
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Clock className="w-5 h-5 mr-2" />
                Secure My Plot Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;
