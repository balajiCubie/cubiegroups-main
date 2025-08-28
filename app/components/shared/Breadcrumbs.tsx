"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  if (pathSegments.length === 0) {
    return null; // No breadcrumbs for the homepage
  }

  return (
    <nav className="text-sm text-gray-400 px-6 py-3 bg-black pt-20"> {/* Added pt-20 to account for fixed header */}
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="hover:text-neon-cyan">Home</Link>
          {pathSegments.length > 0 && <span className="mx-2">/</span>}
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const displaySegment = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center">
              {isLast ? (
                <span className="text-white">{displaySegment}</span>
              ) : (
                <Link href={href} className="hover:text-neon-cyan">{displaySegment}</Link>
              )}
              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
