import React from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const shoeImageUrl = 'https://images.unsplash.com/photo-1542296609-894913bb41b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80';

const Home: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5 } },
  };

  const slideIn = {
    initial: { x: -100 },
    animate: { x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  const products = [
    {
      id: 1,
      name: 'Abibas Ultraboost DNA',
      imageUrl: 'https://images.unsplash.com/photo-1520622598363-cd38cee905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2815&q=80',
      price: 180,
      description: 'The ultimate running shoe for comfort and performance.',
    },
    {
      id: 2,
      name: 'Abibas Stan Smith',
      imageUrl: 'https://images.unsplash.com/photo-1606086746591-328563589c1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      price: 100,
      description: 'A timeless classic for everyday style.',
    },
    {
      id: 3,
      name: 'Abibas NMD_R1',n      imageUrl: 'https://images.unsplash.com/photo-1616763358605-194bd9c54406?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80',
      price: 150,
      description: 'A modern silhouette with boost technology.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <motion.img
                src={shoeImageUrl}
                alt="Abibas Shoes"
                className="rounded-lg shadow-xl hover:scale-105 transition-all duration-300"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              />
            </div>
            <div className="md:order-1">
              <motion.h1
                className="text-5xl font-extrabold text-gray-900 mb-4 animate-in fade-in zoom-in"
                variants={slideIn}
                initial="initial"
                animate="animate"
              >
                Step into Style with Abibas
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 mb-6 animate-in fade-in delay-100 zoom-in"
                variants={slideIn}
                initial="initial"
                animate="animate"
              >
                Discover the latest collection of Abibas shoes, designed for performance and style.
              </motion.p>
              <motion.div variants={slideIn} initial="initial" animate="animate">
                <Button size="lg">Shop Now</Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "Abibas shoes are the most comfortable and stylish shoes I've ever owned. I wear them everywhere!"
              </p>
              <p className="text-gray-500">- Jane Doe, Happy Customer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic mb-4">
                "The quality of Abibas shoes is unmatched. They are durable and look great, even after months of wear."
              </p>
              <p className="text-gray-500">- John Smith, Loyal Fan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
