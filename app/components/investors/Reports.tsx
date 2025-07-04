import React from 'react';

const Reports = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Annual & Quarterly Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Placeholder for reports */}
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Q2 2025 Report</h3>
          <a href="#" className="text-blue-500 hover:underline">Download PDF</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Q1 2025 Report</h3>
          <a href="#" className="text-blue-500 hover:underline">Download PDF</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">2024 Annual Report</h3>
          <a href="#" className="text-blue-500 hover:underline">Download PDF</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Q4 2024 Report</h3>
          <a href="#" className="text-blue-500 hover:underline">Download PDF</a>
        </div>
      </div>
    </section>
  );
};

export default Reports;
