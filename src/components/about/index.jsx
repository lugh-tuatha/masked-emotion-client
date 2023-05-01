import React from 'react'
import './about.css'
import * as Fa from "react-icons/fa";

function About() {
  return (
      <div className="about sm:py-20 sm:pl-20">
        <p className='text-2xl mb-2'>Share, Express, Connect</p>
        <h1 className='font-bold text-4xl mb-8'>Empower Your Emotions with Masked Emotion</h1>
        <div className="flex">
          <div>
            <Fa.FaRegDotCircle size={32}/>
            <div className="line mx-auto"></div>
          </div>

          <div className='ml-3'>
            <h1 className='text-lg font-semibold'><span className='text-2xl mr-3'>01</span>Our Mission</h1>
            <p className='text-justify '>At Masked Emotion, our mission is to provide a safe and supportive online community for individuals to express their emotions, connect with others who share similar experiences, and find resources to help them navigate the challenges of life.</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <Fa.FaRegDotCircle size={32}/>
            <div className="line mx-auto"></div>
          </div>

          <div className='ml-3'>
            <h1 className='text-lg font-semibold'><span className='text-2xl mr-3'>02</span>Our History</h1>
            <p className='text-justify '>Masked Emotion was founded in 2023 with a vision to create a safe and inclusive online space where individuals can freely express their thoughts and emotions without fear of judgment or criticism.</p>
          </div>
        </div>

        <div className="flex">
          <div>
            <Fa.FaRegDotCircle size={32}/>
          </div>

          <div className='ml-3'>
            <h1 className='text-lg font-semibold'><span className='text-2xl mr-3'>03</span>Our Team</h1>
            <p className='text-justify '>Our team is made up of passionate individuals who are dedicated to providing a safe and supportive space for users to express their emotions. We pride ourselves on our expertise in website moderation and user support and our commitment to providing the best possible experience for our users.</p>
          </div>
        </div>
      </div>
  )
}

export default About