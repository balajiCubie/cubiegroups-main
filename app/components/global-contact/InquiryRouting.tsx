import React from 'react';

const InquiryRouting = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Smart Routing for Inquiries</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-4">Direct your inquiry to the right department:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Business Inquiries (B2B)</h3>
            <p><a href="mailto:b2b@cubiegroup.com" className="text-blue-500 hover:underline">b2b@cubiegroup.com</a></p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Media Inquiries</h3>
            <p><a href="mailto:media@cubiegroup.com" className="text-blue-500 hover:underline">media@cubiegroup.com</a></p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="font-bold">Career Inquiries</h3>
            <p><a href="mailto:careers@cubiegroup.com" className="text-blue-500 hover:underline">careers@cubiegroup.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryRouting;
