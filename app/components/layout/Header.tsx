import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center fixed w-full z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logos/Cubie Group's logo.png" // Assuming this path is correct
          alt="Cubie Group Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <span className="text-xl font-bold">Cubie Group</span>
      </Link>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/platforms" className="hover:text-neon-cyan transition-colors">
              Platforms
            </Link>
          </li>
          <li>
            <Link href="/solutions" className="hover:text-neon-cyan transition-colors">
              Solutions
            </Link>
          </li>
          <li>
            <Link href="/loops" className="hover:text-neon-cyan transition-colors">
              Loops
            </Link>
          </li>
          <li>
            <Link href="/insights" className="hover:text-neon-cyan transition-colors">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-neon-cyan transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-neon-cyan transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
