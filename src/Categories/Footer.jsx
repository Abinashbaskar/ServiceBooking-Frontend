import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Bell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1b2533] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Bell className="text-blue-500" size={24} />
              <h2 className="text-xl font-semibold text-white">ServiceHub</h2>
            </div>
            <p className="text-gray-400 text-sm">
              Connecting customers with professional service providers worldwide.
            </p>
          </div>

          {/* For Customers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Customers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Browse Services</a></li>
              <li><a href="#" className="hover:text-blue-400">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400">Customer Reviews</a></li>
            </ul>
          </div>

          {/* For Providers */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Providers</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Join as Provider</a></li>
              <li><a href="#" className="hover:text-blue-400">Provider Resources</a></li>
              <li><a href="#" className="hover:text-blue-400">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} ServiceHub. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0">
            <Facebook size={18} />
            <Twitter size={18} />
            <Instagram size={18} />
        <Linkedin size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
