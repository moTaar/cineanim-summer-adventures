
import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-summer-blue/20 to-transparent min-h-[600px] flex items-center">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-summer-blue opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-summer-orange opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-20 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-gradient">Summer Fun</span> Cinema Experience
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl">
            Dive into a world of sun-soaked adventures, thrilling blockbusters, and magical animated films. Experience the best of summer cinema with family and friends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-summer-blue hover:bg-summer-blue/90 text-white px-8 py-6 rounded-lg text-lg">
              Browse Movies
            </Button>
            <Button variant="outline" className="border-summer-blue text-summer-blue hover:bg-summer-blue/10 px-8 py-6 rounded-lg text-lg">
              View Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
