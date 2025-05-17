
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-r from-summer-blue to-summer-orange p-1.5 text-white">
            <span className="font-bold">CA</span>
          </div>
          <span className="text-xl font-bold">CineAnim</span>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li><Link to="/" className="font-medium hover:text-summer-blue transition-colors">Home</Link></li>
            <li><Link to="/movies" className="font-medium hover:text-summer-blue transition-colors">Movies</Link></li>
            <li><Link to="/events" className="font-medium hover:text-summer-blue transition-colors">Events</Link></li>
            <li><Link to="/about" className="font-medium hover:text-summer-blue transition-colors">About</Link></li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Button className="bg-summer-blue hover:bg-summer-blue/90">Get Tickets</Button>
        </div>
        
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col">
            <li>
              <Link 
                to="/" 
                className="block px-6 py-3 hover:bg-summer-blue/10 hover:text-summer-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/movies" 
                className="block px-6 py-3 hover:bg-summer-blue/10 hover:text-summer-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Movies
              </Link>
            </li>
            <li>
              <Link 
                to="/events" 
                className="block px-6 py-3 hover:bg-summer-blue/10 hover:text-summer-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block px-6 py-3 hover:bg-summer-blue/10 hover:text-summer-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="p-4">
              <Button className="w-full bg-summer-blue hover:bg-summer-blue/90">
                Get Tickets
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
