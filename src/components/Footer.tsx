import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Anthony McCrovitz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;