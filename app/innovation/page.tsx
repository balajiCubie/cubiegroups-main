import React from 'react';
import Milestones from '@/app/components/shared/Milestones';
import OpenChallenges from '@/app/components/shared/OpenChallenges';
import Patents from '@/app/components/shared/Patents';
import PartnerSuccess from '@/app/components/shared/PartnerSuccess';
import CollaborationForm from '@/app/components/shared/CollaborationForm';

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
