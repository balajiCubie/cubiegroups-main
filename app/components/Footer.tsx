'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MotionFooter, MotionDiv } from './motion-components';
import { useTheme } from '../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Defines the navigation links for the footer.
 * Each object contains a 'name' for display and an 'href' for the link destination.
 */
const navigationLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Sectors', href: '/sectors' },
  { name: 'Innovation Hub', href: '/innovation' },
  { name: 'Investor Relations', href: '/investors' },
  { name: 'Careers', href: '/careers' },
  { name: 'Newsroom', href: '/newsroom' },
  { name: 'Blog Insights', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Sustainability', href: '/investors/esg' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
];

const legalLinks = [
  { name: 'Terms of Use', href: '/terms-of-use' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
  { name: 'Legal Notice', href: '/legal-notice' },
];

const ecosystemPartners = [
  { name: 'CubieTech', description: 'Pioneering AI & Software Solutions', href: '/subsidiaries/cubietech', logo: '/logos/cubietech.svg' },
  { name: 'CubieHardware', description: 'Advanced Manufacturing & Robotics', href: '/subsidiaries/cubiehardware', logo: '/logos/cubiehardware.svg' },
  { name: 'CubieCreative', description: 'Digital Experiences & Design', href: '/subsidiaries/cubiecreative', logo: '/logos/cubiecreative.svg' },
  { name: 'CubieHealth', description: 'Innovating Healthcare Technologies', href: '/subsidiaries/cubiehealth', logo: '/logos/cubiehealth.svg' },
  { name: 'CubieEnergy', description: 'Sustainable Energy Solutions', href: '/subsidiaries/cubieenergy', logo: '/logos/cubieenergy.svg' },
];

const latestUpdates = [
  { title: 'New Joint Venture Announced', date: 'July 2025', href: '/newsroom/jv-announced' },
  { title: 'Q2 Earnings Report Released', date: 'June 2025', href: '/investors/q2-earnings' },
  { title: 'Innovation Challenge Winners', date: 'May 2025', href: '/innovation/challenge-winners' },
];

const trustBadges = [
  { name: 'ISO 9001 Certified', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' }, // Checkmark in circle
  { name: 'ESG Compliant', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.08L18.07 5 12 6.92 5.93 5 12 3.08zM12 19.93c-3.59-1.1-6.4-5.06-6.4-9.93V6.3L12 3.3l6.4 3.01v3.72c0 4.87-2.81 8.83-6.4 9.93z' }, // Shield
  { name: 'Industry Leader', icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' }, // User group
];

const officeLocations = [
  { name: 'Global HQ', location: 'Innovation City, USA', link: '/global-contact/office-map#hq' },
  { name: 'Europe Office', location: 'Berlin, Germany', link: '/global-contact/office-map#europe' },
  { name: 'Asia Pacific', location: 'Singapore', link: '/global-contact/office-map#asia' },
];

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.953v5.66H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.013c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.439H3.555V9.092h3.564v11.359z' },
  { name: 'X/Twitter', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.758 11.24H14.68l-5.21-6.693L3.375 21.75H.967l7.244-8.31L0 2.25h7.545l4.637 5.905L18.244 2.25zm-2.88 17.463l-4.773-6.188-3.53-4.557L2.754 2.75H4.87l4.148 5.34 5.21 6.693 4.774 6.188h-2.064z' },
  { name: 'YouTube', href: '#', icon: 'M19.612 5.33C19.4 4.59 18.79 4 18.05 3.78 16.5 3.33 12 3.33 12 3.33s-4.5 0-6.05.45C5.21 4 4.6 4.59 4.388 5.33 3.93 6.88 3.93 12 3.93 12s0 5.12.458 6.67c.212.74.822 1.33 1.562 1.55C7.5 20.67 12 20.67 12 20.67s4.5 0 6.05-.45c.74-.22 1.35-.81 1.562-1.55.458-1.55.458-6.67.458-6.67s0-5.12-.458-6.67zM10.75 15.25V8.75L15.5 12l-4.75 3.25z' },
  { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0 2.163c-3.204 0-3.584.012-4.85.07-2.715.124-3.96 1.42-4.037 4.037-.058 1.265-.07 1.644-.07 4.85s.012 3.584.07 4.85c.077 2.616 1.322 3.913 4.037 4.037 1.265.058 1.644.07 4.85.07s3.584-.012 4.85-.07c2.715-.124 3.96-1.42 4.037-4.037.058-1.265.07-1.644.07-4.85s-.012-3.584-.07-4.85c-.077-2.616-1.322-3.913-4.037-4.037-1.265-.058-1.644-.07-4.85-.07zm0 3.627c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 2.163c1.289 0 2.337 1.048 2.337 2.337s-1.048 2.337-2.337 2.337-2.337-1.048-2.337-2.337 1.048-2.337 2.337-2.337zm6.406-5.613c-.81 0-1.47.659-1.47 1.47s.66 1.47 1.47 1.47c.81 0 1.47-.659 1.47-1.47s-.66-1.47-1.47-1.47z' },
];

/**
 * Footer component for the Cubie Group's website.
 * Includes navigation, social links, and copyright information.
 * Utilizes Framer Motion for subtle entry animations.
 */

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'success', 'error', ''

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      console.log('Newsletter signup:', { email, gdprConsent });
      setNewsletterStatus('success');
      setEmail('');
      setGdprConsent(false);
      setTimeout(() => setNewsletterStatus(''), 3000); // Clear status after 3 seconds
    } else {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionFooter
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 relative"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top Section: Logo + Brand Tagline & Newsletter Signup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800 mb-8">
          {/* Brand Info & Statement */}
          <MotionDiv variants={itemVariants}>
            <Link href="/" className="flex items-center space-x-2 mb-4 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" aria-label="Cubie Group Home">
              <svg className="w-10 h-10 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.75-6.75z"></path>
                <line x1="16" y1="8" x2="2" y2="22"></line>
                <line x1="17.5" y1="15" x2="9" y2="15"></line>
              </svg>
              <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Cubie Group</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-base transition-colors duration-300 max-w-md">
              Cubie Group — Building a Modular Future, One Block at a Time.
            </p>
          </MotionDiv>

          {/* Interactive Newsletter Module */}
          <MotionDiv variants={itemVariants} className="flex flex-col justify-end">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
              Join Our Modular World
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Insights & updates from our modular world, delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-base rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                  required
                />
                <label htmlFor="gdprConsent" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  I agree to the <Link href="/privacy-policy" className="underline hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
              >
                Subscribe
              </button>
              <AnimatePresence>
                {newsletterStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-600 dark:text-green-400 text-sm mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
                {newsletterStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-600 dark:text-red-400 text-sm mt-2"
                  >
                    Please enter a valid email and accept the privacy policy.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </MotionDiv>
        </div>

        {/* Middle Section: Ecosystem, Site Map, Latest News, Offices, ESG */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-gray-200 dark:border-gray-800 mb-8">
          {/* Dynamic Ecosystem Showcase */}
          <MotionDiv variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Our Ecosystem
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {ecosystemPartners.map((partner) => (
                <Link
                  key={partner.name}
                  href={partner.href}
                  className="group block p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800"
                  aria-label={`Learn more about ${partner.name}`}
                >
                  {/* Placeholder for actual logo image */}
                  <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                    <span className="text-gray-600 dark:text-gray-300 text-xs font-bold">{partner.name.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {partner.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {partner.description}
                  </p>
                </Link>
              ))}
            </div>
          </MotionDiv>

          {/* Mini Site Map / Mega Links */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Site Map
            </h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Latest Updates Snippet */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Latest Updates
            </h3>
            <ul className="space-y-3">
              {latestUpdates.map((update) => (
                <li key={update.title}>
                  <Link href={update.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
                    <span className="font-medium">{update.title}</span> | <span className="text-xs">{update.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/newsroom" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              View all news →
            </Link>
          </MotionDiv>

          {/* Regional/Global Mini Locator */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Our Offices
            </h3>
            <ul className="space-y-3 mb-4">
              {officeLocations.map((office) => (
                <li key={office.name}>
                  <Link href={office.link} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md">
                    <span className="font-medium">{office.name}</span>: {office.location}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/global-contact/office-map" className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors">
              View all offices →
            </Link>
          </MotionDiv>
        </div>

        {/* Bottom Section: Trust Badges, Social Icons, Legal Links, Sustainability */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {/* Trust & Recognition Row */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Trust & Recognition
            </h3>
            <div className="flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div key={badge.name} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={badge.icon}></path>
                  </svg>
                  <span className="text-sm">{badge.name}</span>
                </div>
              ))}
            </div>
          </MotionDiv>

          {/* Social & Community Row */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 transform hover:scale-125 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={link.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </MotionDiv>

          {/* Legal Links */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md" target="_blank" rel="noopener noreferrer">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Sustainability Commitment Badge & Theme Toggle */}
          <MotionDiv variants={itemVariants} className="flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4 transition-colors duration-300">
                Our Commitment
              </h3>
              <Link href="/investors/esg" className="group block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800">
                <div className="flex items-center space-x-3">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-3.04 1.54-5.78 4-7.48V10h3V4.07c2.46 1.7 4 4.44 4 7.48 0 4.08-3.05 7.44-7 7.93z"></path>
                  </svg>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Proudly advancing ESG & sustainability
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      across our ecosystem.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex justify-center lg:justify-end">
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h1M3 12H2m15.325-6.675l.707-.707M6.675 17.325l-.707.707M17.325 17.325l.707.707M6.675 6.675l-.707-.707M12 18a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </MotionDiv>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cubie Group. All rights reserved.</p>
        </div>
      </div>
    </MotionFooter>
  );
};

export default Footer;
