import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  return (
    <motion.section 
      id="blog-preview" 
      className="py-24 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">Recent Posts</h2>
        <div className="flex flex-col items-center justify-center min-h-[180px]">
          <p className="text-lg text-muted-foreground mb-8">Blog posts coming soon.</p>
          <Link to="/blog">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 text-white shadow-lg h-11 px-8">
              See All Posts
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default BlogPreview; 