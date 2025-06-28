import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-32 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12 flex justify-center items-center">
            <motion.img
              src="/assets/LinkedIn_PFP.jpg"
              alt="Anthony McCrovitz"
              className="w-48 h-48 rounded-full object-cover border-4 border-green-500 shadow-none"
              style={{ objectPosition: 'center 20%' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 32px 8px #2ecc71', transition: { type: 'spring', stiffness: 300 } }}
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 via-emerald-400 to-green-300 bg-clip-text text-transparent drop-shadow-[0_2px_16px_#2ecc71]">
            Anthony McCrovitz
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            CS Student • Builder • Creator
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Hey, I'm Anthony a Computer Science student at Purdue University. I'm a driven software engineer passionate about building stuff people want and delivering real value. Currently this summer I'm interning at Sphery AG in Zurich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects">
              <Button size="lg">
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline">
                Let's Connect
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;