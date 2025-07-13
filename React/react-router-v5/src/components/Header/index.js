import React, { useContext } from 'react';
import { Container } from './styles';
import ThemeContext from '../../context/ThemeContext';

export default function Header() {
   const { theme, handleToggleTheme } = useContext(ThemeContext);
   return (
      <Container>
         <h1>JStack's Blog</h1>
         <button onClick={handleToggleTheme} type="button">
            {theme == 'light' ? '🌚' : '🌞'}
         </button>
      </Container>
   );
}
