'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  if (pathSegments.length === 0) {
    return null; // No breadcrumbs for the home page
  }

  return (
    <nav className="container mx-auto px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="text-blue-600 hover:underline dark:text-blue-400">Home</Link>
          <span className="mx-2">/</span>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;
          const displaySegment = segment.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

          return (
            <li key={href} className="flex items-center">
              {isLast ? (
                <span className="text-gray-800 dark:text-gray-200">{displaySegment}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline dark:text-blue-400">{displaySegment}</Link>
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
