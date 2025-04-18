import React, { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">AM</a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 dark:text-gray-200">About</a>
            <a href="#projects" className="hover:text-blue-600 dark:text-gray-200">Projects</a>
            <a href="#resume" className="hover:text-blue-600 dark:text-gray-200">Resume</a>
            <a href="#contact" className="hover:text-blue-600 dark:text-gray-200">Contact</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
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
              <a href="#about" className="hover:text-blue-600 dark:text-gray-200">About</a>
              <a href="#projects" className="hover:text-blue-600 dark:text-gray-200">Projects</a>
              <a href="#resume" className="hover:text-blue-600 dark:text-gray-200">Resume</a>
              <a href="#contact" className="hover:text-blue-600 dark:text-gray-200">Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;