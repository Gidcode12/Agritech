
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="glass-panel rounded-2xl p-12 max-w-md w-full text-center shadow-neo">
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 rounded-full p-5 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2H11C7.5995 2 7.0395 2.1355 6.3645 2.3885C5.1855 2.8245 4.142 3.714 3.5805 4.9305C3.2605 5.6575 3.115 6.6165 3.077 9.077C3.0437 11.111 3.0296 12.128 3.022 12.791C2.9995 14.25 3 15 3 15C3 15 3.0005 15.7505 3.023 17.209C3.031 17.872 3.045 18.8888 3.0783 20.923C3.1155 23.3835 3.2615 24.343 3.581 25.0695C4.142 26.286 5.186 27.1755 6.365 27.6115C7.091 27.8645 7.651 28 11.051 28H12.9493C16.349 28 16.909 27.8645 17.6355 27.6115C18.8143 27.1755 19.8578 26.286 20.4192 25.0695C20.7393 24.3425 20.8848 23.3835 20.9228 20.923C20.9522 19.1223 20.9695 17.881 20.9777 17.209C20.9995 15.75 21 15 21 15C21 15 20.9995 14.2495 20.977 12.791C20.969 12.128 20.955 11.1111 20.9217 9.077C20.8845 6.6165 20.7385 5.657 20.419 4.9305C19.858 3.714 18.814 2.8245 17.635 2.3885C16.909 2.1355 16.349 2 12.949 2H11Z"></path>
              <path d="M12 8L12 13"></path>
              <path d="M12 16V16.5"></path>
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-2 text-foreground">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button className="button-hover w-full">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
