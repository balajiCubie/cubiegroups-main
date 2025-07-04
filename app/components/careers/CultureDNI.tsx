import React from 'react';

const CultureDNI = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Culture, Diversity & Inclusion</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-4">
          At Cubie Group, we believe a diverse workforce and inclusive culture are key to our success.
          We are committed to creating an environment where everyone feels valued and empowered.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Employee Resource Groups (ERGs)</li>
          <li>Inclusive Leadership Training</li>
          <li>Mentorship Programs</li>
        </ul>
      </div>
    </section>
  );
};

export default CultureDNI;
