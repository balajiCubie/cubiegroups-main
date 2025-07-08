import React from 'react';
import PressReleases from '@/app/components/shared/PressReleases';
import FeaturedArticles from '@/app/components/shared/FeaturedArticles';
import ExecutiveInterviews from '@/app/components/shared/ExecutiveInterviews';
import EventsCalendar from '@/app/components/shared/EventsCalendar';
import MediaKit from '@/app/components/shared/MediaKit';
import PRContact from '@/app/components/shared/PRContact';
import SocialFeed from '@/app/components/shared/SocialFeed';

const NewsroomPage = () => {
  return (
    <div>
      <main className="py-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Newsroom & Media Hub</h1>
        <div className="space-y-12">
          <PressReleases />
          <FeaturedArticles />
          <ExecutiveInterviews />
          <EventsCalendar />
          <SocialFeed />
          <MediaKit />
          <PRContact />
        </div>
      </main>
    </div>
  );
};

export default NewsroomPage;
