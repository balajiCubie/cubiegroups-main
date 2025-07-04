import { Hero } from './components/Hero';
import { Ecosystem } from './components/Ecosystem';
import { Subsidiaries } from './components/Subsidiaries';
import { CoreValues } from './components/CoreValues';
import { StakeholderSections } from './components/StakeholderSections';
import { CallToAction } from './components/CallToAction';
import InvestmentBankingOverview from './components/investors/InvestmentBankingOverview';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <InvestmentBankingOverview />
      <Ecosystem />
      <Subsidiaries />
      <CoreValues />
      <StakeholderSections />
      <CallToAction />
    </div>
  );
}
