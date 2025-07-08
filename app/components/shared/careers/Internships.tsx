import React from 'react';

const Internships = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Internships & Early Career Pathways</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-4">
          Kickstart your career with Cubie Group! We offer a variety of internships and early career programs designed to
          nurture talent and provide hands-on experience.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Summer Internship Program</li>
          <li>Graduate Leadership Program</li>
          <li>Apprenticeship Opportunities</li>
        </ul>
        <a href="#" className="text-blue-500 hover:underline mt-4 block">Learn More About Our Programs</a>
      </div>
    </section>
  );
};

export default Internships;
