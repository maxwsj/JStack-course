import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeProv } from './context/ThemeProvider';

ReactDOM.render(
   <ThemeProv>
      <App />
   </ThemeProv>,
   document.getElementById('root')
);
