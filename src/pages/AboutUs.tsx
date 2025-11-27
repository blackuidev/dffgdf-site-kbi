import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Abibas
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="md:order-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1542296636-2b707f590f14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Abibas Shoes"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            className="md:order-1"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg text-gray-300 mb-6">
              Founded in 2023, Abibas started with a simple mission: to provide
              high-quality, stylish, and comfortable shoes for everyone. We believe
              that the right pair of shoes can make all the difference, whether you're
              running a marathon or just running errands.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-300 mb-6">
              To empower individuals to express themselves through footwear, offering
              innovative designs and exceptional craftsmanship.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-lg text-gray-300">
              <li>Quality: We are committed to using the finest materials and construction techniques.</li>
              <li>Innovation: We constantly strive to push the boundaries of shoe design and technology.</li>
              <li>Sustainability: We are dedicated to reducing our environmental impact.</li>
              <li>Customer Satisfaction: Your happiness is our top priority.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Join the Abibas Community</h2>
          <p className="text-lg text-gray-300">
            Stay up-to-date on the latest news, product releases, and exclusive offers.
          </p>
          <button className="bg-white text-black py-2 px-6 rounded-full mt-4 hover:bg-gray-200 transition-colors duration-300">
            Sign Up for Our Newsletter
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
