import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const CartPage = () => {
  // Mock cart data (replace with actual cart logic later)
  const [cartItems, setCartItems] = useState([
    {
      id: '1', 
      name: 'Abibas Runner Pro', 
      price: 99.99, 
      imageUrl: 'https://images.unsplash.com/photo-1542296643-e042f0e765b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8MA&auto=format&fit=crop&w=500&q=60',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Abibas Street Style', 
      price: 79.99, 
      imageUrl: 'https://images.unsplash.com/photo-1546068881-9359f026d7e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fDA&auto=format&fit=crop&w=500&q=60',
      quantity: 2,
    },
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover rounded-md" />
                <div>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={`quantity-${item.id}`} className="text-sm font-medium">Quantity:</label>
                    <Input
                      type="number"
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-20 text-center"
                      min="1"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="justify-between">
                <Button variant="destructive" size="sm" onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </Button>
                <p className="text-sm font-medium">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </CardFooter>
            </Card>
          ))}
          <div className="text-right">
            <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
            <Button variant="primary" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
