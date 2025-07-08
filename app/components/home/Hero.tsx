'use client';

import Image from 'next/image';
import { MotionH1, MotionP, MotionDiv } from '../shared/motion-components';
import heroBackground from '../../../public/heroSectionBackground.jpg'; // Import the image

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-foreground overflow-hidden">
      {/* Background Image with Next.js Image component for optimization */}
      <Image
        src={heroBackground}
        alt="Cubie Group Background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority // Mark as priority for LCP
        className="z-0"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-10 z-10"></div>

      <div className="relative z-30 text-center px-4">

        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Cubie Group:</span>
          <br />
          The Future of Connected Ecosystems
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-balance text-gray-300"
        >
          Unifying innovation, creativity, and ventures into a seamless modular network.
          <br className="hidden md:block" /> Discover how our interconnected entities drive progress and redefine industries.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="/about"
            className="group inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white relative overflow-hidden
                       bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                       transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
          >
            Discover Our Vision
            <svg className="ml-2 w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <a
            href="/careers"
            className="group inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white relative overflow-hidden
                       bg-gray-800 border border-blue-700 border-opacity-50 hover:border-blue-500 hover:bg-gray-700
                       transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/30"
          >
            Explore Careers
            <svg className="ml-2 w-5 h-5 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
