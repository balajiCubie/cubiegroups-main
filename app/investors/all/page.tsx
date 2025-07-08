'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { investorsData } from '@/app/data/investorsData';
import { useTheme } from '@/app/context/ThemeContext';

const InvestorsAllPage = () => {
  const { isDarkMode } = useTheme();
  const [filters, setFilters] = useState({
    type: 'All',
    region: 'All',
    investmentSize: 'All',
    sectorFocus: 'All',
  });
  const [sortBy, setSortBy] = useState('alphabetical');

  const investorTypes = useMemo(() => ['All', ...new Set(investorsData.map(inv => inv.type))], []);
  const regions = useMemo(() => ['All', ...new Set(investorsData.map(inv => inv.region))], []);
  const investmentSizes = useMemo(() => ['All', ...new Set(investorsData.map(inv => inv.investmentSize))], []);
  const sectorFocuses = useMemo(() => ['All', ...new Set(investorsData.flatMap(inv => inv.sectorFocus.split(', ').map(s => s.trim())))], []);

  const filteredAndSortedInvestors = useMemo(() => {
    let filtered = investorsData.filter(investor => {
      return (
        (filters.type === 'All' || investor.type === filters.type) &&
        (filters.region === 'All' || investor.region === filters.region) &&
        (filters.investmentSize === 'All' || investor.investmentSize === filters.investmentSize) &&
        (filters.sectorFocus === 'All' || investor.sectorFocus.includes(filters.sectorFocus))
      );
    });

    switch (sortBy) {
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'newest':
        // Assuming 'id' can represent creation order or add a 'dateAdded' field to data
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'strategicImpact':
        // This would require a 'strategicImpact' field in your data for a meaningful sort
        // For now, it will just maintain current order or alphabetical if no other sort is applied
        filtered.sort((a, b) => a.name.localeCompare(b.name)); // Fallback to alphabetical
        break;
      default:
        break;
    }
    return filtered;
  }, [filters, sortBy]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our Investor Network</h1>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <select
          name="type"
          onChange={handleFilterChange}
          value={filters.type}
          className={`p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          <option value="All">All Types</option>
          {investorTypes.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <select
          name="region"
          onChange={handleFilterChange}
          value={filters.region}
          className={`p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          <option value="All">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>

        <select
          name="investmentSize"
          onChange={handleFilterChange}
          value={filters.investmentSize}
          className={`p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          <option value="All">All Investment Sizes</option>
          {investmentSizes.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>

        <select
          name="sectorFocus"
          onChange={handleFilterChange}
          value={filters.sectorFocus}
          className={`p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          <option value="All">All Sector Focuses</option>
          {sectorFocuses.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
      </div>

      <div className="mb-10 text-right">
        <label htmlFor="sortBy" className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sort by:</label>
        <select
          id="sortBy"
          onChange={(e) => setSortBy(e.target.value)}
          value={sortBy}
          className={`p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
        >
          <option value="alphabetical">Alphabetical</option>
          <option value="newest">Newest</option>
          <option value="strategicImpact">Strategic Impact</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedInvestors.map(investor => (
          <div
            key={investor.id}
            className={`rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}
          >
            {investor.logo && (
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={investor.logo || '/logos/Cubie Group\'s logo.png'}
                  alt={`${investor.name} Logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
            )}
            <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{investor.name}</h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 flex-grow`}>{investor.tagline}</p>
            <Link href={`/investors/${investor.slug}`} className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-full transition duration-300">
              View Profile →
            </Link>
          </div>
        ))}
      </div>

      {filteredAndSortedInvestors.length === 0 && (
        <p className={`text-center text-lg mt-10 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>No investors match your criteria.</p>
      )}
    </div>
  );
};

export default InvestorsAllPage;
