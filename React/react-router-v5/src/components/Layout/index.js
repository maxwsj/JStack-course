import React from 'react';
import { useTheme } from 'styled-components';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default function Layout() {
   const theme = useTheme();

   return (
      <>
         <Header />
         <PostsList />
         <Footer />
      </>
   );
}
