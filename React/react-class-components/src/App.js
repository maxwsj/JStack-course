import React from 'react';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';
import { ThemeProvider } from 'styled-components';

import themes from './styles/themes';
import ThemeContext from './context/ThemeContext';

class App extends React.Component {
   static contextType = ThemeContext;
   componentDidMount() {}

   render() {
      const { theme } = this.context;

      const currentTheme = themes[theme] || themes.dark;

      return (
         <ThemeProvider theme={currentTheme}>
            <GlobalStyle />
            <Layout />
         </ThemeProvider>
      );
   }
}

export default App;
