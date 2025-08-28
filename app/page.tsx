"use client";
import { Hero } from './components/home/Hero';
import { Platforms } from './components/sections/Platforms'; // Import the Platforms component
import { EcosystemDiagram } from './components/home/EcosystemDiagram'; // Import the EcosystemDiagram component
import { LoopsPhilosophy } from './components/home/LoopsPhilosophy'; // Import the LoopsPhilosophy component
import { CTADuo } from './components/home/CTADuo'; // Import the CTADuo component

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <EcosystemDiagram /> {/* Ecosystem Diagram */}
      <Platforms /> {/* Platforms rows */}
      <LoopsPhilosophy /> {/* Loops Philosophy Section */}
      <CTADuo /> {/* Dual CTA */}
      {/* Footer is in layout.tsx */}
    </div>
  );
}
