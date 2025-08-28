import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center mb-4">
            <Image
              src="/logos/Cubie Group's logo.png" // Assuming this path is correct
              alt="Cubie Group Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="text-2xl font-bold">Cubie Group</span>
          </Link>
          <p className="text-gray-400 text-sm">
            AI-Powered Finance Ecosystem for Every Investment Decision.
            Cubie Group builds the world’s most advanced investment banking SaaS.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/platforms" className="text-gray-400 hover:text-neon-cyan transition-colors">Platforms</Link></li>
            <li><Link href="/solutions" className="text-gray-400 hover:text-neon-cyan transition-colors">Solutions</Link></li>
            <li><Link href="/loops" className="text-gray-400 hover:text-neon-cyan transition-colors">Loops</Link></li>
            <li><Link href="/insights" className="text-gray-400 hover:text-neon-cyan transition-colors">Insights</Link></li>
            <li><Link href="/about" className="text-gray-400 hover:text-neon-cyan transition-colors">About</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-neon-cyan transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Legal & Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal & Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-gray-400 hover:text-neon-cyan transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-neon-cyan transition-colors">Terms of Service</Link></li>
            <li><Link href="/sitemap.xml" className="text-gray-400 hover:text-neon-cyan transition-colors">Sitemap</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Cubie Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
