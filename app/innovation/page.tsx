import React from 'react';
import Milestones from '@/app/components/innovation/Milestones';
import OpenChallenges from '@/app/components/innovation/OpenChallenges';
import Patents from '@/app/components/innovation/Patents';
import PartnerSuccess from '@/app/components/innovation/PartnerSuccess';
import CollaborationForm from '@/app/components/innovation/CollaborationForm';

const InnovationPage = () => {
  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Innovation & Partnerships</h1>
        <div className="space-y-12">
          <Milestones />
          <OpenChallenges />
          <Patents />
          <PartnerSuccess />
          <CollaborationForm />
        </div>
      </main>
    </div>
  );
};

export default InnovationPage;
