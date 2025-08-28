"use client";

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
      <p className="text-sm mb-2 md:mb-0 md:mr-4">
        We use cookies to ensure you get the best experience on our website. By continuing to use this site, you agree to our use of cookies.
      </p>
      <button
        onClick={handleAccept}
        className="bg-finance-blue hover:bg-neon-cyan text-white font-bold py-2 px-4 rounded transition-colors duration-300"
      >
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieConsent;
