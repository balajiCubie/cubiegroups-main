import React from 'react';
import EmployerVideo from '@/app/components/shared/careers/EmployerVideo';
import EmployeeTestimonials from '@/app/components/shared/careers/EmployeeTestimonials';
import CultureDNI from '@/app/components/shared/careers/CultureDNI';
import Internships from '@/app/components/shared/careers/Internships';
import BenefitsPerks from '@/app/components/shared/careers/BenefitsPerks';
import JobListings from '@/app/components/shared/careers/JobListings';
import TalentCommunity from '@/app/components/shared/careers/TalentCommunity';
import ApplicationForm from '@/app/components/shared/careers/ApplicationForm';
import SectionSkeleton from '@/app/components/shared/SectionSkeleton';

const CareersPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate 0.5 second loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Careers & Culture</h1>
        <div className="space-y-12">
          {isLoading ? (
            <>
              <SectionSkeleton /> {/* For EmployerVideo */}
              <SectionSkeleton /> {/* For EmployeeTestimonials */}
              <SectionSkeleton /> {/* For CultureDNI */}
              <SectionSkeleton /> {/* For Internships */}
              <SectionSkeleton /> {/* For BenefitsPerks */}
              <SectionSkeleton /> {/* For JobListings */}
              <SectionSkeleton /> {/* For TalentCommunity */}
              <SectionSkeleton /> {/* For ApplicationForm */}
            </>
          ) : (
            <>
              <EmployerVideo />
              <EmployeeTestimonials />
              <CultureDNI />
              <Internships />
              <BenefitsPerks />
              <JobListings />
              <TalentCommunity />
              <ApplicationForm />
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
