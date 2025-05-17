
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-summer-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">
            Subscribe to our newsletter and be the first to know about upcoming films, events, and exclusive offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/20 placeholder:text-white/70 border-white/30 text-white focus-visible:ring-white"
            />
            <Button className="bg-white text-summer-blue hover:bg-white/90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
          
          <p className="text-sm mt-4 text-white/70">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
