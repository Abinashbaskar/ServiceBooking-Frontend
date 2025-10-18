import React, { useState } from "react";
import Modal from "react-modal";
import { X, Star, Clock, MapPin, Calendar, Mail, Gift } from "lucide-react";
import BookingModal from "./BookingModal";

// Set app element for accessibility (required by react-modal)
Modal.setAppElement("#root");

const ServiceDetailsModels = ({ service, isOpen, onCloseServicemodal }) => {
  if (!service) return null;
  const [openBookingModal, setOpenBookingModal] = useState(false);

  const handleCloseBookingModal = () => {
    setOpenBookingModal(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCloseServicemodal}
        contentLabel="Service Details"
        overlayClassName="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50"
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative outline-none"
      >
        {/* Close Button */}
        <button
          onClick={onCloseServicemodal}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 bg-white shadow-md"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Modal Content */}
        <div className="p-8">
          {/* Title */}
          <h2 className="text-[20px] font-bold text-gray-900 mb-6">
            {service.title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded mb-4"
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[12px] rounded-md">
                  repair
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[12px] rounded-md">
                  appliances
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-[12px] rounded-md">
                  maintenance
                </span>
              </div>

              {/* Service Provider */}
              <div className="mt-6">
                <h3 className="text-[14px] font-semibold text-gray-900 mb-3">
                  Service Provider
                </h3>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold flex-shrink-0 text-[14px]">
                    {service.provider.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-[14px]">
                      {service.provider}
                    </h4>
                    <div className="flex items-center gap-1 mb-1 text-[12px]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : i < service.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300 fill-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-gray-600 ml-1">
                        ({service.bookings} bookings)
                      </span>
                    </div>
                    <p className="text-gray-600 text-[12px]">
                      Experienced service provider offering quality services.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 text-[13px] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-500 text-[16px] font-bold">$</span>
                  <h4 className="font-semibold text-gray-900 text-[14px]">Price</h4>
                </div>
                <p className="text-[24px] font-bold text-gray-900">${service.price}</p>
                <p className="text-gray-600 text-[12px]">per hour</p>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900 text-[14px]">Duration</h4>
                </div>
                <p className="text-[20px] font-bold text-gray-900">{service.duration}</p>
                <p className="text-gray-600 text-[12px]">Estimated time</p>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900 text-[14px]">Availability</h4>
                </div>
                <p className="text-gray-700 text-[13px]">Mon-Sat: 8AM-7PM</p>
              </div>

              {/* Location */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-gray-900 text-[14px]">Location</h4>
                </div>
                <p className="text-gray-700 text-[13px]">{service.location}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8">
                <button 
                  onClick={() => setOpenBookingModal(true) } 
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors text-[14px]"
                >
                  <Gift className="w-5 h-5" />
                  Book Now
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-blue-500 text-blue-500 rounded-lg font-medium hover:bg-blue-50 transition-colors text-[14px]">
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <BookingModal
        isOpen={openBookingModal}
        onClose={handleCloseBookingModal}
        service={service}
      />
    </>
  );
};

export default ServiceDetailsModels;