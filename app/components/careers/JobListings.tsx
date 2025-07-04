'use client';
import React, { useState } from 'react';

const JobListings = () => {
  const [filters, setFilters] = useState({
    location: '',
    function: '',
    company: ''
  });

  const jobData = [
    { id: 1, title: 'Software Engineer', location: 'New York', function: 'Engineering', company: 'Tech Solutions' },
    { id: 2, title: 'Marketing Specialist', location: 'London', function: 'Marketing', company: 'Global Brands' },
    { id: 3, title: 'Financial Analyst', location: 'New York', function: 'Finance', company: 'Capital Ventures' },
    { id: 4, title: 'HR Business Partner', location: 'London', function: 'Human Resources', company: 'Global Brands' },
    { id: 5, title: 'Product Manager', location: 'San Francisco', function: 'Product', company: 'Tech Solutions' },
  ];

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const filteredJobs = jobData.filter(job => {
    return (
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.function === '' || job.function.toLowerCase().includes(filters.function.toLowerCase())) &&
      (filters.company === '' || job.company.toLowerCase().includes(filters.company.toLowerCase()))
    );
  });

  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Job Listings</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
            <input type="text" name="location" id="location" value={filters.location} onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., New York" />
          </div>
          <div>
            <label htmlFor="function" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Function</label>
            <input type="text" name="function" id="function" value={filters.function} onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Engineering" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Company</label>
            <input type="text" name="company" id="company" value={filters.company} onChange={handleFilterChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Tech Solutions" />
          </div>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map(job => (
              <div key={job.id} className="p-4 border rounded-lg">
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{job.company} - {job.location}</p>
                <p className="text-sm text-gray-500">{job.function}</p>
                <a href="#" className="text-blue-500 hover:underline mt-2 block">Apply Now</a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">No job listings match your criteria.</p>
        )}
      </div>
    </section>
  );
};

export default JobListings;
