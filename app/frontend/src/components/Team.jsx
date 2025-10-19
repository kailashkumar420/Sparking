import React from 'react';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star } from 'lucide-react';
import { teamMembers } from '../mockData';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate professionals who bring your events to life with creativity and
            expertise
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="text-amber-500 fill-amber-500" size={16} />
                  <span className="font-semibold text-gray-800">{member.rating}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-amber-300 font-medium">{member.role}</p>
                </div>
              </div>

              <CardHeader>
                <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                  {member.experience}
                </Badge>
                <CardDescription className="text-gray-600 mt-2">
                  {member.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <h4 className="font-semibold text-gray-800 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.specialties.slice(0, 2).map((specialty, idx) => (
                    <Badge key={idx} variant="outline" className="border-amber-300 text-amber-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50"
                >
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
