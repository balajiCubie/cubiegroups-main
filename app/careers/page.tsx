import React from 'react';
import EmployerVideo from '@/app/components/shared/careers/EmployerVideo';
import EmployeeTestimonials from '@/app/components/shared/careers/EmployeeTestimonials';
import CultureDNI from '@/app/components/shared/careers/CultureDNI';
import Internships from '@/app/components/shared/careers/Internships';
import BenefitsPerks from '@/app/components/shared/careers/BenefitsPerks';
import JobListings from '@/app/components/shared/careers/JobListings';
import TalentCommunity from '@/app/components/shared/careers/TalentCommunity';
import ApplicationForm from '@/app/components/shared/careers/ApplicationForm';

const CareersPage = () => {
  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Careers & Culture</h1>
        <div className="space-y-12">
          <EmployerVideo />
          <EmployeeTestimonials />
          <CultureDNI />
          <Internships />
          <BenefitsPerks />
          <JobListings />
          <TalentCommunity />
          <ApplicationForm />
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
