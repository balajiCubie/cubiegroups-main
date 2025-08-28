"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PlatformCardProps {
  title: string;
  description: string;
  icon?: string; // Placeholder for icon path
  href: string;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ title, description, icon, href }) => {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-lg flex flex-col items-center text-center hover:border-finance-blue transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {icon && (
        <div className="mb-4">
          {/* Placeholder for actual icon */}
          <div className="w-16 h-16 bg-neon-cyan rounded-full flex items-center justify-center text-black text-3xl font-bold">
            {title.charAt(0)}
          </div>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-silver mb-4">{description}</p>
      <Link href={href} className="text-finance-blue hover:text-neon-cyan font-semibold flex items-center">
        Learn More
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </Link>
    </motion.div>
  );
};

const Platforms: React.FC = () => {
  const platformData = [
    {
      title: "Valuation SaaS",
      description: "AI-driven valuations for deals, assets, and funds.",
      href: "/platforms/valuation-saas",
    },
    {
      title: "M&A Advisory SaaS",
      description: "Smart deal execution powered by AI insights.",
      href: "/platforms/m-a-advisory-saas",
    },
    {
      title: "Asset Management SaaS",
      description: "Manage capital and returns at enterprise scale.",
      href: "/platforms/asset-management-saas",
    },
    {
      title: "R&D Hub",
      description: "Reinvestment, innovation, and strategic growth engine.",
      href: "/platforms/r-d-hub",
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
          Our Platforms
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platformData.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Platforms };
