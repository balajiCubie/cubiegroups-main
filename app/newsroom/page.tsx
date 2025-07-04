import React from 'react';
import PressReleases from '@/app/components/newsroom/PressReleases';
import FeaturedArticles from '@/app/components/newsroom/FeaturedArticles';
import ExecutiveInterviews from '@/app/components/newsroom/ExecutiveInterviews';
import EventsCalendar from '@/app/components/newsroom/EventsCalendar';
import MediaKit from '@/app/components/newsroom/MediaKit';
import PRContact from '@/app/components/newsroom/PRContact';
import SocialFeed from '@/app/components/newsroom/SocialFeed';

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
