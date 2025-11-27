import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Checkout = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Checkout</h1>
      <Card className="w-full max-w-2xl mx-auto bg-gradient-to-br from-gray-900 to-black text-white shadow-md">
        <CardHeader className="text-lg">Shipping Information</CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" type="text" placeholder="John" className="bg-transparent border-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" type="text" placeholder="Doe" className="bg-transparent border-white/20 text-white" />
            </div>
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" type="text" placeholder="123 Main St" className="bg-transparent border-white/20 text-white" />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" placeholder="Anytown" className="bg-transparent border-white/20 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" type="text" placeholder="CA" className="bg-transparent border-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="zip">Zip Code</Label>
              <Input id="zip" type="text" placeholder="90210" className="bg-transparent border-white/20 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-2xl mx-auto mt-8 bg-gradient-to-br from-gray-900 to-black text-white shadow-md">
        <CardHeader className="text-lg">Payment Information</CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" type="text" placeholder="**** **** **** ****" className="bg-transparent border-white/20 text-white" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiration">Expiration Date</Label>
              <Input id="expiration" type="text" placeholder="MM/YY" className="bg-transparent border-white/20 text-white" />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" type="text" placeholder="123" className="bg-transparent border-white/20 text-white" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-primary hover:bg-primary/80 text-white">Place Order</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Checkout;
