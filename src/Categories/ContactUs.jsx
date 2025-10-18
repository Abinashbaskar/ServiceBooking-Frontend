import React from "react";
import { ShieldCheck, Star, Clock, Mail, Phone, Clock4 } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* --- Why Choose Section --- */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose ServiceHub?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We connect you with verified professionals who deliver quality services at competitive prices.
        </p>
      </div>

      {/* --- Features Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="bg-blue-500 text-white p-4 rounded-full mb-4">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Verified Providers
          </h3>
          <p className="text-gray-600">
            All service providers are background-checked and verified for your peace of mind.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="bg-green-500 text-white p-4 rounded-full mb-4">
            <Star size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Service
          </h3>
          <p className="text-gray-600">
            Read reviews and ratings from real customers to make informed decisions.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center p-6">
          <div className="bg-yellow-500 text-white p-4 rounded-full mb-4">
            <Clock size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Easy Booking
          </h3>
          <p className="text-gray-600">
            Book services in just a few clicks with instant confirmation and scheduling.
          </p>
        </div>
      </div>

      {/* --- Contact Section --- */}
      <div className="bg-gray-100 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions or need support? We’re here to help!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-4xl mx-auto">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-3">
              <Mail size={28} />
            </div>
            <h4 className="font-semibold text-gray-800">Email</h4>
            <p className="text-gray-600">support@servicehub.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-3">
              <Phone size={28} />
            </div>
            <h4 className="font-semibold text-gray-800">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 text-white p-4 rounded-full mb-3">
              <Clock4 size={28} />
            </div>
            <h4 className="font-semibold text-gray-800">Hours</h4>
            <p className="text-gray-600">24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
