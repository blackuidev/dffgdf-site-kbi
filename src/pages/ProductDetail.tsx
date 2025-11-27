import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  
  // Placeholder product data (replace with actual data fetching)
  const product = {
    id: productId || '1', // Use productId from params or default to '1'
    name: 'Abibas Premium Shoe',
    description: 'Experience ultimate comfort and style with this premium Abibas shoe. Perfect for running, training, or everyday wear.',
    images: [
      'https://images.unsplash.com/photo-1542296660-60507261ecb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1560769629-975ef69e4795?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    ],
    price: 129.99,
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'White', 'Blue'],
  };

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <motion.div
      className="container mx-auto p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-white/90 backdrop-blur-md border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Image Carousel */}
          <div className="">
            <Slider {...settings}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={product.name} className="w-full h-64 object-contain rounded-md" />
                </div>
              ))}
            </Slider>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-xl font-bold text-gray-800 mb-4">${product.price}</p>

            {/* Size Selection */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Size:</h2>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 rounded-md border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedSize === size ? 'bg-blue-100' : ''}`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Color:</h2>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 rounded-md border border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${selectedColor === color ? 'bg-blue-100' : ''}`}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductDetail;
