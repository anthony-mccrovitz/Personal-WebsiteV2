import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Resume</h2>
            <a
              href="/assets/Anthony McCrovitz Resume.pdf"
              download="Anthony McCrovitz Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Java</li>
                    <li>C++</li>
                    <li>SQL</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technologies</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>React/Next.js</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>TensorFlow</li>
                    <li>Docker</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Areas of Focus</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li>Machine Learning</li>
                    <li>Game Development</li>
                    <li>Full Stack Development</li>
                    <li>Data Structures & Algorithms</li>
                    <li>System Design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold">Software Engineering & ML/Game Dev Intern - Sphery</h4>
                    <span className="text-gray-600 dark:text-gray-400">Summer 2024</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upcoming internship in Switzerland, focusing on machine learning and game development solutions.
                    Will be working on innovative VR fitness games and ML-powered user analytics.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Purdue University</h4>
                  <span className="text-gray-600 dark:text-gray-400">Expected Dec 2026</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Science in Computer Science
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Focus areas: Machine Learning, Game Development, Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;