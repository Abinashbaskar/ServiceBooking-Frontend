import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setCurrentUser(null);
    navigate("/login");
  };

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {currentUser.name}!</h1>
        <p className="text-gray-700 mb-6">Email: {currentUser.email}</p>
        <p className="text-gray-700 mb-6">UserID: {currentUser.userid}</p>

        <button
          onClick={handleLogout}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:shadow-lg transition-shadow font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
