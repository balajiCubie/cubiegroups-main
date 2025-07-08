import React from 'react';

const MeetingScheduler = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Schedule a Meeting</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {/* Placeholder for a meeting scheduling widget (e.g., Calendly embed) */}
        <p>Click below to schedule a meeting with our team:</p>
        <a href="#" className="text-blue-500 hover:underline mt-2 block">Schedule Now</a>
      </div>
    </section>
  );
};

export default MeetingScheduler;
