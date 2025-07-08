import React from 'react';
import OfficeMap from '@/app/components/shared/OfficeMap';
import LocalContacts from '@/app/components/shared/LocalContacts';
import InquiryRouting from '@/app/components/shared/InquiryRouting';
import MeetingScheduler from '@/app/components/shared/MeetingScheduler';

const GlobalContactPage = () => {
  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Global Contact Hub</h1>
        <div className="space-y-12">
          <OfficeMap />
          <LocalContacts />
          <InquiryRouting />
          <MeetingScheduler />
        </div>
      </main>
    </div>
  );
};

export default GlobalContactPage;
