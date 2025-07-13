import React, { useContext, useMemo, useState } from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';
import ThemeContext from './context/ThemeContext';

function App() {
   const { theme, handleToggleTheme } = useContext(ThemeContext);

   const currentTheme = useMemo(() => {
      return themes[theme] || themes.dark;
   }, [theme]);

   return (
      <ThemeProvider theme={currentTheme}>
         <GlobalStyle />
         <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      </ThemeProvider>
   );
}

export default App;
