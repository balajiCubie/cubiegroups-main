import Link from 'next/link';

const BusinessUnits = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Business Units</h3>
      <div className="space-y-2">
        <Link href="/sectors/consumer-goods" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Consumer Goods</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Delivering essential products.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/consumer-goods/retail" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Retail</Link>
          <Link href="/sectors/consumer-goods/food-beverage" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Food & Beverage</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/energy" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Energy</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Powering progress.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/energy/renewables" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Renewable Energy</Link>
          <Link href="/sectors/energy/oil-gas" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Oil & Gas</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/real-estate" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m8-10h1m-1 4h1m-1 4h1m-8 4v2m-6-2v2m0-12V5a2 2 0 012-2h2V3a2 2 0 012 2v1m-3 14h6"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Real Estate</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Building vibrant communities.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/real-estate/commercial" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Commercial Properties</Link>
          <Link href="/sectors/real-estate/residential" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Residential Development</Link>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="/sectors/logistics" className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <svg className="flex-shrink-0 h-6 w-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17l4 4 4-4m-4-5v9m-1-13h6a2 2 0 012 2v3a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z"></path></svg>
          <div>
            <p className="text-base font-medium text-gray-900 dark:text-white">Logistics</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Optimizing supply chains.</p>
          </div>
        </Link>
        <div className="pl-10 space-y-1">
          <Link href="/sectors/logistics/supply-chain" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Supply Chain Management</Link>
          <Link href="/sectors/logistics/transportation" className="block text-sm text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400">Transportation</Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessUnits;
