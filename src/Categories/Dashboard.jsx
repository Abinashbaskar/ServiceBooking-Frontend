import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import HoverCards from './HoverCards';
import ServicesCards from './ServicesCards';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { authData, logout } = useAuth();
  const navigate = useNavigate();

  if (!authData) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <div className="bg-blue-500 rounded-lg p-2">
                <img src={Logo} alt="ServiceHub Logo"
                  className="w-8 h-8 rounded-lg object-contain" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                ServiceHub
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => navigate('/')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/services')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Browse Services
              </button>
              <button
                onClick={() => navigate('/about')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Right side - User profile + menu button */}
            <div className="flex items-center space-x-4 relative">
              {/* Profile section (always visible now) */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${authData.name}`}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:inline text-gray-700 font-medium">
                    {authData.name}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <div
                    className={`absolute ${isOpen
                        ? 'left-1/2 -translate-x-1/2' // centered when menu open
                        : 'right-0'
                      } mt-3 w-56 bg-white rounded-md shadow-lg py-1 border border-gray-200 z-50`}
                  >
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{authData.name}</p>
                      <p className="text-sm text-gray-500 truncate">{authData.email}</p>
                      <p className="text-xs text-gray-400 mt-1">ID: {authData.userid}</p>
                    </div>
                    <button
                      onClick={() => {
                        navigate('/profile');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={() => {
                        navigate('/settings');
                        setIsDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Settings
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <button
                onClick={() => {
                  navigate('/');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigate('/services');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Browse Services
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Contact
              </button>

              {/* Mobile User Section */}
              <div className="border-t border-gray-200 pt-2">
                <div className="flex items-center space-x-2 px-3 py-2">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${authData.name}`}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-gray-700 font-medium">{authData.name}</p>
                    <p className="text-xs text-gray-500">{authData.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}

      </nav>
      <div className="text-center py-16 bg-[#e0e7ff]">
        <p className="font-bold text-[44px] text-[#303030] mb-2">
          Find &amp; Book Professional Services
        </p>

        <p className="text-[20px] text-gray-600 max-w-[700px] mx-auto text-center mb-8">
          Connect with skilled professionals for all your needs. From home repairs to
          personal training, find trusted service providers in your area.
        </p>

        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center gap-4 w-full max-w-[750px]">
            <input
              type="text"
              placeholder="What service are you looking for?"
              className="flex-1 text-gray-700 text-lg outline-none placeholder-gray-400"
            />
            <button className="bg-[#2196f3] flex items-center justify-center gap-2 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition duration-200 shadow-md">
              <Search size={16} />
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            // onClick={handleBrowseServices}
            className="bg-[#2196f3] hover:bg-blue-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Search size={24} />
            Browse Services
          </button>

          {/* Become a Provider Button */}
          <button
            // onClick={handleBecomeProvider}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
         <Briefcase size={24} variant="Bold" />
            Become a Provider
          </button>
        </div>
      </div>
   <div className="text-center mt-10">
  <h2 className="text-[36px] font-bold text-gray-800 mb-6">
    Popular Service Categories
  </h2>
  <HoverCards />
</div>
<div>
  <ServicesCards/>
</div>

    </div>

  );
}
