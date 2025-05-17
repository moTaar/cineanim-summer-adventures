
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The Summer Fun Cinema Experience was magical! My kids loved the outdoor screenings and animation workshops.",
      name: "Sarah Johnson",
      title: "Family Blogger",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      quote: "As a film enthusiast, I was impressed by the curation of summer-themed movies. The beach screening was a highlight!",
      name: "Michael Chen",
      title: "Film Critic",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      quote: "The events were well-organized and the staff was incredibly friendly. Can't wait for next summer's program!",
      name: "Emily Rodriguez",
      title: "Event Planner",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What People Are Saying</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our visitors about their experiences with CineAnim Summer Fun.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="mb-6 relative">
                  <svg
                    className="w-10 h-10 text-summer-yellow/60 mx-auto absolute -top-6 left-1/2 -translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.7 25.4c-1.9 0-3.5-0.7-4.8-2-1.3-1.3-2-2.9-2-4.8s0.5-3.7 1.6-5.2c1.1-1.5 2.6-2.9 4.6-4.2l1.3 2.2c-1.5 0.9-2.6 1.8-3.4 2.7s-1.2 1.9-1.2 2.9c0 0.4 0.1 0.8 0.2 1.1 1.1-0.6 2.2-0.9 3.3-0.9 1.3 0 2.3 0.4 3.2 1.2 0.9 0.8 1.3 1.8 1.3 3.2 0 1.3-0.4 2.3-1.2 3.2-0.8 0.8-1.9 1.2-3.1 1.2zM25.4 25.4c-1.9 0-3.5-0.7-4.8-2s-2-2.9-2-4.8 0.5-3.7 1.6-5.2c1.1-1.5 2.6-2.9 4.6-4.2l1.3 2.2c-1.5 0.9-2.6 1.8-3.4 2.7s-1.2 1.9-1.2 2.9c0 0.4 0.1 0.8 0.2 1.1 1.1-0.6 2.2-0.9 3.3-0.9 1.3 0 2.3 0.4 3.2 1.2 0.9 0.8 1.3 1.8 1.3 3.2 0 1.3-0.4 2.3-1.2 3.2-0.8 0.8-1.9 1.2-3.1 1.2z"></path>
                  </svg>
                </div>
                
                <p className="mb-6 text-gray-700 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-center">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-summer-blue/20 flex items-center justify-center mr-3">
                      <span className="text-summer-blue font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="text-left">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
