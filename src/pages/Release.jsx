import React from 'react'
import { Link } from 'react-router-dom'

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
    <div>
      <Header />
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