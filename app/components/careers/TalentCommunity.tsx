'use client';
import React, { useState } from 'react';

const TalentCommunity = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Talent community signup:', email);
    alert('Thank you for signing up for our talent community! We will notify you of future openings.');
    setEmail('');
  };

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Join Our Talent Community</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="mb-4">
          Don't see a role that fits right now? Join our talent community to stay informed about future opportunities
          and company news.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default TalentCommunity;
