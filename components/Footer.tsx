import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-meetable-light pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="col-span-1 md:col-span-1">
                <h2 className="font-serif text-3xl font-bold text-meetable-teal mb-6">
                    meetable<span className="text-meetable-primary">.</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Meaningful connections over curated meals. We're bringing the dinner party back, one table at a time.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-meetable-teal hover:text-meetable-primary transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-meetable-teal hover:text-meetable-primary transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-meetable-teal hover:text-meetable-primary transition-colors"><Twitter size={20} /></a>
                </div>
            </div>

            {/* Links Columns */}
            <div>
                <h4 className="font-bold text-meetable-dark mb-6">Company</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-meetable-primary">About Us</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Careers</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Press</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Contact</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-meetable-dark mb-6">Support</h4>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li><a href="#" className="hover:text-meetable-primary">Help Center</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Safety & Trust</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Community Guidelines</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-meetable-primary">Privacy Policy</a></li>
                </ul>
            </div>

            {/* Newsletter */}
            <div>
                <h4 className="font-bold text-meetable-dark mb-6">Stay in the loop</h4>
                <p className="text-sm text-gray-600 mb-4">Get the latest news and exclusive dinner invites.</p>
                <div className="flex flex-col gap-2">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-meetable-primary text-sm"
                    />
                    <button className="bg-meetable-teal hover:bg-meetable-primary text-white px-4 py-3 rounded-md text-sm font-bold transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Meetable Inc. All rights reserved.</p>
            <p>Made with ❤️ for real connections.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;