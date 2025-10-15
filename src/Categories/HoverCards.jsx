import React from 'react';
import {
  Sparkles,
  Wrench,
  Brush,
  Dumbbell,
  BookOpen,
  Camera,
} from 'lucide-react';

export default function HoverCards() {
  const services = [
    { name: 'Cleaning', icon: <Sparkles />, color: 'bg-blue-400' },
    { name: 'Repair', icon: <Wrench />, color: 'bg-green-400' },
    { name: 'Beauty', icon: <Brush />, color: 'bg-pink-400' },
    { name: 'Fitness', icon: <Dumbbell />, color: 'bg-red-400' },
    { name: 'Tutoring', icon: <BookOpen />, color: 'bg-yellow-400' },
    { name: 'Photography', icon: <Camera />, color: 'bg-purple-400' },
  ];

  return (
    <div className="flex items-center justify-center p-6">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-6 text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg"
          >
            <div
              className={`flex justify-center mb-4 ${service.color} w-14 h-14 rounded-full items-center mx-auto`}
            >
              {React.cloneElement(service.icon, {
                className: 'w-7 h-7 text-white',
                fill: 'currentColor',
                stroke: 'none',
              })}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
