'use client';
import { useEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light'
    );
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};
