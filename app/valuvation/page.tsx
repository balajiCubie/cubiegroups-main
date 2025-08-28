import React from 'react';
import Breadcrumbs from '../components/shared/Breadcrumbs';
import { FinalCTA } from '../components/sections/FinalCTA';

const ValuationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Breadcrumbs />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Business Valuation Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Unlock the true potential of your business with our expert valuation services.
            Whether for mergers, acquisitions, financial reporting, or strategic planning,
            we provide accurate and insightful valuations.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Why Business Valuation Matters</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Strategic Planning & Growth</li>
              <li>Mergers & Acquisitions (M&A)</li>
              <li>Financial Reporting & Compliance</li>
              <li>Estate & Gift Tax Planning</li>
              <li>Dispute Resolution & Litigation Support</li>
              <li>Succession Planning</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Valuation Approach</h2>
            <p className="text-lg text-gray-700 mb-4">
              We employ a comprehensive and rigorous approach to business valuation,
              combining industry best practices with deep market insights. Our methodology includes:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Income Approach (DCF, Capitalization of Earnings)</li>
              <li>Market Approach (Comparable Company Analysis, Transaction Multiples)</li>
              <li>Asset Approach (Adjusted Net Asset Method)</li>
              <li>Qualitative Analysis of Business Strengths & Risks</li>
            </ul>
          </div>
        </section>

        <section className="bg-blue-800 text-white p-10 rounded-lg shadow-xl text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ready to Discover Your Business's True Value?</h2>
          <p className="text-xl mb-6">
            Contact us today for a confidential consultation and let our experts guide you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition duration-300"
          >
            Get a Free Consultation
          </a>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Experienced Analysts</h3>
              <p className="text-gray-700">
                Our team comprises certified valuation analysts with years of experience across diverse industries.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Tailored Solutions</h3>
              <p className="text-gray-700">
                We understand that every business is unique. Our valuations are customized to your specific needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">Unbiased & Objective</h3>
              <p className="text-gray-700">
                We provide independent and objective valuations, ensuring credibility and reliability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <FinalCTA />
    </div>
  );
};

export default ValuationPage;
