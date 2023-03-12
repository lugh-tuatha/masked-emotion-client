import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import SectionBox from './components/section-box'

function App() {
  return (
    <div className="container">
      <Header />

      <section>
        <p>EmoWall Confessions</p>
        <h2><b>A Safe Space to Share Your Emotions Anonymously</b></h2>
        <p>Unburden your heart in a safe and supportive space. Share your emotions anonymously, without fear of judgement.</p>
        <p>Join our community of honest individuals who are discovering that they are not alone in their feelings</p>

        <div className="emo-gal">
          <p>Tell us what's been weighning on your mind?</p>
          <div className="row">
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
            <div className="col-lg-2">
              <SectionBox />
              <SectionBox />
            </div>
          </div>
          <div className="btn">
            <button>Share Your Emotions</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
