import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"; // make sure you have lucide-react installed
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'login', 'signup', 'dashboard', 'booking'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Auth form states
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    firstName: '', lastName: '', email: '', password: '', confirmPassword: '', phone: ''
  });
  const [authErrors, setAuthErrors] = useState({});
  const [users, setUsers] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123', phone: '+1234567890' }
  ]);

  const handleLogin = () => {
    setAuthErrors({}); 
    const { email, password } = loginForm;

    if (!email) {
      setAuthErrors(prev => ({ ...prev, email: "Email is required" }));
      return;
    }
    if (!password) {
      setAuthErrors(prev => ({ ...prev, password: "Password is required" }));
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      setCurrentView("dashboard");
    } else {
      setAuthErrors({ general: "Invalid email or password" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Sign in to your account to continue</p>
          </div>

          {authErrors.general && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {authErrors.general}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${authErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your email"
                />
              </div>
              {authErrors.email && <p className="text-red-500 text-sm mt-1">{authErrors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${authErrors.password ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {authErrors.password && <p className="text-red-500 text-sm mt-1">{authErrors.password}</p>}
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold"
            >
              Sign In
            </button>

            <div className="text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                  <button
      onClick={() => navigate("/sign")}
      className="text-purple-600 hover:text-purple-800 font-semibold"
    >
      Sign up here
    </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
