import React from 'react';

const EmployeeTestimonials = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Employee Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg italic">
          <p>"Cubie Group fosters a culture of innovation and growth. I've learned so much here!"</p>
          <p className="text-right font-bold mt-2">- Jane Doe, Software Engineer (Tech Subsidiary)</p>
        </div>
        <div className="p-4 border rounded-lg italic">
          <p>"The commitment to diversity and inclusion at Cubie Group is truly inspiring."</p>
          <p className="text-right font-bold mt-2">- John Smith, Marketing Manager (Consumer Goods Subsidiary)</p>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTestimonials;
