'use client';

import { motion } from 'framer-motion';

const subsidiaries = [
  { name: 'CubieTech', description: 'Innovating at the intersection of software and hardware.' },
  { name: 'CubieCreative', description: 'Crafting compelling narratives and visual experiences.' },
  { name: 'CubieLabs', description: 'Exploring the future of human-computer interaction.' },
];

export function Subsidiaries() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Our Subsidiaries
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {subsidiaries.map((sub, index) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4">{sub.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{sub.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
