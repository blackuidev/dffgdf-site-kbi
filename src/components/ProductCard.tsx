import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/components/lib/utils';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  price: number;
  discountedPrice?: number;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageUrl, name, price, discountedPrice, description }) => {
  return (
    <motion.div
      className="relative flex flex-col rounded-lg shadow-md overflow-hidden bg-white"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="aspect-w-3 aspect-h-4">
        <img
          src={imageUrl}
          alt={name}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div>
            {discountedPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gray-900">${discountedPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
