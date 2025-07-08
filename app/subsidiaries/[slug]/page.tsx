import { notFound } from 'next/navigation';
import { MotionSection, MotionDiv, MotionH1, MotionP } from '../../components/shared/motion-components';
import { Briefcase, PenTool, Lightbulb, BarChart, ArrowRight, Zap, Scaling, Infinity, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

const subsidiariesData = {
  cubietech: {
    name: 'CubieTech',
    tagline: 'Engineering the Future, One Component at a Time.',
    description: 'CubieTech is the engineering powerhouse of the Cubie Group, specializing in both cutting-edge software and robust hardware solutions. From IoT devices to scalable cloud architectures, we build the foundational blocks for a smarter, more connected world.',
    icon: <Briefcase className="w-16 h-16" />,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500',
    keyOfferings: [
      'Custom Software Development',
      'Embedded Systems & IoT',
      'Cloud & DevOps Solutions',
      'Hardware Prototyping & Manufacturing',
    ],
    projects: [
      { name: 'Project Titan', description: 'A next-gen IoT platform for industrial automation.' },
      { name: 'Aura OS', description: 'A lightweight, secure operating system for smart devices.' },
    ],
  },
  cubiecreative: {
    name: 'CubieCreative',
    tagline: 'Designing Experiences, Crafting Legacies.',
    description: 'CubieCreative is the storytelling and design arm of the Group. We craft compelling brand identities, immersive digital experiences, and marketing campaigns that captivate audiences and drive engagement in a crowded digital landscape.',
    icon: <PenTool className="w-16 h-16" />,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500',
    keyOfferings: [
      'Branding & Identity Design',
      'UI/UX & Web Design',
      'Content Strategy & Creation',
      '3D & Motion Graphics',
    ],
    projects: [
      { name: 'Rebrand for OmniCorp', description: 'A complete brand overhaul for a Fortune 500 company.' },
      { name: 'VirtuReal', description: 'An award-winning VR experience for a major art museum.' },
    ],
  },
  cubielabs: {
    name: 'CubieLabs',
    tagline: 'Inventing Tomorrow’s Reality.',
    description: 'CubieLabs is the blue-sky research and development center of the Cubie Group. Our scientists and engineers explore frontier technologies, from quantum computing to artificial general intelligence, turning science fiction into tangible innovation.',
    icon: <Lightbulb className="w-16 h-16" />,
    color: 'text-green-400',
    bgColor: 'bg-green-500',
    keyOfferings: [
      'Applied AI & Machine Learning',
      'Quantum Computing Research',
      'Next-Gen Materials Science',
      'Human-Computer Interaction',
    ],
    projects: [
      { name: 'Project Chimera', description: 'A breakthrough in neural interface technology.' },
      { name: 'Quantum Leap', description: 'Developing a proprietary quantum encryption algorithm.' },
    ],
  },
  cubieventures: {
    name: 'CubieVentures',
    tagline: 'Investing in the Architects of the Future.',
    description: 'CubieVentures is the strategic investment arm of the Group. We identify, fund, and mentor the most promising startups that align with our vision of a modular future, providing them with the capital and strategic support to achieve global scale.',
    icon: <BarChart className="w-16 h-16" />,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500',
    keyOfferings: [
      'Seed & Series A Funding',
      'Strategic Mentorship',
      'Access to Cubie Ecosystem',
      'Market Entry Support',
    ],
    projects: [
      { name: 'Portfolio Company: InnovateAI', description: 'A fast-growing AI-powered logistics platform.' },
      { name: 'Portfolio Company: BioSynth', description: 'A biotech firm revolutionizing synthetic biology.' },
    ],
  },
};

export default function SubsidiaryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const subsidiary = subsidiariesData[slug as keyof typeof subsidiariesData];

  if (!subsidiary) {
    notFound();
  }

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <MotionSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-32 md:py-48 text-center bg-gray-800"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <MotionDiv
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-block p-6 rounded-full mb-8 ${subsidiary.bgColor}`}
          >
            {subsidiary.icon}
          </MotionDiv>
          <MotionH1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            {subsidiary.name}
          </MotionH1>
          <MotionP
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`text-xl md:text-2xl font-light ${subsidiary.color}`}
          >
            {subsidiary.tagline}
          </MotionP>
        </div>
      </MotionSection>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <MotionDiv
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-blue-500">About {subsidiary.name}</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-12">{subsidiary.description}</p>

            <h3 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-blue-500">Key Offerings</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {subsidiary.keyOfferings.map((offering, index) => (
                <MotionDiv
                  key={offering}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg"
                >
                  <Zap className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{offering}</span>
                </MotionDiv>
              ))}
            </div>

            <h3 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-blue-500">Featured Projects</h3>
            <div className="space-y-8">
              {subsidiary.projects.map((project, index) => (
                <MotionDiv
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.2, duration: 0.5 }}
                  className="bg-gray-800 p-6 rounded-lg"
                >
                  <h4 className="text-xl font-bold text-blue-400 mb-2">{project.name}</h4>
                  <p className="text-gray-400">{project.description}</p>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Right Column (Sidebar) */}
          <MotionDiv
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-gray-800 p-8 rounded-xl sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-4">
                <strong>Email:</strong> <a href={`mailto:contact@${slug}.cubie.co`} className="text-blue-400 hover:underline">{`contact@${slug}.cubie.co`}</a>
              </p>
              <p className="mb-8">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>

              <h3 className="text-2xl font-bold mb-6">Shared Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/careers" className="flex items-center text-blue-400 hover:underline">
                    <Briefcase className="w-5 h-5 mr-3" />
                    <span>Group Careers</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center text-blue-400 hover:underline">
                    <Infinity className="w-5 h-5 mr-3" />
                    <span>About Cubie Group</span>
                  </Link>
                </li>
              </ul>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
