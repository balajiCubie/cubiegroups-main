import { Hero } from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { CoreValues } from './components/CoreValues';
import { StakeholderSections } from './components/StakeholderSections';
import { CallToAction } from './components/CallToAction';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Ecosystem />
      <CoreValues />
      <StakeholderSections />
      <CallToAction />
    </div>
  );
}
