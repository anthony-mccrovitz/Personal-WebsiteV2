import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-20 bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">About Me</h2>
          
          <div className="prose dark:prose-invert max-w-none text-center">
            <p className="text-lg mb-6 text-muted-foreground">
              I'm Anthony, a Purdue CS student passionate about coding, entrepreneurship, and continuous growth. Currently interning in Zurich at Sphery AG, working on Unity and ML projects. Outside work, I'm into bodybuilding, traveling, skiing, and cheering on the St Louis Cardinals, Indiana Pacers, and Tottenham Hotspur.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Software Development</h3>
                <p className="text-muted-foreground">
                  Proficient in Python, React, Firebase, and Git with a focus on clean, efficient code
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">AI/ML</h3>
                <p className="text-muted-foreground">
                  Exploring machine learning applications and neural networks
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Entrepreneurship</h3>
                <p className="text-muted-foreground">
                  Founded Duneland Home Tech Solutions: launched a home tech startup, provided smart solutions, and led all business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;