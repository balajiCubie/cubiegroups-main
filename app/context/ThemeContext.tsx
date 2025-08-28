"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark'); // Default to dark theme

  useEffect(() => {
    // You can add logic here to read theme from localStorage if needed
    // For now, we'll just ensure the 'dark' class is on the html element
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    // In a dark-themed website, toggling might switch to a light theme
    // or just adjust dark mode intensity. For now, it's a placeholder.
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
