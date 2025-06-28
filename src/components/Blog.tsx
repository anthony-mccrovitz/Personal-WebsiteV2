import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Blog Coming Soon!",
    excerpt: "Stay tuned for upcoming posts about my journey in tech, software development experiences, and insights into building CodeSteps. I'll be sharing my learnings from Purdue CS, and my startup development.",
    date: "Coming Soon",
    readTime: "",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-secondary min-h-[60vh]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">Blog</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card text-card-foreground rounded-lg shadow-lg border-2 border-green-400 p-8 flex flex-col items-center justify-center min-h-[220px]">
            <h3 className="text-2xl font-bold mb-4 text-green-700">Blog posts coming soon!</h3>
            <p className="text-muted-foreground text-center">Check back soon for my latest thoughts, tutorials, and project write-ups.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;