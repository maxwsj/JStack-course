import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export function ThemeProv({ children }) {
   const [theme, setTheme] = useState('dark');

   const handleToggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
   };

   return (
      <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
}
