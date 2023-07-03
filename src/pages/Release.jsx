import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

import sectionBoxData from '../json/sectionBoxes.json'

import Header from '../components/Header'
import SectionBox from '../components/section-box'
import Button from '../components/button'
import Footer from '../components/footer'

function Release() {
  const sectionBoxes = sectionBoxData.sectionBoxes.map((sectionBox, index) => (
    <div key={index} className="bg-red">
      <Link to={sectionBox.link} >
        <SectionBox title={sectionBox.title} description={sectionBox.description} />
      </Link>
    </div>
  ));

  return (
    <div>
      <Header />
      <div className='container-width text-center release'>

        <div className='lg:w-10/12 mx-auto text-xl'>
          <p>EmoWall Confessions</p>
          <h1 className='font-extrabold text-3xl my-2'>A Safe Space to Share Your Emotions Anonymously</h1>
          <p>Unburden your heart in a safe and supportive space. Share your emotions anonymously, without fear of judgment. Join our community of honest individuals who are discovering that they are not alone in their feelings.</p>
        </div>

        <div className='grid grid-cols-6 gap-2 lg:w-10/12 mx-auto my-8 justify-between'>
          {sectionBoxes}
        </div>

        <p className='my-2'>Tell us what's been weighing on your mind?</p>
  
        <Link to="/love"><Button>Share your emotions</Button></Link>
      </div>

      <Footer />
    </div>

  )
}

export default Release