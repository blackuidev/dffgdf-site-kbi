import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shoe } from './Index';

const ProductCard: React.FC<{ shoe: Shoe }> = ({ shoe }) => (
  <motion.div
    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
  >
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{shoe.name}</CardTitle>
        <CardDescription>{shoe.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">Price: ${shoe.price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  </motion.div>
);

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // Placeholder shoe data (replace with actual data fetching)
  const shoes: Shoe[] = [
    { id: '1', name: 'Abibas Swift Run', description: 'Comfortable running shoe', price: 79.99, image: 'https://images.unsplash.com/photo-1542296636-e39e18778986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: '2', name: 'Abibas Ultraboost', description: 'High-performance trainer', price: 180.00, image: 'https://images.unsplash.com/photo-1600851197058-f7072f170ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: '3', name: 'Abibas NMD', description: 'Lifestyle shoe', price: 140.00, image: 'https://images.unsplash.com/photo-1588361505430-0220f133d773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: '4', name: 'Abibas Stan Smith', description: 'Classic tennis shoe', price: 100.00, image: 'https://images.unsplash.com/photo-1618380934398-44a27cd72233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: '5', name: 'Abibas Forum', description: 'Basketball-inspired shoe', price: 110.00, image: 'https://images.unsplash.com/photo-1606107557195-0a29a5b6b549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
    { id: '6', name: 'Abibas Superstar', description: 'Iconic shell toe shoe', price: 90.00, image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' },
  ];

  const filteredShoes = shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedShoes = [...filteredShoes].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'price') {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Abibas Shoe Collection</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        <Input
          type="text"
          placeholder="Search shoes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Select onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap -mx-4">
        {sortedShoes.map((shoe) => (
          <ProductCard key={shoe.id} shoe={shoe} />
        ))}
      </div>
    </div>
  );
};

export default Products;
