'use client';

import { motion, AnimatePresence } from 'framer-motion';

// Export motion components to be used throughout the application
// This wrapper prevents React Server Components bundler errors
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionSpan = motion.span;
export const MotionA = motion.a;
export const MotionButton = motion.button;
export const MotionImg = motion.img;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionLine = motion.line;
export { AnimatePresence };
