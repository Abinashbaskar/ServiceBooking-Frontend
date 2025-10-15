import React, { useState ,useEffect} from "react";
import ServiceDetailsModels from "./ServiceDetailsModels";
const ServicesCards = () => {
  const [category, setCategory] = useState("All Categories");
  const [price, setPrice] = useState("All Prices");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
  document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  return () => {
    document.body.style.overflow = "auto";
  };
}, [isModalOpen]);


  const services = [
    {
      id: 1,
      title: "Event Photography",
      category: "Photography",
      description:
        "Professional photography services for weddings, birthdays, corporate events, and special occasions.",
      provider: "Service Professional",
      rating: 4.5,
      bookings: 92,
      duration: "240 min",
      location: "Travel anywhere in the city",
      price: 200,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=500&q=80",
    },
    {
      id: 2,
      title: "Math & Science Tutoring",
      category: "Tutoring",
      description:
        "Experienced tutor offering help with mathematics and science subjects for all grade levels.",
      provider: "EduMaster Academy",
      rating: 4.8,
      bookings: 112,
      duration: "90 min",
      location: "Online or in-person",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80",
    },
    {
      id: 3,
      title: "Hair & Makeup Services",
      category: "Beauty",
      description:
        "Professional hair styling and makeup for special events, weddings, and photoshoots.",
      provider: "Glam Studio",
      rating: 4.9,
      bookings: 145,
      duration: "120 min",
      location: "At your location",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=500&q=80",
    },
  ];

  const handleViewDetails = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header + Filters */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-12 pb-8">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Available Services
          </h1>

          {/* Filters + Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-white w-full sm:w-auto"
            >
              <option>All Categories</option>
              <option>Home Services</option>
              <option>Professional Services</option>
              <option>Beauty & Wellness</option>
              <option>Tech Support</option>
            </select>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer bg-white w-full sm:w-auto"
            >
              <option>All Prices</option>
              <option>Under $50</option>
              <option>$50 - $100</option>
              <option>$100 - $200</option>
              <option>Above $200</option>
            </select>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                    {service.category}
                  </span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-lg font-bold text-blue-600">
                    ${service.price}
                  </span>
                  <button
                    onClick={() => handleViewDetails(service)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <ServiceDetailsModels
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default ServicesCards;

