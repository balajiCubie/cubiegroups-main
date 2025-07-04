import Link from 'next/link';

const ExploreMore = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Explore More</h3>
      <Link href="/contact" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <svg className="flex-shrink-0 h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        <div>
          <p className="text-base font-medium text-gray-900 dark:text-white">Contact Us</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Get in touch with our sector specialists.</p>
        </div>
      </Link>
      <Link href="/about" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <svg className="flex-shrink-0 h-6 w-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <p className="text-base font-medium text-gray-900 dark:text-white">About Cubie Group</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">Learn more about our mission and values.</p>
        </div>
      </Link>
    </div>
  );
};

export default ExploreMore;
