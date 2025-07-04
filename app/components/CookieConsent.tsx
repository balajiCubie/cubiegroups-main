"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
    // Optionally, disable non-essential cookies here
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-lg z-50">
      <p className="text-sm mb-2 md:mb-0 md:mr-4">
        We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our use of cookies. For more information, please read our{' '}
        <a href="/privacy-policy" className="underline">Privacy Policy</a>.
      </p>
      <div className="flex space-x-2">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
