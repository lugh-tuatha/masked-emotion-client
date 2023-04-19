import { useState } from 'react';
import './App.css';

import * as Bs from "react-icons/bs";

import Header from './components/Header';
import SectionBox from './components/section-box';
import Button from './components/button';
import HeroBox from './components/hero-box';
import History from './components/history';
import Footer from './components/footer';

import Mission from '../src/assets/svg/mission.svg';
import Hero1 from '../src/assets/svg/hero1.svg'

import sectionBoxData from './json/sectionBoxes'

import { Link } from "react-router-dom";

function App() {
  const sectionBoxes = sectionBoxData.sectionBoxes.map((sectionBox, index) => (
    <div key={index} className="col-xl-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center">
      <SectionBox title={sectionBox.title} description={sectionBox.description} />
    </div>
  ));

  return (
    <div className='App'>
      <Header />
      <div className="row mx-auto">
        <div className="col-lg-6 hme d-flex align-items-center">
          <div>
            <p>Welcome to our community</p>
            <h3>Share Your Voice, Anonymously and Without Judgement</h3>
            <p>Our website provides a platform for you to share your thoughts, feelings, and experiences without fear of judgement or criticism. Whether you're struggling with love, regret, anxiety, or any other emotions, we invite you to join our community and let your voice be heard.</p>
          </div>
        </div>
        <div className="col-lg-6 home-image">
          <img src={Hero1} alt="" />
        </div>
      </div>
      <div className="row pt-5 pb-5 mx-auto">
        <div className="col-lg-6">
          <div>
            <h3>Embrace Your Emotions</h3>
            <h5>Share Your Feelings, Connect with Others</h5>
            <p>Connect with others who share similar experiences, gain new perspectives, and feel heard without the fear of judgment. </p>
            <p className='mt-3'>Join the Community of Thousands Sharing their Emotions Anonymously </p>
            <div className="scl">
              <p>FOLLOW US ON SOCIAL MEDIA</p>
              <div className="icn">
                <Bs.BsFacebook size={30}/>
                <Bs.BsInstagram size={30}/>
                <Bs.BsTwitter size={30}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <HeroBox />
        </div>
      </div>
      <div className="row mx-auto history-content">
        <div className="col-lg-6 px-0">
          <img src={Mission} alt="" id='mssn' className='w-100 h-100'/>
        </div>
        <div className="col-lg-6">
        <History />
        </div>
      </div>
      <div className='row footer mx-auto '>
        <Footer />
      </div>
    </div>
  );
}

export default App;
