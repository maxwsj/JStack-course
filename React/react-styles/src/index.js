import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';

import GlobalStyle from './styles/global';

ReactDOM.render(
   <>
      <GlobalStyle />
      <App />
   </>,
   document.getElementById('root')
);
