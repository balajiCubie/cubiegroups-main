'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-2xl p-12 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Become a Block in Our Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Whether you're a visionary talent, a disruptive startup, or a strategic partner, there's a place for you in our modular world. Let's connect and build the future, one block at a time.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="/careers"
              whileHover={{ scale: 1.05, y: -5 }}
              className="group inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg"
            >
              Explore Careers
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -5 }}
              className="group inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-lg"
            >
              Partner With Us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
