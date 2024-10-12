import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import * as Ai from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";

import HeroBox from './components/hero-box';
import History from './components/about';
import Button from './components/shared/button';
import MainLayout from './layout/MainLayout';

import homeHero from './assets/svg/home-hero.svg'
import emotion from './assets/img/emotion.png'

function App() {
  return (
    <MainLayout>
      <div className="lg:flex items-center container-width">
        <div className='w-full lg:w-2/3'>
          <div className="w-full lg:w-3/4 text-lg">
            <p >Welcome to our community</p>
            <h1 className='text-3xl font-bold mb-2'>Share Your Voice, Anonymously and Without Judgement</h1>
            <p className='text-justify mb-4'>Our website provides a platform for you to share your thoughts, feelings, and experiences without fear of judgement or criticism. Whether you're struggling with love, regret, anxiety, or any other emotions, we invite you to join our community and let your voice be heard.</p>
            <Link to="/release">
              <Button>Share Anonymously</Button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/3 self-end mt-8 lg:mt-0">
          <img src={homeHero} alt=""/>
        </div>
      </div>

      <div className='lg:flex items-center gap-10 container-width mt-16'>
        <div className="w-full lg:w-1/3 xl:w-2/3">
          <div className='w-full text-lg'>
            <h1 className='text-3xl font-bold'>Embrace Your Emotions</h1>
            <h2 className='text-2xl font-thin mb-2'>Share Your Feelings, Connect with Others</h2>
            <p className='text-justify mb-12'>Connect with others who share similar experiences, gain new perspectives, and feel heard without the fear of judgment. </p>
            <p className='text-sm'>Join the Community of Thousands Sharing their Emotions Anonymously </p>
            <p className='text-sm'>FOLLOW US ON SOCIAL MEDIA</p>
            <div className='flex mt-2 gap-2 cursor-pointer'>
              <Ai.AiOutlineFacebook size={32}/>
              <Ai.AiOutlineInstagram size={32}/>
              <LiaTwitterSquare size={34}/>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-2/3 xl:w-2/3 mt-8 lg:mt-0'>
          <HeroBox />
        </div>
      </div>

      <div className="lg:flex items-center container-width mt-12">
        <div className='w-full lg:w-1/2 mt-8 lg:mt-0 '>
          <img src={emotion} alt="" />
        </div>
        
        <div className="w-full lg:w-1/2">
          <History />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
