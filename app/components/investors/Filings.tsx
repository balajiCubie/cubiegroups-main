import React from 'react';

const Filings = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Proxy Statements & Filings</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#" className="text-blue-500 hover:underline">2025 Proxy Statement</a></li>
          <li><a href="#" className="text-blue-500 hover:underline">SEC Filings (Form 10-K, 10-Q)</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Filings;
