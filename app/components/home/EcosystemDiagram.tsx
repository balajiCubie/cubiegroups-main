"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EcosystemDiagram: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          The Cubie Group Ecosystem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-silver mb-12 max-w-3xl mx-auto"
        >
          The future of private investment & banking runs on loops — knowledge, value, innovation, and growth.
        </motion.p>

        {/* Placeholder for the interactive diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-900 rounded-lg shadow-xl border border-neon-cyan p-8 flex items-center justify-center"
        >
          <Image
            src="/heroSectionBackground.jpg" // Placeholder image, replace with actual diagram
            alt="Cubie Group Ecosystem Diagram"
            fill
            className="opacity-50 object-contain" // Use object-contain with fill
          />
          <span className="relative text-2xl font-semibold text-silver">
            Interactive Ecosystem Diagram Placeholder
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export { EcosystemDiagram };
