import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from './lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const navLinkVariants = {
    hover: { scale: 1.1, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.header
      className={cn(
        "bg-gradient-to-br from-gray-900 to-black text-white py-4 md:py-6 shadow-md sticky top-0 z-50",
        className
      )}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors duration-300">
          BlackUI
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <motion.Link
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
            to="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </motion.Link>
          <motion.Link
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
            to="/products"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Products
          </motion.Link>
          <motion.Link
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
            to="/about-us"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About Us
          </motion.Link>
          <motion.Link
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
            to="/contact"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Contact
          </motion.Link>
          <motion.Link
            variants={navLinkVariants}
            whileHover="hover"
            whileTap="tap"
            to="/cart"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Cart
          </motion.Link>
        </nav>

        {/* Mobile Menu (Example - can be expanded with a hamburger menu) */}
        <div className="md:hidden">
          <Link to="/cart" className="hover:text-gray-300 transition-colors duration-300">
            Cart
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
