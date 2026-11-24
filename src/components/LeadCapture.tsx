
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const LeadCapture = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Format the message for WhatsApp
      const message = `New Lead from Vanasthali Hills Website:
      
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Preferred Visit Date: ${formData.visitDate || 'Not specified'}
Timestamp: ${new Date().toLocaleString()}`;

      // Create WhatsApp URL with pre-filled message
      const whatsappNumber = "919701740375";
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      toast({
        title: "Information Sent Successfully!",
        description: "Your details have been sent to our WhatsApp. Our investment advisor will contact you within 2 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        visitDate: ''
      });
      
    } catch (error) {
      console.error('Error sending to WhatsApp:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly on WhatsApp: +91 97017 40375",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Land 
            <span className="text-yellow-400"> Investment Journey</span>
          </h2>
          <p className="text-xl opacity-90">
            Get personalized investment advice and site visit booking
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur border-white/20">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-white/70"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-white/70"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Visit Date</label>
                  <Input
                    type="date"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleInputChange}
                    className="bg-white/20 border-white/30 text-white"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-4 text-lg font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? 'Sending to WhatsApp...' : '📞 Send Details via WhatsApp'}
                </Button>
                
                <p className="text-sm text-center opacity-90">
                  By submitting, your details will be sent to our WhatsApp: +91 97017 40375
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
