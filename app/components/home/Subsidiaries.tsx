'use client';

import { MotionDiv } from '../shared/motion-components';
import { Briefcase, PenTool, Lightbulb, BarChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const subsidiaries = [
  {
    name: 'CubieTech',
    description: 'Engineering the building blocks of tomorrow’s technology, from embedded systems to enterprise-level software.',
    icon: <Briefcase className="w-10 h-10" />,
    slug: 'cubietech',
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-400/50',
  },
  {
    name: 'CubieCreative',
    description: 'Crafting compelling brand narratives and immersive digital experiences that resonate and inspire.',
    icon: <PenTool className="w-10 h-10" />,
    slug: 'cubiecreative',
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-400/50',
  },
  {
    name: 'CubieLabs',
    description: 'Venturing into the unknown, our R&D hub pioneers frontier technologies like AI, quantum computing, and beyond.',
    icon: <Lightbulb className="w-10 h-10" />,
    slug: 'cubielabs',
    color: 'text-green-400',
    borderColor: 'hover:border-green-400/50',
  },
  {
    name: 'CubieVentures',
    description: 'Fueling the next wave of disruption by investing in and mentoring visionary startups poised for global impact.',
    icon: <BarChart className="w-10 h-10" />,
    slug: 'cubieventures',
    color: 'text-yellow-400',
    borderColor: 'hover:border-yellow-400/50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function Subsidiaries() {
  return (
    <section className="py-24 bg-background text-foreground relative overflow-hidden">
      {/* Subtle background animation for modular network feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Cubie Blocks</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Diverse in expertise, united in vision. Explore the individual companies that form our powerful, interconnected ecosystem.
          </p>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {subsidiaries.map((sub) => (
            <MotionDiv key={sub.name} variants={cardVariants}>
              <Link href={`/subsidiaries/${sub.slug}`} passHref>
                <MotionDiv
                  whileHover={{ y: -8, boxShadow: '0 0 30px rgba(0, 198, 255, 0.5)' }}
                  className={`group glassmorphism p-8 rounded-xl border border-blue-700 border-opacity-30 flex flex-col h-full transition-all duration-300 hover:border-blue-500 hover:border-opacity-50`}
                >
                  <div className="flex items-center gap-5 mb-5">
                    <div className={`transition-colors duration-300 ${sub.color}`}>
                      {sub.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{sub.name}</h3>
                  </div>
                  <p className="text-gray-300 flex-grow mb-6">{sub.description}</p>
                  <div className="mt-auto flex items-center font-semibold text-neon-blue-gradient">
                    Explore
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </MotionDiv>
              </Link>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
