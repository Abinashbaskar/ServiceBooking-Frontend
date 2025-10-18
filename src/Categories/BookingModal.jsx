import React, { useState } from "react";
import Modal from "react-modal";
import { X, ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";

Modal.setAppElement("#root");

const BookingModal = ({ isOpen, onClose, service }) => {
  const [selectedDate, setSelectedDate] = useState(4);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(10); // November (0-indexed)
  const [currentYear, setCurrentYear] = useState(2025);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM",
    "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM"
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Booking confirmed for ${monthNames[currentMonth]} ${selectedDate}, ${currentYear} at ${selectedTime}`);
      onClose();
    } else {
      alert("Please select both date and time");
    }
  };

  const renderCalendar = () => {
    const days = [];
    const totalSlots = Math.ceil((firstDayOfMonth + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalSlots; i++) {
      const dayNumber = i - firstDayOfMonth + 1;
      const isValidDay = dayNumber > 0 && dayNumber <= daysInMonth;
      
      days.push(
        <button
          key={i}
          onClick={() => isValidDay && setSelectedDate(dayNumber)}
          disabled={!isValidDay}
          className={`
            h-12 rounded-lg text-sm font-medium transition-all
            ${!isValidDay ? 'invisible' : ''}
            ${selectedDate === dayNumber 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'text-blue-500 hover:bg-blue-50'
            }
          `}
        >
          {isValidDay ? dayNumber : ''}
        </button>
      );
    }
    return days;
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Booking Modal"
      overlayClassName="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50"
      className="bg-white rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative outline-none"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h2 className="text-xl font-bold text-gray-900">Book Service</h2>
        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Section - Service Details */}
        <div className="lg:w-2/5 p-6 border-r">
          <h3 className="text-base font-bold text-gray-900 mb-3">Service Details</h3>
          
          {/* Service Card */}
          <div className="mb-4">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=200&fit=crop"
              alt="Event Photography"
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <h4 className="font-semibold text-sm text-gray-900 mb-1">
              {service?.title || "Event Photography"}
            </h4>
            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
              Professional photography services for weddings, birthdays, corporate events, and special occasions....
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-600">
              <Clock className="w-3.5 h-3.5" />
              <span>240 minutes</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700">Service Price:</span>
              <span className="text-lg font-bold text-blue-500">$200</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-600">Service Fee (5%):</span>
              <span className="text-gray-700">$10.00</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="font-bold text-sm text-gray-900">Total:</span>
              <span className="text-lg font-bold text-blue-500">$210.00</span>
            </div>
          </div>

          {/* Service Provider */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-2">Service Provider</h4>
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="Provider"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm text-gray-900">Service Professional</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-0.5">(92)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Date & Time Selection */}
        <div className="lg:w-3/5 p-6">
          <h3 className="text-base font-bold text-gray-900 mb-4">Select Date & Time</h3>

          {/* Calendar */}
          <div className="mb-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handlePrevMonth}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>
              <h4 className="text-base font-bold text-gray-900">
                {monthNames[currentMonth]} {currentYear}
              </h4>
              <button
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1.5 mb-1.5">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center text-xs font-semibold text-gray-600 py-1.5">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1.5">
              {renderCalendar()}
            </div>
          </div>

          {/* Available Times */}
          <div>
            <h4 className="font-semibold text-sm text-gray-900 mb-3">Available Times</h4>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`
                    py-2 px-3 rounded-lg text-xs font-medium transition-all
                    ${selectedTime === time
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-sm hover:bg-blue-600 transition-colors shadow-lg"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default BookingModal;