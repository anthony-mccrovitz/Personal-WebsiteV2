import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="mt-24 py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_8px_#2ecc71]">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating, have a question, or just want to say hi? Reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="mailto:anthonymccrovitz02@gmail.com"
              className="flex flex-col items-center gap-2 text-green-700 hover:text-green-500 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/amccrovitz20/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-green-700 hover:text-green-500 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                <Linkedin className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/anthony-mccrovitz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-green-700 hover:text-green-500 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold">GitHub</span>
            </a>
          </div>
          <a
            href="mailto:anthonymccrovitz02@gmail.com"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 text-white rounded-lg font-semibold shadow-lg hover:shadow-[0_0_24px_4px_#2ecc71] transition text-lg"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;