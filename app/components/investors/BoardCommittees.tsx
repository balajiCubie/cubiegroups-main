import React from 'react';

const BoardCommittees = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Board Committee Structures</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Audit Committee</h3>
          <p>Oversees financial reporting and disclosure.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Compensation Committee</h3>
          <p>Reviews and approves executive compensation.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-bold">Nominating and Governance Committee</h3>
          <p>Manages board nominations and corporate governance.</p>
        </div>
      </div>
    </section>
  );
};

export default BoardCommittees;
