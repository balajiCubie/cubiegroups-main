'use client';

import Image from 'next/image';
import { MotionH1, MotionP, MotionDiv } from './motion-components';
import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroSection = document.querySelector('.hero-background-grid') as HTMLElement;
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width * 100;
        const y = (e.clientY - rect.top) / rect.height * 100;
        heroSection.style.setProperty('--mouse-x', `${x}%`);
        heroSection.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 hero-background-grid">
        <Image
          src="/heroSectionBackground.jpg"
          alt="Abstract background with glowing grid lines representing interconnectedness and innovation within the Cubie Group ecosystem."
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900  opacity-30 animate-gradient-shift"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-high-contrast-dark"
        >
          One Ecosystem. Infinite Possibilities.
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-balance text-high-contrast-dark"
        >
          We are a synergistic conglomerate of tech, hardware, and creative powerhouses.
          <br className="hidden md:block" /> Together, we build a modular future where the whole is infinitely greater than the sum of its parts.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="/about"
            className="group inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 relative overflow-hidden cta-button"
          >
            Discover Our Vision
            <svg className="ml-2 w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4"
        >
          <a
            href="/ecosystem"
            className="inline-block text-blue-300 hover:text-blue-100 font-medium py-2 px-4 transition-colors duration-300"
          >
            Explore Our Ecosystem
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
