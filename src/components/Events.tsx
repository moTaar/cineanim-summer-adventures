
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

const Events = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Summer Film Festival",
      date: "July 15-20, 2025",
      location: "Central Park",
      description: "Join us for five days of outdoor screenings featuring summer classics and new releases.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Animation Workshop",
      date: "August 5, 2025",
      location: "CineAnim Studio",
      description: "Learn the basics of animation from industry professionals in this hands-on workshop.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Beach Movie Night",
      date: "August 12, 2025",
      location: "Sunset Beach",
      description: "Watch summer blockbusters with your toes in the sand at our annual beach screening.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-gradient-radial from-summer-yellow/30 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Upcoming Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't miss these special summer events and activities for film lovers of all ages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden card-hover h-full flex flex-col">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="p-5 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-summer-blue mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-bold text-xl mb-1">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.location}</p>
                <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
                <a 
                  href="#" 
                  className="text-summer-blue font-medium hover:underline inline-flex items-center"
                >
                  Learn more
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
