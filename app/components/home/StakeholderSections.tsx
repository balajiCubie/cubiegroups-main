'use client';

import { MotionDiv, MotionA } from '../shared/motion-components';
import { DollarSign, Handshake, Users, Briefcase, Newspaper, Landmark } from 'lucide-react';
import { ArrowRight } from 'lucide-react';


const stakeholders = [
  {
    name: 'Investors',
    description: 'Discover our commitment to sustainable growth, long-term value, and transparent governance.',
    icon: <DollarSign className="w-8 h-8" />,
    link: '/investors',
    color: 'text-green-400',
    borderColor: 'group-hover:border-green-400/50',
  },
  {
    name: 'Partners',
    description: 'Explore strategic alliances and co-innovation opportunities. Let’s build the next generation of modular solutions together.',
    icon: <Handshake className="w-8 h-8" />,
    link: '/partners',
    color: 'text-purple-400',
    borderColor: 'group-hover:border-purple-400/50',
  },
  {
    name: 'Clients',
    description: 'Evaluate our cross-industry solutions and see how our modular technologies can be tailored to your specific needs.',
    icon: <Users className="w-8 h-8" />,
    link: '/solutions',
    color: 'text-blue-400',
    borderColor: 'group-hover:border-blue-400/50',
  },
  {
    name: 'Talent',
    description: 'Join a culture of innovation and purpose. Build your career with us and help shape a modular future.',
    icon: <Briefcase className="w-8 h-8" />,
    link: '/careers',
    color: 'text-yellow-400',
    borderColor: 'group-hover:border-yellow-400/50',
  },
  {
    name: 'Media',
    description: 'Access press kits, media assets, and the latest news. Connect with us to tell the story of a modular world.',
    icon: <Newspaper className="w-8 h-8" />,
    link: '/media',
    color: 'text-orange-400',
    borderColor: 'group-hover:border-orange-400/50',
  },
  {
    name: 'Government & NGOs',
    description: 'Learn about our commitment to sustainability, compliance, and social responsibility. Partner with us for a better future.',
    icon: <Landmark className="w-8 h-8" />,
    link: '/sustainability',
    color: 'text-teal-400',
    borderColor: 'group-hover:border-teal-400/50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function StakeholderSections() {
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
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Universe of Collaboration</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Our ecosystem thrives on connection. We provide dedicated portals for every stakeholder to engage, collaborate, and grow with us.
          </p>
        </MotionDiv>

        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stakeholders.map((stakeholder) => (
            <MotionA
              key={stakeholder.name}
              href={stakeholder.link}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 0 30px rgba(0, 198, 255, 0.5)' }}
              className={`group glassmorphism p-8 rounded-xl border border-blue-700 border-opacity-30 flex flex-col transition-all duration-300 hover:border-blue-500 hover:border-opacity-50`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full bg-gradient-to-br from-blue-800 to-purple-800 text-white ${stakeholder.color}`}>
                  {stakeholder.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{stakeholder.name}</h3>
              </div>
              <p className="text-gray-300 flex-grow mb-6">{stakeholder.description}</p>
              <div
                className="mt-auto flex items-center font-semibold text-neon-blue-gradient"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </MotionA>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}
