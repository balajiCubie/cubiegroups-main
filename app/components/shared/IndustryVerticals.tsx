import Link from 'next/link';

const IndustryVerticals = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Industry Verticals</h3>
      <div className="space-y-2">
        <Link href="/sectors/technology" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-1.25-3M15 10V5a2 2 0 00-2-2H9a2 2 0 00-2 2v5m3 0h6m-6 0l-2 2m2 0l2 2m-6-4v4m2 0h4"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Technology</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Innovating the digital future.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/technology/software" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Software Development</Link>
          <Link href="/sectors/technology/ai" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">AI & Machine Learning</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/finance" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Finance</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Driving economic growth.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/finance/investments" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Investment Banking</Link>
          <Link href="/sectors/finance/asset-management" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Asset Management</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/healthcare" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Healthcare</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Advancing well-being.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/healthcare/biotech" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Biotechnology</Link>
          <Link href="/sectors/healthcare/pharma" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Pharmaceuticals</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/manufacturing" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Manufacturing</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Producing high-quality goods.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/manufacturing/automotive" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Automotive</Link>
          <Link href="/sectors/manufacturing/electronics" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Electronics</Link>
        </div>
      </div>
    </div>
  );
};

export default IndustryVerticals;
