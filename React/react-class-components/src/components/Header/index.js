import React from 'react';

import { Container } from './styles';
import ThemeContext from '../../context/ThemeContext';

export default class Header extends React.Component {
   static contextType = ThemeContext;
   render() {
      const { theme, handleToggleTheme } = this.context;
      return (
         <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleToggleTheme} type="button">
               {theme == 'light' ? '🌚' : '🌞'}
            </button>
         </Container>
      );
   }
}

// Header.propTypes = {
//    selectedTheme: PropTypes.string.isRequired,
//    onToggleTheme: PropTypes.func.isRequired,
// };
