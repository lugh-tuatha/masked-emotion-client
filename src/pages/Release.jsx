import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

import sectionBoxData from '../json/sectionBoxes.json'

import Header from '../components/Header'
import SectionBox from '../components/section-box'
import Button from '../components/button'
import UserList from '../components/user-list'

function Release() {
  const sectionBoxes = sectionBoxData.sectionBoxes.map((sectionBox, index) => (
    <div key={index} className="col-xl-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
      <SectionBox title={sectionBox.title} description={sectionBox.description} />
    </div>
  ));

  return (
    <div className='all-body'>
            <Header />
      <div class="custom-shape-divider-top-1679237202">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
    </div>
      <main className="main-content container">
        <section className="home-section px-5">
          <p>EmoWall Confessions</p>
          <h2 className='fw-bold'>A Safe Space to Share Your Emotions Anonymously</h2>
          <p>Unburden your heart in a safe and supportive space. Share your emotions anonymously, without fear of judgment. Join our community of honest individuals who are discovering that they are not alone in their feelings.</p>

          <div className="emo-gallery mt-5">
            <p className='my-4'>Tell us what's been weighing on your mind?</p>
            <div className="row">{sectionBoxes}</div>
            <div className="emo-share-btn">
              <Link to="/love"><Button>Share your Emotions</Button></Link>
            </div>
          </div>
        </section>
      </main>
      <UserList />
    </div>
  )
}

export default Release