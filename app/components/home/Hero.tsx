"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* You can replace this with an actual background image or video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance"
        >
          AI-Powered Finance Ecosystem for Every Investment Decision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-silver mb-10 max-w-2xl mx-auto"
        >
          Cubie Group builds the world’s most advanced investment banking SaaS — powering valuation, deal execution, and capital growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/contact" className="bg-finance-blue hover:bg-neon-cyan text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg">
            Request a Demo
          </Link>
          <Link href="/platforms" className="bg-transparent border-2 border-silver hover:border-neon-cyan text-silver hover:text-neon-cyan font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
            Start Building
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
