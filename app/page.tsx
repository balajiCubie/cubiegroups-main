import { Hero } from './components/home/Hero';
import { Ecosystem } from './components/ecosystem/Ecosystem';
import { Subsidiaries } from './components/home/Subsidiaries';
import { CoreValues } from './components/shared/CoreValues';
import { StakeholderSections } from './components/home/StakeholderSections';
import { CallToAction } from './components/cta/CallToAction';
import { ModularWorldFoundation } from './components/ecosystem/ModularWorldFoundation'; // New component for the four principles

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Ecosystem />
      <Subsidiaries /> {/* This will be adapted for "Meet the Cubie Blocks" */}
      <ModularWorldFoundation /> {/* This replaces CoreValues */}
      <StakeholderSections />
      <CallToAction />
    </div>
  );
}
