import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, MenuSquare } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-br from-gray-900 to-black backdrop-blur-md bg-white/10 border-white/20 p-4 md:p-6 lg:p-8 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white hover:text-primary transition-colors duration-300">
          Abibas
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">Products</Link>
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <MenuSquare className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Conditionally Rendered) */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-md p-4 rounded-b-md shadow-lg animate-in fade-in slide-in-from-top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
            <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">Products</Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
            <Button variant="outline">Sign In</Button>
            <Button>Sign Up</Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
