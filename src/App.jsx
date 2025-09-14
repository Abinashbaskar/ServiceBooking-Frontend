import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

const App = () => {
  const [users, setUsers] = useState([
    { 
      id: 1, 
      firstName: "John", 
      lastName: "Doe", 
      email: "john@example.com", 
      password: "password123", 
      phone: "+1234567890" 
    }
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/login" />} />

      <Route 
        path="/login" 
        element={<Login users={users} setCurrentUser={setCurrentUser} />} 
      />

      <Route 
        path="/sign" 
        element={<SignUp users={users} setUsers={setUsers} />} 
      />
    </Routes>
  );
};

export default App;
