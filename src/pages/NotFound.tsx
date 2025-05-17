
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-summer-blue/10 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 relative">
            <h1 className="text-9xl font-bold text-summer-blue/20">404</h1>
            <h2 className="text-3xl font-bold text-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Page Not Found
            </h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have drifted away like a beach ball in the summer breeze.
          </p>
          <Button asChild className="bg-summer-blue hover:bg-summer-blue/90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
