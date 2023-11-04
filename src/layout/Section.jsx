import React from 'react'

import Header from '../components/Header'
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

function Section(props) {
  return (
    <main>
      <Header />
      <div className="container-width lg:flex lg:mt-8 lg:pb-24">
        <div className="mb-4 mr-10 xl:mr-0 lg:mb-0 w-full lg:w-1/5">
          <Sidebar />
        </div>
        
        {props.children}
        
      </div>
      <Footer />
    </main>
  )
}

export default Section