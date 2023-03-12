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

        <SectionBox />
      </section>

    </div>
  )
}

export default App
