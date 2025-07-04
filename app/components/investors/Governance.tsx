import React from 'react';

const Governance = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Governance Policies & Ethics</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">Corporate Governance Guidelines</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Code of Business Conduct and Ethics</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">Whistleblower Policy</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Governance;
