import React from 'react'
import { Link } from 'react-router-dom'
import '../pages.css'

import SectionList from './_components/section-list'

import Button from '../../components/shared/button'
import MainLayout from '../../layout/MainLayout'

function Release() {
  return (
    <MainLayout>
      <div className='container-width text-center release md:mt-12 md:mb-72'>

        <div className='lg:w-10/12 mx-auto text-xl'>
          <p>EmoWall Confessions</p>
          <h1 className='font-extrabold text-3xl my-2'>A Safe Space to Share Your Emotions Anonymously</h1>
          <p>Unburden your heart in a safe and supportive space. Share your emotions anonymously, without fear of judgment. Join our community of honest individuals who are discovering that they are not alone in their feelings.</p>
        </div>

        <SectionList />

        <p className='my-2'>Tell us what's been weighing on your mind?</p>

        <Link to="/release/love"><Button>Share your emotions</Button></Link>
      </div>
    </MainLayout>
  )
}

export default Release