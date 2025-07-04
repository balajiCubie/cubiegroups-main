'use client';

import { useState, useMemo } from 'react';
import { MotionDiv, MotionLine, AnimatePresence } from './motion-components';
import { Briefcase, Lightbulb, PenTool, BarChart } from 'lucide-react';

interface Subsidiary {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  borderColor: string;
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
    icon: <Briefcase className="w-8 h-8" />,
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    position: { top: '0%', left: '50%', x: '-50%', y: '-50%' },
    relations: ['cubielabs', 'cubiecreative'],
  },
  {
    id: 'cubiecreative',
    name: 'CubieCreative',
    description: 'Crafting compelling narratives and immersive visual experiences that captivate audiences and define brands in the digital age.',
    icon: <PenTool className="w-8 h-8" />,
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    position: { top: '50%', left: '100%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubieventures'],
  },
  {
    id: 'cubielabs',
    name: 'CubieLabs',
    description: 'Conducting frontier research and exploring emerging technologies to shape the future of human-computer interaction and beyond.',
    icon: <Lightbulb className="w-8 h-8" />,
    color: 'bg-green-500',
    borderColor: 'border-green-500',
    position: { top: '100%', left: '50%', x: '-50%', y: '-50%' },
    relations: ['cubietech', 'cubieventures'],
  },
  {
    id: 'cubieventures',
    name: 'CubieVentures',
    description: 'Investing in and empowering the next generation of disruptive startups that are poised to redefine industries and create lasting impact.',
    icon: <BarChart className="w-8 h-8" />,
    color: 'bg-yellow-500',
    borderColor: 'border-yellow-500',
    position: { top: '50%', left: '0%', x: '-50%', y: '-50%' },
    relations: ['cubielabs', 'cubiecreative'],
  },
];

const Node = ({ sub, onHover, isActive, isRelated }: NodeProps) => (
  <MotionDiv
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: Math.random() * 0.5 }}
    onMouseEnter={() => onHover(sub.id)}
    className="absolute"
    style={{ top: sub.position.top, left: sub.position.left, x: sub.position.x, y: sub.position.y }}
  >
    <div
      className={`relative w-32 h-32 rounded-full flex flex-col items-center justify-center text-center p-2 cursor-pointer transition-all duration-300 ease-in-out
        ${isActive ? `${sub.color} shadow-2xl scale-110` : 'bg-gray-700'}
        ${isRelated && !isActive ? 'bg-gray-600 scale-105' : ''}
        hover:!scale-110 hover:${sub.color}
      `}
    >
      <div className="text-white mb-1">{sub.icon}</div>
      <span className="text-sm font-semibold text-white">{sub.name}</span>
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
      stroke="rgba(107, 114, 128, 0.5)"
      strokeWidth="2"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, pathLength: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    />
  );
};

export function Ecosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState('cubietech');

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
    <section className="py-24 bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Interactive Ecosystem Map</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore the synergies between our subsidiaries. Hover over a node to see its connections and discover how we build a modular future together.
          </p>
        </MotionDiv>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[600px]">
          {/* Interactive Visualization */}
          <div className="w-full lg:w-1/2 flex justify-center items-center" onMouseLeave={() => setHoveredId(null)}>
            <div className="relative w-96 h-96">
              <MotionDiv
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gray-900/50 rounded-full flex items-center justify-center text-center p-4 border-2 border-gray-700"
                whileHover={{ scale: 1.1 }}
              >
                <span className="font-bold text-2xl text-white">Cubie Group</span>
              </MotionDiv>

              <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                {connections.map(({ from, to }) => (
                  <ConnectionLine
                    key={`${from.id}-${to.id}`}
                    from={from}
                    to={to}
                    isVisible={
                      !!(activeSubsidiary && (activeSubsidiary.id === from.id || activeSubsidiary.id === to.id))
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
                  className={`bg-gray-900 p-8 rounded-xl shadow-lg border-t-4 ${activeSubsidiary.borderColor} transition-colors duration-300`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`text-white p-3 rounded-full ${activeSubsidiary.color}`}>
                      {activeSubsidiary.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{activeSubsidiary.name}</h3>
                  </div>
                  <p className="text-lg text-gray-300 min-h-[120px]">{activeSubsidiary.description}</p>
                </MotionDiv>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
