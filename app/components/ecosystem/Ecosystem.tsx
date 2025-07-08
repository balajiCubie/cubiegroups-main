'use client';

import { useState, useMemo } from 'react';
import { MotionDiv, MotionLine, AnimatePresence } from '../shared/motion-components';
import { Briefcase, Lightbulb, PenTool, BarChart, Code, Zap, Layers, Globe } from 'lucide-react'; // Added more icons

interface Subsidiary {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  colorClass: string; // Changed to colorClass for Tailwind
  position: { top: string; left: string; x: string; y: string };
  relations: string[];
}

interface NodeProps {
  sub: Subsidiary;
  onHover: (id: string | null) => void;
  isActive: boolean;
  isRelated: boolean;
}

interface ConnectionLineProps {
  from: Subsidiary;
  to: Subsidiary;
  isVisible: boolean;
}

const subsidiariesData: Subsidiary[] = [
  {
    id: 'cubietech',
    name: 'CubieTech',
    description: 'Pioneering next-gen solutions at the intersection of software and hardware, turning complex challenges into elegant, scalable realities.',
    icon: <Code className="w-8 h-8" />,
    colorClass: 'text-blue-400',
    position: { top: '0%', left: '50%', x: '-50%', y: '-50%' },
    relations: ['cubielabs', 'cubiecreative'],
  },
  {
    id: 'cubiecreative',
    name: 'CubieCreative',
    description: 'Crafting compelling narratives and immersive visual experiences that captivate audiences and define brands in the digital age.',
    icon: <PenTool className="w-8 h-8" />,
    colorClass: 'text-purple-400',
    position: { top: '50%', left: '100%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubieventures'],
  },
  {
    id: 'cubielabs',
    name: 'CubieLabs',
    description: 'Conducting frontier research and exploring emerging technologies to shape the future of human-computer interaction and beyond.',
    icon: <Lightbulb className="w-8 h-8" />,
    colorClass: 'text-green-400',
    position: { top: '100%', left: '50%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubieventures'],
  },
  {
    id: 'cubieventures',
    name: 'CubieVentures',
    description: 'Investing in and empowering the next generation of disruptive startups that are poised to redefine industries and create lasting impact.',
    icon: <Zap className="w-8 h-8" />,
    colorClass: 'text-yellow-400',
    position: { top: '50%', left: '0%', x: '-50%', y: '-50%' },
    relations: ['cubielabs', 'cubiecreative'],
  },
  {
    id: 'cubieconnect',
    name: 'CubieConnect',
    description: 'Facilitating seamless integration and communication across all Cubie Group entities, ensuring a truly unified ecosystem.',
    icon: <Layers className="w-8 h-8" />,
    colorClass: 'text-cyan-400',
    position: { top: '25%', left: '25%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubiecreative', 'cubielabs', 'cubieventures'],
  },
  {
    id: 'cubieglobe',
    name: 'CubieGlobe',
    description: 'Expanding our modular ecosystem globally, connecting diverse markets and cultures with our innovative solutions.',
    icon: <Globe className="w-8 h-8" />,
    colorClass: 'text-pink-400',
    position: { top: '75%', left: '75%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubiecreative', 'cubielabs', 'cubieventures'],
  },
];

const Node = ({ sub, onHover, isActive, isRelated }: NodeProps) => (
  <MotionDiv
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: Math.random() * 0.3 }}
    onMouseEnter={() => onHover(sub.id)}
    onMouseLeave={() => onHover(null)}
    className="absolute"
    style={{ top: sub.position.top, left: sub.position.left, x: sub.position.x, y: sub.position.y }}
  >
    <div
      className={`relative w-36 h-36 rounded-full flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 ease-in-out
        glassmorphism border-opacity-30
        ${isActive ? `border-blue-500 scale-110 shadow-blue-500/50` : 'border-blue-700'}
        ${isRelated && !isActive ? 'border-blue-500 scale-105' : ''}
        hover:!scale-110 hover:border-blue-400 shadow-lg
      `}
    >
      <div className={`mb-1 ${sub.colorClass} transition-transform duration-300 ease-in-out hover:scale-110`}>{sub.icon}</div>
      <span className="text-sm font-semibold text-white mt-2">{sub.name}</span>
    </div>
  </MotionDiv>
);

const ConnectionLine = ({ from, to, isVisible }: ConnectionLineProps) => {
  const p1 = { x: parseFloat(from.position.left), y: parseFloat(from.position.top) };
  const p2 = { x: parseFloat(to.position.left), y: parseFloat(to.position.top) };

  return (
    <MotionLine
      x1={`${p1.x}%`}
      y1={`${p1.y}%`}
      x2={`${p2.x}%`}
      y2={`${p2.y}%`}
      stroke="url(#gradient)" // Use gradient for lines
      strokeWidth="3"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  );
};

export function Ecosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState('cubietech'); // Default selected

  const activeSubsidiary = useMemo(() => subsidiariesData.find(s => s.id === (hoveredId || selectedId)), [hoveredId, selectedId]);
  const relatedIds = useMemo(() => activeSubsidiary?.relations || [], [activeSubsidiary]);

  const connections = useMemo(() => {
    const pairs = new Set<string>();
    subsidiariesData.forEach(sub => {
      sub.relations.forEach(relId => {
        const key = [sub.id, relId].sort().join('-');
        if (!pairs.has(key)) {
          pairs.add(key);
        }
      });
    });
    return Array.from(pairs).map(key => {
      const [id1, id2] = key.split('-');
      const from = subsidiariesData.find(s => s.id === id1);
      const to = subsidiariesData.find(s => s.id === id2);
      return { from, to };
    }).filter((conn): conn is { from: Subsidiary; to: Subsidiary } => !!conn.from && !!conn.to);
  }, []);

  return (
    <section className="py-24 bg-background text-foreground overflow-hidden relative">
      {/* Background animation for modular network feel */}
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Interactive Ecosystem</span> Map
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the dynamic connections between our core entities. Hover over a node to reveal its synergistic relationships and discover the power of our modular network.
          </p>
        </MotionDiv>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[600px]">
          {/* Interactive Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center" onMouseLeave={() => setHoveredId(null)}>
            <div className="relative w-[450px] h-[450px] flex items-center justify-center">
              {/* Central Cubie Group Node */}
              <MotionDiv
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full flex items-center justify-center text-center p-4
                           glassmorphism border border-blue-700 border-opacity-50 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 198, 255, 0.5)' }}
              >
                <span className="font-bold text-3xl text-white text-neon-blue-gradient">Cubie Group</span>
              </MotionDiv>

              <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#0072ff" />
                  </linearGradient>
                </defs>
                {connections.map(({ from, to }) => (
                  <ConnectionLine
                    key={`${from.id}-${to.id}`}
                    from={from}
                    to={to}
                    isVisible={
                      !!(activeSubsidiary && (activeSubsidiary.id === from.id || activeSubsidiary.id === to.id || relatedIds.includes(from.id) && relatedIds.includes(to.id)))
                    }
                  />
                ))}
              </svg>

              {subsidiariesData.map((sub) => (
                <Node
                  key={sub.id}
                  sub={sub}
                  onHover={setHoveredId}
                  isActive={activeSubsidiary?.id === sub.id}
                  isRelated={relatedIds.includes(sub.id)}
                />
              ))}
            </div>
          </div>

          {/* Information Panel */}
          <div className="w-full lg:w-1/2">
            {activeSubsidiary && (
              <AnimatePresence mode="wait">
                <MotionDiv
                  key={activeSubsidiary.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className={`glassmorphism p-8 rounded-xl shadow-lg border border-blue-700 border-opacity-50 transition-colors duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-full bg-gradient-to-br from-blue-800 to-purple-800 text-white`}>
                      {activeSubsidiary.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{activeSubsidiary.name}</h3>
                  </div>
                  <p className="text-lg text-gray-300 min-h-[120px]">{activeSubsidiary.description}</p>
                  <a
                    href={`/companies/${activeSubsidiary.id}`}
                    className="mt-4 inline-flex items-center text-neon-blue-gradient font-semibold hover:underline"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </a>
                </MotionDiv>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
