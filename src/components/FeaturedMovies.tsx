
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: string;
  image: string;
}

const FeaturedMovies = () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Sunshine Adventure",
      genre: "Family / Adventure",
      rating: "PG",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=700&fit=crop"
    },
    {
      id: 2,
      title: "Coastal Thrill",
      genre: "Action / Drama",
      rating: "PG-13",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=700&fit=crop"
    },
    {
      id: 3,
      title: "Beach Tales",
      genre: "Animation / Comedy",
      rating: "G",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=700&fit=crop"
    },
    {
      id: 4,
      title: "Sunset Mystery",
      genre: "Thriller / Mystery",
      rating: "PG-13",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=700&fit=crop"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Summer Films</h2>
            <p className="text-gray-600 max-w-2xl">Discover this season's best movies, perfect for a hot summer day.</p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">View All Movies</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} className="overflow-hidden card-hover">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={movie.image} 
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 rounded text-xs font-medium">
                  {movie.rating}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{movie.genre}</p>
                <Button className="w-full bg-summer-blue hover:bg-summer-blue/90">Book Tickets</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMovies;
