'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { investorsData } from '@/app/data/investorsData';
import { useTheme } from '@/app/context/ThemeContext';
import InvestorDetailSkeleton from '@/app/components/investors/InvestorDetailSkeleton';

interface InvestorDetailPageProps {
  params: {
    slug: string;
  };
}

const InvestorDetailPage = ({ params }: InvestorDetailPageProps) => {
  const { slug } = params;
  const [isLoading, setIsLoading] = React.useState(true);
  const investor = investorsData.find(inv => inv.slug === slug);
  const { isDarkMode } = useTheme();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate 0.5 second loading time
    return () => clearTimeout(timer);
  }, [slug]); // Re-trigger loading when slug changes

  if (!investor) {
    notFound();
  }

  return (
    <>
      {isLoading ? (
        <InvestorDetailSkeleton />
      ) : (
        <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          <div className={`rounded-lg shadow-lg p-8 mb-12 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
              {investor.logo && (
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <Image
                    src={investor.logo || '/logos/Cubie Group\'s logo.png'}
                    alt={`${investor.name} Logo`}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                </div>
              )}
              <div className="text-center md:text-left">
                <h1 className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{investor.name}</h1>
                <p className={`text-xl mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{investor.tagline}</p>
                {investor.website && (
                  <Link href={investor.website} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline text-lg`}>
                    Visit Website →
                  </Link>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <div>
                <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Investment Thesis</h2>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>{investor.investmentThesis}</p>
              </div>
              <div>
                <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Areas of Focus</h2>
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {investor.areasOfFocus.map((area, index) => (
                    <li key={index}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            {investor.notablePortfolioHighlights && investor.notablePortfolioHighlights.length > 0 && (
              <div className="mb-10">
                <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Notable Portfolio Highlights</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {investor.notablePortfolioHighlights.map((highlight, index) => (
                    <div key={index} className={`p-4 rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-xl font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{highlight.name}</h3>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {investor.quotes && investor.quotes.length > 0 && (
              <div className="mb-10">
                <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Testimonials</h2>
                <div className="space-y-6">
                  {investor.quotes.map((quote, index) => (
                    <blockquote key={index} className={`border-l-4 border-blue-500 pl-4 italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <p className="mb-2">"{quote.text}"</p>
                      <footer className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>- {quote.author}</footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {investor.partneredVentures && investor.partneredVentures.length > 0 && (
              <div className="mb-10">
                <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Partnered Cubie Group Ventures</h2>
                <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {investor.partneredVentures.map((venture, index) => (
                    <li key={index}>{venture}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-center mt-12">
              <Link href="/contact" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300 text-lg">
                Connect With Our Investor Relations Team →
              </Link>
            </div>
          </div>

          {/* Optional: Related investors or recommended connections - could be implemented here */}
          {/* <section className="mt-16">
            <h2 className={`text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Related Investors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {investorsData.filter(i => i.slug !== slug).slice(0, 3).map(relatedInvestor => (
                <div key={relatedInvestor.id} className={`p-6 rounded-lg shadow-lg text-center ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{relatedInvestor.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{relatedInvestor.tagline}</p>
                  <Link href={`/investors/${relatedInvestor.slug}`} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline mt-4 block`}>View Profile →</Link>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      )}
    </>
  );
};

export default InvestorDetailPage;
