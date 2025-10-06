import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { authData, logout } = useAuth();
  const navigate = useNavigate();

  if (!authData) return null;

  return (
    <div className="p-6">
      <h1>Welcome, {authData.name}</h1>
      <p>Email: {authData.email}</p>
      <p>UserID: {authData.userid}</p>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
