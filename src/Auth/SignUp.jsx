import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle, Eye, EyeOff } from "lucide-react";
import Api from '../../src/Api';

const SignUp = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    name: "", email: "", password: "", confirmPassword: "", phone: ""
  });
  const [authErrors, setAuthErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = async () => {
    setAuthErrors({});
    const { name, email, password, confirmPassword, phone } = signupForm;

    let errors = {};
    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    if (!phone) errors.phone = "Phone is required";
    if (!password) errors.password = "Password is required";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

    if (Object.keys(errors).length > 0) {
      setAuthErrors(errors);
      return;
    }

    try {
      const res = await Api.post("/api/users/register", { name, email, phone, password });
      console.log(res,"response")
      alert("Signup successful! Please login.");
      localStorage.setItem("token", res.data.token);
      navigate("/login");
    } catch (error) {
      setAuthErrors({ general: error.response?.data?.message || "Signup failed" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p className="text-gray-600">Join us and start booking premium services</p>
          </div>

          {authErrors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {authErrors.general}
            </div>
          )}

          <div className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={signupForm.name}
                onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {authErrors.name && <p className="text-red-500 text-sm mt-1">{authErrors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                value={signupForm.email}
                onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {authErrors.email && <p className="text-red-500 text-sm mt-1">{authErrors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone"
                value={signupForm.phone}
                onChange={(e) => setSignupForm({ ...signupForm, phone: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {authErrors.phone && <p className="text-red-500 text-sm mt-1">{authErrors.phone}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={signupForm.password}
                onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              {authErrors.password && <p className="text-red-500 text-sm mt-1">{authErrors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={signupForm.confirmPassword}
                onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff /> : <Eye />}
              </button>
              {authErrors.confirmPassword && <p className="text-red-500 text-sm mt-1">{authErrors.confirmPassword}</p>}
            </div>

            <button
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
