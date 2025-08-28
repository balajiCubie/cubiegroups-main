"use client";
import { Hero } from './components/home/Hero';
import { Platforms } from './components/sections/Platforms'; // Import the Platforms component
import { EcosystemDiagram } from './components/home/EcosystemDiagram'; // Import the EcosystemDiagram component
import { LoopsPhilosophy } from './components/home/LoopsPhilosophy'; // Import the LoopsPhilosophy component
import { Solutions } from './components/sections/Solutions'; // Import the Solutions component
import { Insights } from './components/sections/Insights'; // Import the Insights component
import { FinalCTA } from './components/sections/FinalCTA'; // Import the FinalCTA component

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <EcosystemDiagram /> {/* Ecosystem Diagram */}
      <Platforms /> {/* Platforms rows */}
      <Solutions /> {/* Solutions Section */}
      <LoopsPhilosophy /> {/* Loops Philosophy Section */}
      <Insights /> {/* Insights/Resources Section */}
      <FinalCTA /> {/* Final Call to Action */}
      {/* Footer is in layout.tsx */}
    </div>
  );
}
