import React from 'react';

import Header from './_components/header';
import Footer from './_components/footer';

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