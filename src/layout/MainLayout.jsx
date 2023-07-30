import React from 'react';

import Header from '../components/Header';
import Footer from '../components/footer';

function MainLayout(props) {
  return (
    <main>
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}

export default MainLayout