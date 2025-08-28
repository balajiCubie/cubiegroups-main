"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image'; // Import Image component for optimized images

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax effect

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Cinematic Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src="/heroSectionBackground.jpg" // Path to your cinematic background image
          alt="Cubie Group Background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-50" // Darken the image slightly
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance"
        >
          Private Investment & Banking
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-silver mb-10 max-w-2xl mx-auto"
        >
          Cubie Group builds the future of finance with real-time valuation, smart deal execution, and continuous capital growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link href="/request-demo" className="bg-finance-blue hover:bg-neon-cyan text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg shadow-lg">
            Request a Demo
          </Link>
          <Link href="/start-building" className="bg-transparent border-2 border-silver hover:border-neon-cyan text-silver hover:text-neon-cyan font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
            Start Building
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero };
