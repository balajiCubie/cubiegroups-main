"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaNewspaper, FaFileAlt, FaChartBar } from 'react-icons/fa'; // Icons for insights

interface InsightCardProps {
  title: string;
  description: string;
icon: React.ElementType;
  href: string;
  delay: number;
}

const InsightCard: React.FC<InsightCardProps> = ({ title, description, icon: Icon, href, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="glassmorphism p-8 rounded-lg border border-gray-700 hover:border-neon-cyan transition-all duration-300 flex flex-col items-center text-center"
    >
      <Icon className="text-neon-cyan text-5xl mb-4" />
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-silver mb-4">{description}</p>
      <Link href={href} className="text-finance-blue hover:text-neon-cyan font-semibold flex items-center">
        Read More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </Link>
    </motion.div>
  );
};

const Insights: React.FC = () => {
  const insightsData = [
    {
      title: "Blog",
      description: "Explore our latest articles on AI in finance, market trends, and investment strategies.",
      icon: FaNewspaper,
      href: "/blog",
    },
    {
      title: "Reports",
      description: "Download in-depth reports and whitepapers on private investment and banking.",
      icon: FaFileAlt,
      href: "/reports",
    },
    {
      title: "Research Articles",
      description: "Access our cutting-edge research and academic publications in AI and finance.",
      icon: FaChartBar,
      href: "/research",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Insights & Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((insight, index) => (
            <InsightCard key={index} {...insight} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Insights };
