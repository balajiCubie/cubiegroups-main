import React from 'react';

const InvestorContact = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Investor Queries</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p>For investor-related questions, please contact:</p>
        <p className="font-bold">Email: <a href="mailto:investors@cubiegroup.com" className="text-blue-500 hover:underline">investors@cubiegroup.com</a></p>
        <p className="font-bold">Phone: +1 (800) 555-0100</p>
      </div>
    </section>
  );
};

export default InvestorContact;
