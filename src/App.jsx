import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Dashboard from "./Categories/Dashboard";

const App = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [users, setUsers] = useState([]);

  return (
    <Routes>
      {/* Default redirect to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      {/* Login page */}
      <Route
        path="/login"
        element={
          currentUser ? (
            <Navigate to="/dashboard" />
          ) : (
            <Login setCurrentUser={setCurrentUser} />
          )
        }
      />

      {/* Signup page */}
      <Route path="/signup" element={<SignUp users={users} setUsers={setUsers} />} />

      {/* Dashboard page (protected route) */}
      <Route
        path="/dashboard"
        element={
          currentUser ? (
            <Dashboard currentUser={currentUser} setCurrentUser={setCurrentUser} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default App;
