import React, { useContext } from 'react';

import { Container } from './styles';
import ThemeContext from '../../context/ThemeContext';

export default function Footer() {
   const { theme, handleToggleTheme } = useContext(ThemeContext);

   return (
      <Container>
         <span>JStack's Blog. Todos os direitos reservados.</span>
         <button onClick={handleToggleTheme} type="button">
            {theme == 'light' ? '🌚' : '🌞'}
         </button>
      </Container>
   );
}
