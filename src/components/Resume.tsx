import React from 'react';
import { Download, Home, Cloud, GraduationCap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const timeline = [
  {
    icon: <span role="img" aria-label="Swiss Flag" className="text-2xl">🇨🇭</span>,
    title: 'Software Engineering Intern',
    company: 'Sphery AG, Zurich',
    date: 'Summer 2025 (Current)',
    description: [
      'Developed Unity/C# health gamification apps.',
      'Built ML models for real-time data analysis.',
      'Collaborated in agile, international teams.',
    ],
    skills: ['Unity', 'C#', 'Python', 'SQL', 'Git', 'TablePlus', 'DBeaver', 'Pandas', 'Matplotlib', 'Machine Learning', 'Data Analysis'],
  },
  {
    icon: <Home className="text-green-500 w-7 h-7" />,
    title: 'Founder & CEO',
    company: 'Duneland Home Tech Solutions, LLC',
    date: 'May 2024 – Present',
    description: [
      'Launched a home tech startup, acquired 20+ clients in 3 months.',
      'Designed and installed smart home systems (95% satisfaction rate).',
      'Led all business operations, client relations, and tech solutions.',
    ],
    skills: ['Business Development', 'Product Management', 'Client Relations', 'Tech Solutions', 'Leadership'],
  },
  {
    icon: <Cloud className="text-green-500 w-7 h-7" />,
    title: 'Open Source Contributor',
    company: 'Amazon Web Services (AWS)',
    date: 'Sep 2023 – Nov 2023',
    description: [
      'Selected from top 4% of applicants.',
      'Improved AWS open-source projects (Python, React.js, JavaScript, Java).',
      'Achieved 30% better system performance.',
    ],
    skills: ['Python', 'React.js', 'JavaScript', 'Java', 'AWS'],
  },
  {
    icon: <GraduationCap className="text-green-500 w-7 h-7" />,
    title: 'B.S. Computer Science',
    company: 'Purdue University',
    date: 'Class of 2026',
    description: [
      'Minor: Real Estate, Finance, Entrepreneurship & Innovation',
      'Relevant Coursework: Discrete Math, Programming in C, Computer Architecture, Data Structures & Algorithms, Systems Programming, Software Engineering, Statistics',
    ],
    skills: ['Machine Learning', 'Game Development', 'Software Engineering'],
  },
  {
    icon: <Rocket className="text-green-500 w-7 h-7" />,
    title: 'Looking for Summer 2026 Internship!',
    company: '',
    date: '',
    description: [
      'Eager to learn, grow, and contribute to innovative teams in software engineering, data science, or related fields.',
    ],
    skills: [],
  },
];

const skillIconMap: { [key: string]: React.ReactNode } = {
  Python: <span className="text-green-700">🐍</span>,
  'C#': <span className="text-green-700">#</span>,
  Unity: <span className="text-green-700">🎮</span>,
  SQL: <span className="text-green-700">🗄️</span>,
  Git: <span className="text-green-700">🔧</span>,
  Pandas: <span className="text-green-700">🐼</span>,
  Matplotlib: <span className="text-green-700">📊</span>,
  'Machine Learning': <span className="text-green-700">🤖</span>,
  'Data Analysis': <span className="text-green-700">📈</span>,
  Leadership: <span className="text-green-700">⭐</span>,
  AWS: <span className="text-green-700">☁️</span>,
  React: <span className="text-green-700">⚛️</span>,
  'React.js': <span className="text-green-700">⚛️</span>,
  JavaScript: <span className="text-green-700">🟨</span>,
  Java: <span className="text-green-700">☕</span>,
  'Business Development': <span className="text-green-700">💼</span>,
  'Product Management': <span className="text-green-700">🗂️</span>,
  'Client Relations': <span className="text-green-700">🤝</span>,
  'Tech Solutions': <span className="text-green-700">💡</span>,
  TablePlus: <span className="text-green-700">🗃️</span>,
  DBeaver: <span className="text-green-700">🦫</span>,
};

const Resume = () => {
  return (
    <section id="resume" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">Resume</h2>
            <a
              href="/assets/Anthony McCrovitz Resume.pdf"
              download="Anthony McCrovitz Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 text-white rounded-lg hover:shadow-[0_0_16px_2px_#2ecc71] transition"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>
          <div className="relative border-l-4 border-green-400 pl-8 space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-12 top-2 bg-white dark:bg-gray-900 rounded-full border-4 border-green-400 w-12 h-12 flex items-center justify-center shadow-lg z-10">
                  {item.icon}
                </div>
                <div className="bg-card text-card-foreground rounded-lg shadow-lg border border-green-200 p-6 ml-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg text-green-700">{item.title}</span>
                      {item.company && (
                        <span className="ml-2 text-green-500 font-semibold">{item.company}</span>
                      )}
                    </div>
                    {item.date && (
                      <span className="text-green-400 font-medium">{item.date}</span>
                    )}
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground mb-2">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  {item.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold shadow hover:bg-green-200 transition"
                        >
                          {skillIconMap[skill] || null}
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;