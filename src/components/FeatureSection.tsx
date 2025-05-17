
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, Calendar, Star, Users } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-summer-blue" />,
      title: "Curated Films",
      description: "Carefully selected summer-themed movies from around the world."
    },
    {
      icon: <Calendar className="h-8 w-8 text-summer-blue" />,
      title: "Special Events",
      description: "Workshops, screenings, and interactive experiences for all ages."
    },
    {
      icon: <Star className="h-8 w-8 text-summer-blue" />,
      title: "Premium Experience",
      description: "State-of-the-art facilities for the best viewing experience."
    },
    {
      icon: <Users className="h-8 w-8 text-summer-blue" />,
      title: "Family Friendly",
      description: "Activities and films suitable for the whole family to enjoy."
    }
  ];

  return (
    <section className="py-16 bg-summer-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Choose CineAnim</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience cinema like never before with our unique offerings and special features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-none shadow-md card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
