import React from 'react';

const StockTicker = () => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Real-Time Stock Ticker</h2>
      <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        {/* Placeholder for a real-time stock ticker widget */}
        <p>CUBIEGROUP (CBG): $123.45 <span className="text-green-500">(+1.23%)</span></p>
      </div>
    </section>
  );
};

export default StockTicker;
