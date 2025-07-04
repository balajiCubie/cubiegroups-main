'use client';

import { MotionH1, MotionP, MotionDiv } from './motion-components';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://cubie.co/assets/img/cubie-poster.jpg"
        >
          <source src="https://cubie.co/assets/video/cubie-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <MotionH1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          One Ecosystem. Infinite Possibilities.
        </MotionH1>
        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          We are a synergistic conglomerate of tech, hardware, and creative powerhouses, building a modular future where the whole is infinitely greater than the sum of its parts.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="/about"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Discover Our Vision
          </a>
        </MotionDiv>
      </div>
    </section>
  );
}
