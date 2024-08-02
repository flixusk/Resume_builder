import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/template-selection'); // Navigate to the template selection page
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="bg-zinc-900 text-white flex flex-col items-center justify-center min-h-screen overflow-auto">
      <h1 className="text-5xl font-bold mb-6">Welcome to Resume Builder</h1>
      <p className="text-xl mb-6">Create your professional resume with ease.</p>
      <div className="flex space-x-4">
        <button
          onClick={handleGetStarted}
          className="bg-white text-zinc-900 px-6 py-3 rounded-full text-lg font-semibold transition transform hover:scale-40 hover:-translate-x-2 hover:-translate-y-2"
        >
          Get Started
        </button>
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold transition transform hover:scale-40 hover:-translate-x-2 hover:-translate-y-2"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
