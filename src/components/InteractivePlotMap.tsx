
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Zap, Eye } from 'lucide-react';

const InteractivePlotMap = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);
  
  const plots = [
    { id: 1, size: "1200 sq.yd", price: "₹42L", status: "available", position: { top: "20%", left: "15%" }, premium: false },
    { id: 2, size: "800 sq.yd", price: "₹28L", status: "available", position: { top: "30%", left: "25%" }, premium: true },
    { id: 3, size: "1000 sq.yd", price: "₹35L", status: "sold", position: { top: "25%", left: "40%" }, premium: false },
    { id: 4, size: "1500 sq.yd", price: "₹52L", status: "available", position: { top: "40%", left: "20%" }, premium: true },
    { id: 5, size: "900 sq.yd", price: "₹31L", status: "available", position: { top: "35%", left: "55%" }, premium: false },
    { id: 6, size: "1100 sq.yd", price: "₹38L", status: "reserved", position: { top: "50%", left: "30%" }, premium: false },
    { id: 7, size: "1300 sq.yd", price: "₹45L", status: "available", position: { top: "45%", left: "45%" }, premium: true },
    { id: 8, size: "750 sq.yd", price: "₹26L", status: "available", position: { top: "60%", left: "25%" }, premium: false }
  ];

  const getPlotColor = (status) => {
    switch (status) {
      case 'available': return 'bg-green-500 hover:bg-green-600';
      case 'sold': return 'bg-red-500';
      case 'reserved': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'available': return <Badge className="bg-green-500 text-white">Available</Badge>;
      case 'sold': return <Badge className="bg-red-500 text-white">Sold</Badge>;
      case 'reserved': return <Badge className="bg-yellow-500 text-white">Reserved</Badge>;
      default: return null;
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">Interactive Plot Selection</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your 
            <span className="text-blue-600"> Perfect Plot</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click on any available plot to see details and pricing information
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plot Map */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 overflow-hidden">
                  {/* Background features */}
                  <div className="absolute inset-0">
                    <div className="absolute top-2 left-2 text-xs text-green-700 bg-green-200 px-2 py-1 rounded">
                      🌲 Forest Area
                    </div>
                    <div className="absolute top-2 right-2 text-xs text-blue-700 bg-blue-200 px-2 py-1 rounded">
                      🌊 Lake View
                    </div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 bg-gray-200 px-2 py-1 rounded">
                      📍 120-ft Main Road
                    </div>
                  </div>

                  {/* Plot markers */}
                  {plots.map((plot) => (
                    <div
                      key={plot.id}
                      className={`absolute w-8 h-8 rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                        getPlotColor(plot.status)
                      } ${selectedPlot?.id === plot.id ? 'scale-150 ring-4 ring-white' : 'hover:scale-125'} ${
                        plot.status === 'available' ? 'animate-pulse' : ''
                      }`}
                      style={{ top: plot.position.top, left: plot.position.left }}
                      onClick={() => plot.status === 'available' && setSelectedPlot(plot)}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {plot.id}
                      </div>
                      {plot.premium && (
                        <Zap className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                    <span>Reserved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>Sold</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Premium</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Plot Details */}
          <div>
            <Card className="bg-white shadow-xl sticky top-6">
              <CardContent className="p-6">
                {selectedPlot ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Plot #{selectedPlot.id}</h3>
                      {getStatusBadge(selectedPlot.status)}
                    </div>

                    {selectedPlot.premium && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-yellow-600" />
                          <span className="text-yellow-800 font-medium text-sm">Premium Location</span>
                        </div>
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Size:</span>
                        <span className="font-semibold">{selectedPlot.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-bold text-green-600 text-lg">{selectedPlot.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price per sq.yd:</span>
                        <span className="font-semibold">₹{Math.round(parseInt(selectedPlot.price.replace(/[₹L]/g, '')) * 100000 / parseInt(selectedPlot.size.split(' ')[0])).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        📞 Book Site Visit for This Plot
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Eye className="w-4 h-4 mr-2" />
                        View 360° Photos
                      </Button>
                    </div>

                    <div className="text-xs text-gray-500 text-center">
                      💡 Click other available plots to compare
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a Plot</h3>
                    <p className="text-gray-600">Click on any available plot to see detailed information and pricing.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePlotMap;
