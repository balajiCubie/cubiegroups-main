"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTADuo: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
        >
          There is so much left to build in global finance. Let’s build it together.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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

export { CTADuo };
