
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
  image: string;
}

const Events = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Summer Film Festival",
      date: "July 15-20, 2025",
      time: "4:00 PM - 11:00 PM",
      location: "Central Park, Main Lawn",
      capacity: "500 people",
      description: "Join us for five days of outdoor screenings featuring summer classics and new releases. Bring your blankets and enjoy films under the stars.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Animation Workshop",
      date: "August 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "CineAnim Studio, Downtown",
      capacity: "30 participants",
      description: "Learn the basics of animation from industry professionals in this hands-on workshop designed for beginners and intermediate artists.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Beach Movie Night",
      date: "August 12, 2025",
      time: "7:30 PM - 10:30 PM",
      location: "Sunset Beach, North Shore",
      capacity: "300 people",
      description: "Watch summer blockbusters with your toes in the sand at our annual beach screening. Food trucks and refreshments available.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop"
    },
    {
      id: 4,
      title: "Director's Talk: Summer Cinema",
      date: "July 25, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "City Library Auditorium",
      capacity: "150 attendees",
      description: "Join award-winning directors as they discuss the influence of summer themes in cinema throughout history.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop"
    },
    {
      id: 5,
      title: "Kids Animation Day",
      date: "August 8, 2025",
      time: "9:00 AM - 3:00 PM",
      location: "Children's Museum",
      capacity: "100 children",
      description: "A special day for children to explore animation techniques, create their own short films, and meet characters from popular summer movies.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=500&fit=crop"
    },
    {
      id: 6,
      title: "Sunset Cinema Club: Summer Edition",
      date: "Every Friday in August",
      time: "7:00 PM - 11:00 PM",
      location: "Rooftop Gardens",
      capacity: "80 members per session",
      description: "Our exclusive cinema club meets weekly to watch and discuss influential summer-themed films from around the world.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-summer-orange/20 to-transparent py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Summer Events & Activities</h1>
            <p className="text-gray-700 mb-8 max-w-2xl">
              Join us for a summer packed with special screenings, workshops, and interactive experiences for cinema lovers of all ages.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <Card key={event.id} className="overflow-hidden card-hover h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                  <div className="h-48 md:h-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5 flex flex-col">
                    <h3 className="font-bold text-xl mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="h-4 w-4 mr-2 text-summer-blue" />
                        <span>{event.date}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-summer-blue" />
                        <span>{event.time}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-summer-blue" />
                        <span>{event.location}</span>
                      </div>
                      
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-summer-blue" />
                        <span>{event.capacity}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    
                    <div className="mt-auto space-x-3">
                      <Button className="bg-summer-blue hover:bg-summer-blue/90">Register Now</Button>
                      <Button variant="outline" className="border-summer-blue text-summer-blue hover:bg-summer-blue/10">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
