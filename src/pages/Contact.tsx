import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Send us a message</CardTitle>
              <CardDescription className="text-muted-foreground">We'd love to hear from you!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input type="text" id="name" placeholder="Your Name" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="message" className="text-white">Message</Label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full hover:bg-primary/90 transition-all duration-300">Send Message</Button>
            </CardFooter>
          </Card>

          {/* Contact Information */}
          <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">Contact Information</CardTitle>
              <CardDescription className="text-muted-foreground">Reach out to us through these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-white">
                <p><strong>Address:</strong> 123 Abibas Street, Shoe City</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Email:</strong> support@abibas.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
