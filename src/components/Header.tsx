import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const NavLinks = () => (
    <>
      <a href="/#about" className="hover:text-green-600 dark:text-gray-200">About</a>
      <a href="/#projects" className="hover:text-green-600 dark:text-gray-200">Projects</a>
      <Link to="/blog" className="hover:text-green-600 dark:text-gray-200">Blog</Link>
      <a href="/#resume" className="hover:text-green-600 dark:text-gray-200">Resume</a>
      <a href="/#contact" className="hover:text-green-600 dark:text-gray-200">Contact</a>
    </>
  );

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600 dark:text-green-400">AM</Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 mr-2"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 py-4 px-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header; 