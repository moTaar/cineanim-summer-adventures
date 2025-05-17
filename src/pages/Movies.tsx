
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: string;
  year: number;
  image: string;
  description: string;
}

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const allMovies: Movie[] = [
    {
      id: 1,
      title: "Sunshine Adventure",
      genre: "Family / Adventure",
      rating: "PG",
      year: 2025,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=700&fit=crop",
      description: "Follow a family's journey as they embark on an unexpected adventure during their summer vacation."
    },
    {
      id: 2,
      title: "Coastal Thrill",
      genre: "Action / Drama",
      rating: "PG-13",
      year: 2024,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=700&fit=crop",
      description: "A lifeguard's routine summer takes a dramatic turn when a mysterious visitor arrives at his beach."
    },
    {
      id: 3,
      title: "Beach Tales",
      genre: "Animation / Comedy",
      rating: "G",
      year: 2025,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=700&fit=crop",
      description: "A colorful animated adventure featuring talking sea creatures who organize a summer festival."
    },
    {
      id: 4,
      title: "Sunset Mystery",
      genre: "Thriller / Mystery",
      rating: "PG-13",
      year: 2023,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=700&fit=crop",
      description: "When strange events start occurring at sunset, a small beach town must uncover a decades-old secret."
    },
    {
      id: 5,
      title: "Vacation Escape",
      genre: "Comedy / Adventure",
      rating: "PG",
      year: 2024,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=700&fit=crop",
      description: "A hilarious tale of a family road trip that goes hilariously wrong at every turn."
    },
    {
      id: 6,
      title: "Summer Love",
      genre: "Romance / Drama",
      rating: "PG-13",
      year: 2023,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=700&fit=crop",
      description: "Two strangers meet at a summer festival and find their lives forever changed."
    },
    {
      id: 7,
      title: "Island Dreams",
      genre: "Fantasy / Adventure",
      rating: "PG",
      year: 2025,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=500&h=700&fit=crop",
      description: "A magical island reveals its secrets to a young explorer during an unforgettable summer."
    },
    {
      id: 8,
      title: "Surf's Up",
      genre: "Sports / Documentary",
      rating: "G",
      year: 2024,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=700&fit=crop",
      description: "Follow the world's best surfers as they compete in the ultimate summer championship."
    }
  ];
  
  const filteredMovies = allMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-summer-blue/20 to-transparent py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6">Summer Films Collection</h1>
            <p className="text-gray-700 mb-8 max-w-2xl">
              Explore our curated collection of summer-themed films, from family adventures to thrilling mysteries. Perfect for your summer viewing pleasure.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search movies by title or genre..." 
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={16} />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
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
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{movie.title}</h3>
                    <span className="text-sm text-gray-500">{movie.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{movie.genre}</p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-2">{movie.description}</p>
                  <Button className="w-full bg-summer-blue hover:bg-summer-blue/90">Book Tickets</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredMovies.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No movies found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Movies;
