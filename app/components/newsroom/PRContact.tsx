import React from 'react';

const PRContact = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">PR & Media Contact</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p>For media inquiries, please contact our Public Relations team:</p>
        <p className="font-bold">Email: <a href="mailto:media@cubiegroup.com" className="text-blue-500 hover:underline">media@cubiegroup.com</a></p>
        <p className="font-bold">Phone: +1 (800) 555-0101</p>
      </div>
    </section>
  );
};

export default PRContact;
