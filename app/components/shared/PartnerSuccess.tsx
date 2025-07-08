import React from 'react';

const PartnerSuccess = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Partner Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Case Study: Innovatech & Cubie Group</h3>
          <p>How our collaboration led to a 30% increase in manufacturing efficiency.</p>
          <a href="#" className="text-blue-500 hover:underline">Read the Case Study</a>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Testimonial: Future Systems Inc.</h3>
          <p>"Working with Cubie Group accelerated our market entry by 12 months."</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSuccess;
