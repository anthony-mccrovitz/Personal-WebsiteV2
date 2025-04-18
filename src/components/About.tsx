import React from 'react';
import { Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              I'm a Computer Science student at Purdue University, set to graduate in December 2026. 
              Currently, I'm building CodeSteps, a gamified coding education startup that makes learning 
              Data Structures and Algorithms engaging and accessible.
            </p>

            <p className="text-lg mb-6">
              My journey includes valuable experience at Sphery in Switzerland, where I contributed to 
              innovative projects that pushed the boundaries of what's possible in technology.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold mb-2">Software Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Proficient in Python, React, Firebase, and Git with a focus on clean, efficient code
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold mb-2">AI/ML</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring machine learning applications and neural networks
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold mb-2">Entrepreneurship</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building CodeSteps to revolutionize CS education
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;