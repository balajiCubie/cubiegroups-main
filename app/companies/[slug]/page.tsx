import React from 'react';
import { getCompanyBySlug, getAllCompanies, Company } from '../../data/companiesData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaGlobe, FaUsers, FaCalendarAlt, FaIndustry, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaResearchgate } from 'react-icons/fa';

interface CompanyIntroProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CompanyIntroProps) {
  const company = getCompanyBySlug(params.slug);

  if (!company) {
    return {
      title: 'Company Not Found',
      description: 'The requested company could not be found.',
    };
  }

  return {
    title: `${company.name} - Cubie Groups`,
    description: company.description,
    openGraph: {
      title: `${company.name} - Cubie Groups`,
      description: company.description,
      images: company.logo ? [company.logo] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${company.name} - Cubie Groups`,
      description: company.description,
      images: company.logo ? [company.logo] : [],
    },
  };
}

export async function generateStaticParams() {
  const companies = getAllCompanies();
  return companies.map((company) => ({
    slug: company.slug,
  }));
}

const CompanyIntro: React.FC<CompanyIntroProps> = ({ params }) => {
  const company = getCompanyBySlug(params.slug);

  if (!company) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <Link href="/companies" className="text-cubie-blue-600 hover:underline mb-6 block">
            &larr; Back to All Companies
          </Link>
          <div className="flex items-center mb-4">
            {company.logo && (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
            )}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{company.name}</h1>
              <div className="flex items-center text-gray-500 text-lg">
                <FaMapMarkerAlt className="mr-2" /> {company.location}
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-6 whitespace-pre-line">
            {company.description}
          </p>

          {/* Key Company Info */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Information:</h2>
            <ul className="space-y-2 text-gray-700">
              <li><FaIndustry className="inline-block mr-2 text-cubie-blue-500" /> <strong>Industry:</strong> {company.industry}</li>
              <li><FaCalendarAlt className="inline-block mr-2 text-cubie-blue-500" /> <strong>Founded:</strong> {company.foundedDate}</li>
              <li><FaUsers className="inline-block mr-2 text-cubie-blue-500" /> <strong>Team Size:</strong> {company.teamSize}</li>
              {company.website && (
                <li>
                  <FaGlobe className="inline-block mr-2 text-cubie-blue-500" /> <strong>Website:</strong>{' '}
                  <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-cubie-blue-600 hover:underline">
                    {company.website}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mt-8 border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Technologies:</h2>
            <div className="flex flex-wrap gap-3">
              {company.technologies.map((tech, index) => (
                <span key={index} className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cubie-blue-100 text-cubie-blue-800">
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          {company.socialMedia && company.socialMedia.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us:</h2>
              <div className="flex space-x-4">
                {company.socialMedia.map((social, index) => {
                  let IconComponent;
                  switch (social.platform.toLowerCase()) {
                    case 'linkedin': IconComponent = FaLinkedin; break;
                    case 'twitter': IconComponent = FaTwitter; break;
                    case 'facebook': IconComponent = FaFacebook; break;
                    case 'instagram': IconComponent = FaInstagram; break;
                    case 'youtube': IconComponent = FaYoutube; break;
                    case 'pinterest': IconComponent = FaPinterest; break;
                    case 'researchgate': IconComponent = FaResearchgate; break;
                    default: IconComponent = FaGlobe; // Fallback icon
                  }
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-cubie-blue-600 transition-colors duration-200"
                      aria-label={`Link to ${company.name}'s ${social.platform}`}
                    >
                      <IconComponent className="text-3xl" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {company.link && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <Link href={company.link} className="bg-cubie-blue-600 text-white hover:bg-cubie-blue-700 font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300">
                Visit Subsidiary Page
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyIntro;
