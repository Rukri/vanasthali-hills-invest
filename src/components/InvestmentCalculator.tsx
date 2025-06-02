
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(500000);
  const [years, setYears] = useState(5);
  const [results, setResults] = useState({
    futureValue: 0,
    totalReturns: 0,
    roiPercentage: 0
  });

  useEffect(() => {
    // 25% annual ROI calculation
    const annualGrowthRate = 0.25;
    const futureValue = investment * Math.pow(1 + annualGrowthRate, years);
    const totalReturns = futureValue - investment;
    const roiPercentage = ((futureValue - investment) / investment) * 100;

    setResults({
      futureValue: Math.round(futureValue),
      totalReturns: Math.round(totalReturns),
      roiPercentage: Math.round(roiPercentage)
    });
  }, [investment, years]);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Investment Calculator</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Calculate Your 
            <span className="text-blue-600"> Future Wealth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how your investment in Vanasthali Hills can grow with our proven 25% annual ROI
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calculator Inputs */}
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Investment Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Amount (₹)
                    </label>
                    <Input
                      type="number"
                      value={investment}
                      onChange={(e) => setInvestment(Number(e.target.value))}
                      className="text-lg"
                      min="100000"
                      step="50000"
                    />
                    <div className="flex gap-2 mt-2">
                      {[500000, 1000000, 2000000, 5000000].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          size="sm"
                          onClick={() => setInvestment(amount)}
                          className="text-xs"
                        >
                          ₹{(amount / 100000).toFixed(0)}L
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Investment Period (Years)
                    </label>
                    <Input
                      type="number"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="text-lg"
                      min="1"
                      max="15"
                    />
                    <div className="flex gap-2 mt-2">
                      {[3, 5, 7, 10].map((year) => (
                        <Button
                          key={year}
                          variant="outline"
                          size="sm"
                          onClick={() => setYears(year)}
                          className="text-xs"
                        >
                          {year} Years
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-blue-800 text-sm font-medium">
                      📈 Based on historical 25% annual ROI from Vanasthali Hills
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="bg-gradient-to-br from-green-500 to-blue-600 text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Projected Returns
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Initial Investment</div>
                    <div className="text-2xl font-bold">₹{investment.toLocaleString()}</div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Future Value ({years} years)</div>
                    <div className="text-3xl font-bold text-yellow-300">
                      ₹{results.futureValue.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">Total Returns</div>
                    <div className="text-2xl font-bold text-green-300">
                      +₹{results.totalReturns.toLocaleString()}
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm opacity-90 mb-1">ROI Percentage</div>
                    <div className="text-2xl font-bold text-yellow-300">
                      {results.roiPercentage}%
                    </div>
                  </div>

                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3">
                    💰 Start This Investment Journey
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
