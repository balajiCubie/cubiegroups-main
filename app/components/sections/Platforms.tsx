"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaChartPie, FaHandshake, FaWallet, FaFlask } from 'react-icons/fa'; // Specific icons for each platform

interface PlatformCardProps {
  title: string;
  description: string;
  icon: IconType; // Use IconType for react-icons
  href: string;
  delay: number;
}

const PlatformCard: React.FC<PlatformCardProps> = ({ title, description, icon: Icon, href, delay }) => {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-lg flex flex-col items-center text-center hover:border-neon-cyan transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="mb-4">
        <Icon className="text-neon-cyan text-5xl" />
      </div>
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
      description: "Smart valuations for real-time insights and strategic decision-making.",
      icon: FaChartPie,
      href: "/platforms/valuation-saas",
    },
    {
      title: "M&A Advisory SaaS",
      description: "Streamlined deal execution with insights, from target identification to closing.",
      icon: FaHandshake,
      href: "/platforms/m-a-advisory-saas",
    },
    {
      title: "Asset Management SaaS",
      description: "Comprehensive capital growth and portfolio management solutions for institutional investors.",
      icon: FaWallet,
      href: "/platforms/asset-management-saas",
    },
    {
      title: "R&D & Innovation Hub",
      description: "Driving future finance engineering through reinvestment, strategic acquisitions, and research.",
      icon: FaFlask,
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
            <PlatformCard key={index} {...platform} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Platforms };
