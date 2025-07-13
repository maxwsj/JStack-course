import React from 'react';
import ThemeContext from './ThemeContext';

export class ThemeProv extends React.Component {
   constructor(props) {
      super(props);

      let theme = 'dark';
      try {
         theme = JSON.parse(localStorage.getItem('theme'));
      } catch (error) {
         console.log(error);
      }

      this.state = {
         theme,
      };
   }

   handleToggleTheme = () => {
      this.setState(
         (prev) => ({
            theme: prev.theme === 'dark' ? 'light' : 'dark',
         }),
         () => {
            localStorage.setItem('theme', JSON.stringify(this.state.theme));
         }
      );
   };

   render() {
      return (
         <ThemeContext.Provider
            value={{
               theme: this.state.theme,
               handleToggleTheme: this.handleToggleTheme,
            }}
         >
            {this.props.children}
         </ThemeContext.Provider>
      );
   }
}
