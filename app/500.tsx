import React from 'react';

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold text-red-600">500</h1>
      <p className="text-2xl mt-4">Server-side error occurred</p>
      <p className="text-lg mt-2 text-gray-600">We're sorry, but something went wrong on our end. Please try again later.</p>
      <a href="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
        Go back home
      </a>
    </div>
  );
}
