"use client"
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { sectorsData, Company, Sector, Technology } from '../data/companiesData';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Icon for location
import CompanyCard from '../components/shared/CompanyCard'; // Import the new CompanyCard component
import { useTheme } from '../context/ThemeContext'; // Import useTheme hook

const CompaniesPage: React.FC = () => {
  const { theme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSectors = useMemo(() => {
    if (!searchTerm) {
      return sectorsData;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return sectorsData.map(sector => ({
      ...sector,
      companies: sector.companies.filter(company =>
        company.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        company.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        company.location.toLowerCase().includes(lowerCaseSearchTerm) ||
        sector.name.toLowerCase().includes(lowerCaseSearchTerm)
      )
    })).filter(sector => sector.companies.length > 0);
  }, [searchTerm]);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50'}`}>
      {/* Intro Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white text-center shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <h1 className={`text-5xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} mb-4`}>Our Companies & Sectors</h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-6 max-w-3xl mx-auto`}>
            Cubie Groups brings together a dynamic portfolio of businesses across diverse sectors — from cutting-edge technology and strategic investment banking to sustainable infrastructure and consumer lifestyle brands.
          </p>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'} max-w-4xl mx-auto`}>
            Powered by next-generation technologies, our companies drive growth, innovation, and positive impact worldwide. We are committed to building a future where diverse businesses thrive through advanced solutions and a dedication to sustainable practices.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className={`py-8 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-4">
          <input
            type="text"
            placeholder="Search companies by name, description, or location..."
            className={`w-full p-4 border ${theme === 'dark' ? 'border-gray-600 bg-gray-800 text-gray-100' : 'border-gray-300 bg-white text-gray-900'} rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-cubie-blue-500`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Interactive Sectors Grid */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} text-center mb-12`}>Explore Our Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSectors.map((sector, index) => (
              <div key={index} className={`${theme === 'dark' ? 'bg-gray-800 text-gray-100' : 'bg-white'} rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex items-center mb-4">
                  <sector.icon className="text-cubie-blue-500 text-4xl mr-4" />
                  <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{sector.name}</h3>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{sector.description}</p>
                {/* Companies Listing under each sector */}
                <div className={`mt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} pt-6`}>
                  <h4 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'} mb-4`}>Group Companies:</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {sector.companies.map((company, compIndex) => (
                      <CompanyCard key={compIndex} company={company} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredSectors.length === 0 && (
            <p className={`text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-lg mt-8`}>No companies found matching your search.</p>
          )}
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-cubie-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Partner with Cubie Groups</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore opportunities for partnerships, connect with our business leaders, or read about the group’s innovation stories.
          </p>
          <Link href="/contact" className="bg-white text-cubie-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
            Connect With Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CompaniesPage;
