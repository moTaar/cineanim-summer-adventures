
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import NewsletterSection from '../components/NewsletterSection';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-summer-blue/20 to-transparent py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="lg:w-1/2">
                <h1 className="text-4xl font-bold mb-6">About CineAnim</h1>
                <p className="text-lg mb-6 text-gray-700">
                  CineAnim Summer Fun is an annual celebration of cinema that brings together film enthusiasts, families, and creators for a season of memorable experiences.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Founded in 2018, our mission is to make cinema accessible and enjoyable for everyone during the summer months, with a focus on outdoor events, animated films, and interactive experiences.
                </p>
                <Button className="bg-summer-blue hover:bg-summer-blue/90">
                  Our History
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-64 h-64 bg-summer-orange/20 rounded-full absolute -right-10 -top-10 animate-float"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop" 
                    alt="People enjoying an outdoor movie night" 
                    className="rounded-lg shadow-lg relative z-10"
                  />
                  <div className="w-40 h-40 bg-summer-blue/20 rounded-full absolute -left-6 -bottom-6 animate-float"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in the power of cinema to inspire, educate, and bring communities together during the summer season.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-summer-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-summer-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600">
                  Making quality cinema experiences available to everyone, regardless of background or circumstances.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-summer-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-summer-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Constantly exploring new ways to present and experience films during the summer months.
                </p>
              </Card>
              
              <Card className="p-6 text-center">
                <div className="w-16 h-16 bg-summer-yellow/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-summer-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-gray-600">
                  Building connections and fostering a sense of belonging through shared cinematic experiences.
                </p>
              </Card>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-summer-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind CineAnim's summer programming and events.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Rodriguez",
                  title: "Creative Director",
                  image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop"
                },
                {
                  name: "Jamie Chen",
                  title: "Program Manager",
                  image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop"
                },
                {
                  name: "Taylor Kim",
                  title: "Head of Animation",
                  image: "https://images.unsplash.com/photo-1719322800607-8c38375eef04?w=300&h=300&fit=crop"
                },
                {
                  name: "Jordan Smith",
                  title: "Events Coordinator",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop"
                }
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-xl">{person.name}</h3>
                  <p className="text-gray-600">{person.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
