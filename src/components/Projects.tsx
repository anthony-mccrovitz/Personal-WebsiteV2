import React, { useState } from 'react';
import { Github, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

const projects = [
  {
    title: "CodeSteps",
    description: "Duolingo-style platform for learning Data Structures and Algorithms. Built with React, Firebase, and Python.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Supabase", "Python", "TypeScript"],
    github: "https://github.com/anthony-mccrovitz/codesteps",
    demo: "https://codesteps.dev"
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
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5" />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;