import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Award, Users, HeadphonesIcon } from 'lucide-react';

const About = () => {
  const features = [
    { icon: CheckCircle, text: 'Complete event planning and coordination' },
    { icon: Users, text: 'Professional team of experienced planners' },
    { icon: Award, text: 'Customized solutions for every budget' },
    { icon: HeadphonesIcon, text: '24/7 support throughout your event' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Sparkling Event Management
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in creating unforgettable experiences and memorable celebrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg"
                alt="Event setup"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  300+
                </div>
                <p className="text-gray-600 font-medium">Successful Events</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Transforming Visions into Reality
            </h3>
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                At Sparkling Event Management Group Patna, we believe every celebration deserves to
                be extraordinary. With over 3 years of experience in the event management industry,
                we have successfully organized 300+ events, earning the trust of 250+ happy clients
                across Bihar.
              </p>
              <p>
                Our team of dedicated professionals specializes in creating bespoke experiences that
                reflect your unique style and vision. From intimate gatherings to grand
                celebrations, we handle every detail with precision and care.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-amber-100 rounded-full p-2 flex-shrink-0">
                      <IconComponent className="text-amber-600" size={20} />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
