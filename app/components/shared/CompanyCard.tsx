import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Company } from '../../data/companiesData'; // Assuming Company interface is exported
import { useTheme } from '../../context/ThemeContext'; // Import useTheme hook

interface CompanyCardProps {
  company: Company;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const { theme } = useTheme();
  return (
    <Link href={`/companies/${company.slug}`} className="block">
      <div className={`${theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-white'} rounded-lg shadow-lg p-6 h-full flex flex-col justify-between
                  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out`}>
        <div>
          <div className="flex items-center mb-4">
            {company.logo && (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={60}
                height={60}
                className="rounded-full mr-4 object-contain"
              />
            )}
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'} leading-tight`}>
              {company.name}
            </h3>
          </div>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm mb-3 line-clamp-2`}>
            {company.description}
          </p>
          <div className={`flex items-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} text-xs`}>
            <FaMapMarkerAlt className="mr-1 text-sm" /> {company.location}
          </div>
        </div>
        {/* Technology Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {company.technologies.map((tech, techIndex) => (
            <span key={techIndex} className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-cubie-blue-800 text-cubie-blue-100' : 'bg-cubie-blue-100 text-cubie-blue-800'}`}>
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CompanyCard;
