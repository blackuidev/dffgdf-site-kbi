import React from 'react';
import { LucideIcon, Facebook, Instagram, Twitter, Mail } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#", label: "Email" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre-v2.png')] text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Abibas</h4>
            <p className="text-gray-400">Your ultimate destination for premium footwear. Step into style and comfort with Abibas.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Shoes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Shoes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter for exclusive deals and updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Abibas. All rights reserved.</p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-white transition-colors">
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
