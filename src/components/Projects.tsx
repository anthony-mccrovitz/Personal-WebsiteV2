import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: "Duneland Home Tech Solutions Company Website",
    description: "I built a website for my company that provides home technology solutions. I used React, Supabase, and Python to build the website.",
    image: "/assets/dths_website.png",
    tags: ["React", "Supabase", "Python", "TypeScript"],
    github: "https://github.com/anthony-mccrovitz/duneland-hometech-website",
    demo: "https://www.dunelandhometech.com/"
  },
  {
    title: "MLB WAR Prediction",
    description: "Neural network model for predicting MLB player performance using advanced statistics.",
    image: "/assets/Mlb_war_pred.jpg",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "https://github.com/anthony-mccrovitz/mlb_war_prediction",
    demo: null
  },
  {
    title: "Stock Price Prediction",
    description: "Predicting stock prices using machine learning models.",
    image: "./assets/Stock_price_pred.png",
    tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    github: "https://github.com/anthony-mccrovitz/Stock-Price-Prediction",
    demo: null
  },
   {
    title: "ArmDecl",
    description: "ArmDecl is a web application that allows users to convert ARM assembly code into HTML and CSS.",
    image: "/assets/arm-decl.png",
    tags: ["Next.js", "Node.js", "Tailwind", "TypeScript"],
    github: "https://github.com/anthony-mccrovitz/arm-decl",
    demo: "https://arm-decl.vercel.app/"
  },
  {
    title: "Metaverse Madness",
    description: "Explore the metaverse with this interactive 3D experience.",
    image: "/assets/Metaverse_Madness.png",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/anthony-mccrovitz/Metaverse-Madness",
    demo: "https://metaverse-madness-nine.vercel.app/"
  },
  {
    title: "Airbnb Clone",
    description: "Full-stack Airbnb clone with user authentication, property listings, and booking functionality.",
    image: "/assets/Airbnb_Clone.png",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript"],
    github: "https://github.com/anthony-mccrovitz/Airbnb-Clone",
    demo: "https://airbnb-clone-website-jet.vercel.app/"
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
    <motion.section 
      id="projects" 
      className="py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">Featured Projects</h2>
        
        <div className="relative">
          <button
            onClick={prevPage}
            className="absolute -top-16 right-16 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
          <button
            onClick={nextPage}
            className="absolute -top-16 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg border-2 border-green-400 flex flex-col transform hover:scale-105 hover:shadow-[0_0_32px_8px_#2ecc71] transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-border">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 hover:text-green-500 transition-colors">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-700 hover:text-green-500 transition-colors">
                      <ExternalLink className="w-5 h-5" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;