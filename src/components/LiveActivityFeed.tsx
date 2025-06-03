import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Eye, Phone, MapPin } from 'lucide-react';

const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([]);
  const [visitorCount, setVisitorCount] = useState(147);

  const activityTemplates = [
    { icon: Eye, text: "viewed plot details", color: "text-blue-600" },
    { icon: Phone, text: "contacted via WhatsApp", color: "text-green-600" },
    { icon: MapPin, text: "checked location", color: "text-purple-600" },
    { icon: Users, text: "viewed investment calculator", color: "text-orange-600" }
  ];

  const names = [
    "Rajesh", "Priya", "Vikram", "Anita", "Suresh", "Kavya", 
    "Ravi", "Deepika", "Arjun", "Meera", "Kiran", "Sita"
  ];

  useEffect(() => {
    const generateActivity = () => {
      const template = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
      const name = names[Math.floor(Math.random() * names.length)];
      const timeAgo = Math.floor(Math.random() * 30) + 1;
      
      return {
        id: Date.now() + Math.random(),
        icon: template.icon,
        name,
        action: template.text,
        timeAgo: `${timeAgo}m ago`,
        color: template.color
      };
    };

    // Initial activities
    const initialActivities = Array.from({ length: 5 }, generateActivity);
    setActivities(initialActivities);

    // Add new activity every 8-15 seconds
    const interval = setInterval(() => {
      const newActivity = generateActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
      
      // Occasionally update visitor count
      if (Math.random() > 0.7) {
        setVisitorCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, Math.random() * 7000 + 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <Card className="bg-white/95 backdrop-blur-sm shadow-xl border border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800">Live Activity</span>
            </div>
            <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
              {visitorCount} viewing
            </div>
          </div>

          <div className="space-y-2">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div 
                  key={activity.id}
                  className="flex items-center space-x-3 p-2 bg-gray-50 rounded-lg animate-fade-in"
                >
                  <div className="flex-shrink-0">
                    <IconComponent className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate">
                      <span className="font-medium">{activity.name}</span>{' '}
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.timeAgo}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              🔥 High investor interest in this area
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveActivityFeed;
