'use client';

import React from 'react';
import Link from 'next/link';
import StockTicker from '@/app/components/investors/StockTicker';
import { investorsData } from '@/app/data/investorsData';
import { useTheme } from '@/app/context/ThemeContext';
import { useState } from 'react';

const InvestorRelationsPage = () => {
  const { isDarkMode } = useTheme();
  const [openSection, setOpenSection] = useState<number | null>(null);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section Enhancement */}
      <section className="relative bg-gray-900 text-white py-20 px-4 text-center overflow-hidden">
        {/* Placeholder for interactive modular visual */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0%, rgba(109, 40, 217, 0.3) 50%, transparent 100%)' }}></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-5xl font-bold mb-4">Fueling Sustainable Growth Through Modular Ecosystem Investments</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join a visionary network of investors driving transformation through innovation, modularity, and synergy.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/investor-deck.pdf" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
              View Investor Deck
            </Link>
            <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full transition duration-300">
              Explore Modular Opportunities
            </Link>
          </div>
        </div>
      </section>

      <main className="flex-grow">
        {/* Key Investment Highlights – Modular Format */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Key Investment Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                <div className="text-blue-500 text-4xl mb-4">💡</div> {/* Innovation */}
                <h3 className="text-2xl font-semibold mb-2">$25 Billion AUM</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Assets Under Management</p>
              </div>
              <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                <div className="text-green-500 text-4xl mb-4">🌐</div> {/* Global Reach */}
                <h3 className="text-2xl font-semibold mb-2">50+ Countries</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Global Reach</p>
              </div>
              <div className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}>
                <div className="text-purple-500 text-4xl mb-4">📈</div> {/* Growth */}
                <h3 className="text-2xl font-semibold mb-2">15% CAGR</h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Sustainable Growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* Governance & Strategy – Visual & Narrative Update */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Governance & Strategy</h2>
            {/* Placeholder for horizontal timeline or modular slider */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-lg shadow-xl text-white">
              <h3 className="text-2xl font-semibold mb-4">Our Commitment to Responsible Growth</h3>
              <p className="text-lg max-w-3xl mx-auto mb-6">
                Cubie Group is built on a foundation of robust governance, unwavering ethics, and a clear long-term vision. We integrate strategic levers like innovation, intelligence, and sustainability into every decision to drive value for all stakeholders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Governance Principles</h4>
                  <p className="text-sm">Ensuring transparency and accountability.</p>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Ethics & Transparency</h4>
                  <p className="text-sm">Upholding the highest standards in all operations.</p>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Long-Term Vision</h4>
                  <p className="text-sm">Focused on sustainable value creation.</p>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded-lg">
                  <h4 className="font-bold text-xl mb-2">Strategic Levers</h4>
                  <p className="text-sm">Innovation, Intelligence, Sustainability.</p>
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <Link href="/governance-documents.pdf" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-2 px-6 rounded-full transition duration-300">
                  View Governance Documents
                </Link>
                <Link href="/reports/all" className="border border-white text-white hover:bg-white hover:text-blue-700 font-bold py-2 px-6 rounded-full transition duration-300">
                  Access All Reports
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Reports & Filings – Make Interactive */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Latest Reports & Filings</h2>
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar for Top Downloads and Key Figures */}
              <div className={`lg:w-1/4 p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h3 className={`text-2xl font-semibold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Quick Access</h3>
                <div className="mb-8">
                  <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Top Downloads</h4>
                  <ul className="space-y-3">
                    <li><Link href="/reports/annual-2023.pdf" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>2023 Annual Report</Link></li>
                    <li><Link href="/reports/q4-2023.pdf" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Q4 2023 Earnings</Link></li>
                    <li><Link href="/investor-deck.pdf" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Investor Deck</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Key Figures at a Glance</h4>
                  <ul className="space-y-3">
                    <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Revenue Growth: <span className="font-bold text-green-500">↑ 12% YoY</span></li>
                    <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Net Income: <span className="font-bold text-green-500">↑ 8% YoY</span></li>
                    <li className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>EPS: <span className="font-bold text-green-500">↑ 10% YoY</span></li>
                  </ul>
                </div>
              </div>

              {/* Filterable Accordion Layout for Reports */}
              <div className="lg:w-3/4">
                {/* Placeholder for filter controls */}
                <div className={`mb-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filter Reports</h3>
                  <div className="flex flex-wrap gap-4">
                    <select className={`p-2 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
                      <option>All Years</option>
                      <option>2024</option>
                      <option>2023</option>
                    </select>
                    <select className={`p-2 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
                      <option>All Types</option>
                      <option>Annual Report</option>
                      <option>Quarterly Report</option>
                      <option>Press Release</option>
                    </select>
                  </div>
                </div>

                {/* Accordion items - simplified for now */}
                <div className="space-y-4">
                  {[
                    { id: 1, title: 'Q1 2024 Earnings Report', preview: 'Strong start to the year with significant growth in modular solutions.', link: '/reports/q1-2024.pdf' },
                    { id: 2, title: '2023 Annual Report', preview: 'Comprehensive overview of our performance and strategic initiatives in 2023.', link: '/reports/annual-2023.pdf' },
                    { id: 3, title: 'Q4 2023 Earnings Report', preview: 'Record-breaking quarter driven by new partnerships and market expansion.', link: '/reports/q4-2023.pdf' },
                  ].map(report => (
                    <div key={report.id} className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                      <button className={`w-full text-left p-4 font-semibold text-lg flex justify-between items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {report.title}
                        <span>+</span>
                      </button>
                      <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{report.preview}</p>
                        <Link href={report.link} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                          Download Report →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <Link href="/newsroom" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300">
                View All News & Reports
              </Link>
              <Link href="/contact" className={`${isDarkMode ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'} font-bold py-3 px-8 rounded-full transition duration-300 border`}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Investor Profiles – Modular Alignment */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Meet Our Visionary Investors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {investorsData.slice(0, 3).map(investor => (
                <div
                  key={investor.id}
                  className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center
                    ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}
                    ${investor.type === 'Venture Capital' ? 'border-t-4 border-blue-500' : ''}
                    ${investor.type === 'Institutional' ? 'border-t-4 border-purple-500' : ''}
                    ${investor.type === 'Angel' ? 'border-t-4 border-green-500' : ''}
                  `}
                >
                  <img src={investor.logo || '/logos/Cubie Group\'s logo.png'} alt={`${investor.name} Logo`} className="h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{investor.name}</h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-1`}>Type: {investor.type}</p>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>Region: {investor.region}</p>
                  {investor.featuredQuote && (
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} italic mb-4`}>"{investor.featuredQuote}"</p>
                  )}
                  <Link href={`/investors/${investor.slug}`} className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-full transition duration-300 mt-auto">
                    Visit Profile →
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/investors/all" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300">
                View All Investors
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action – Modular Alignment */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join a modular future built on strategic capital, visionary alignment, and purpose-driven impact.</h2>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition duration-300">
                Let’s Connect
              </Link>
              <Link href="/investors/signup" className="border border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-full transition duration-300">
                Investor Network Signup
              </Link>
            </div>
          </div>
        </section>

        {/* Real-Time Ticker – Modern & Dynamic */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Real-Time Market Data</h2>
            {/* Placeholder for a modern, dynamic stock ticker */}
            <div className={`p-6 rounded-lg shadow-xl ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'} border border-blue-500`}>
              <StockTicker />
            </div>
          </div>
        </section>

        {/* Proxy Filings, Disclosures & Ethics */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto">
            <h2 className={`text-3xl font-bold text-center mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Filings, Disclosures & Ethics</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {[
                { id: 1, title: 'Proxy Statements', content: 'Access our annual proxy statements detailing shareholder meeting information and corporate governance.', links: [{ text: 'View Latest Proxy', href: '/filings/proxy-2024.pdf' }] },
                { id: 2, title: 'Ethics & Compliance Filings', content: 'Our commitment to ethical conduct and regulatory compliance is documented in these filings.', links: [{ text: 'Read Ethics Policy', href: '/filings/ethics-policy.pdf' }] },
                { id: 3, title: 'ESG Reports', content: 'Explore our environmental, social, and governance initiatives and performance.', links: [{ text: 'Download ESG Report', href: '/filings/esg-report-2023.pdf' }] },
              ].map(item => (
                <div key={item.id} className={`rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <button
                    className={`w-full text-left p-4 font-semibold text-lg flex justify-between items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                    onClick={() => setOpenSection(openSection === item.id ? null : item.id)}
                  >
                    {item.title}
                    <span>{openSection === item.id ? '-' : '+'}</span>
                  </button>
                  {openSection === item.id && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{item.content}</p>
                      <div className="flex space-x-4">
                        {item.links.map((link, idx) => (
                          <Link key={idx} href={link.href} className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                            {link.text} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investor Queries – Add Trust Signals */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Investor Queries</h2>
            <div className={`p-8 rounded-lg shadow-lg max-w-2xl mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div className="flex flex-col items-center mb-6">
                <img src="/path/to/investor-relations-officer.jpg" alt="Investor Relations Officer" className="w-24 h-24 rounded-full mb-4 object-cover" />
                <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Sarah Chen</p>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Head of Investor Relations</p>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="inquiryType" className={`block text-left text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Inquiry Type</label>
                  <select id="inquiryType" name="inquiryType" className={`w-full p-3 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`}>
                    <option>General Inquiry</option>
                    <option>Financial Report Request</option>
                    <option>Partnership Opportunity</option>
                    <option>ESG Information</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="name" className={`block text-left text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                  <input type="text" id="name" name="name" className={`w-full p-3 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-left text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Email</label>
                  <input type="email" id="email" name="email" className={`w-full p-3 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`} />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-left text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                  <textarea id="message" name="message" rows={4} className={`w-full p-3 border rounded-md ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-900'}`}></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full transition duration-300">
                  Send Inquiry
                </button>
              </form>
              <div className="mt-6 flex justify-center space-x-4 text-sm">
                <Link href="/faqs" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>FAQs</Link>
                <Link href="/terms" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Terms & Conditions</Link>
                <Link href="/book-a-call" className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>Book a Call</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus: Why Invest in Cubie? animated block */}
        <section className={`py-16 px-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto text-center">
            <h2 className={`text-3xl font-bold mb-10 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Why Invest in Cubie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transform hover:scale-105 transition duration-300`}>
                <div className="text-blue-500 text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold">Vision</h3>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transform hover:scale-105 transition duration-300`}>
                <div className="text-green-500 text-4xl mb-4">📈</div>
                <h3 className="text-xl font-semibold">Growth</h3>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transform hover:scale-105 transition duration-300`}>
                <div className="text-purple-500 text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold">Partnership</h3>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transform hover:scale-105 transition duration-300`}>
                <div className="text-red-500 text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold">Impact</h3>
              </div>
              <div className={`p-6 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} transform hover:scale-105 transition duration-300`}>
                <div className="text-yellow-500 text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold">Return</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default InvestorRelationsPage;
