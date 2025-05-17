
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedMovies from '../components/FeaturedMovies';
import Events from '../components/Events';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedMovies />
        <FeatureSection />
        <Events />
        <Testimonials />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
