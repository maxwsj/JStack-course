import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import ThemeContext from '../../context/ThemeContext';

export default function Header() {
   const { theme, handleToggleTheme } = useContext(ThemeContext);
   const history = useHistory();

   function handleNavigate() {
      history.push('/');
   }

   return (
      <Container>
         <h1>JStack's Blog</h1>
         <button onClick={handleToggleTheme} type="button">
            {theme == 'light' ? '🌚' : '🌞'}
         </button>
         <button onClick={handleNavigate} style={{ color: '#fff' }}>
            Navegar
         </button>
      </Container>
   );
}
