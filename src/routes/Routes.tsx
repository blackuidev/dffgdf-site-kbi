import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

const PageMotion = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const AnimatedRoute = ({ children, path }: { children: React.ReactNode; path: string }) => (
  <Route
    path={path}
    element={
      <motion.div
        variants={PageMotion}
        initial="initial"
        animate="animate"
        exit="exit"
        className="page-transition-container"
      >
        {children}
      </motion.div>
    }
  />
);

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <AnimatedRoute path="/about">
          <AboutUs />
        </AnimatedRoute>
        <AnimatedRoute path="/products">
          <Products />
        </AnimatedRoute>
        <AnimatedRoute path="/product/:id">
          <ProductDetail />
        </AnimatedRoute>
        <AnimatedRoute path="/cart">
          <Cart />
        </AnimatedRoute>
        <AnimatedRoute path="/checkout">
          <Checkout />
        </AnimatedRoute>
        <AnimatedRoute path="/contact">
          <Contact />
        </AnimatedRoute>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
