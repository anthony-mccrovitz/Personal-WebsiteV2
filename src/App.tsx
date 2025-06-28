import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogPreview from './components/BlogPreview';

const App = () => {
  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainLayout = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <BlogPreview />
    <Resume />
    <Contact />
    <Footer />
  </>
);

const BlogPage = () => (
  <>
    <Blog />
    <Footer />
  </>
)

export default App;