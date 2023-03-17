import { useState } from 'react';
import './App.css';

import * as Bs from "react-icons/bs";

import Header from './components/Header';
import SectionBox from './components/section-box';
import Button from './components/button';
import HeroBox from './components/hero-box';
import History from './components/history';
import Newsletter from './components/newsletter';
import Footer from './components/footer';

import Mission from '../src/assets/svg/mission.svg';

import sectionBoxData from './json/sectionBoxes'

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
        <div className="col-lg-7 hme">
          <p>Welcome to our community</p>
          <h3>Share Your Voice, Anonymously and Without Judgement</h3>
          <p>Our website provides a platform for you to share your thoughts, feelings, and experiences without fear of judgement or criticism. Whether you're struggling with love, regret, anxiety, or any other emotions, we invite you to join our community and let your voice be heard.</p>
          <div className="hmbtn">
            <p>Join the community</p>
            <Button>SIGN UP</Button><span><Button>LOGIN</Button></span>
          </div>
        </div>
        <div className="col-lg-5"></div>
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
                <a link=''><Bs.BsFacebook/></a>
                <a link=''><Bs.BsInstagram/></a>
                <a link=''><Bs.BsTwitter/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <HeroBox />
        </div>
      </div>
      <div className="row mx-auto">
        <div className="col-lg-6">
          <img src={Mission} alt="" id='mssn' className='w-100 h-100'/>
        </div>
        <div className="col-lg-6">
        <History />
        </div>
      </div>
      <div className="row nwsltt mx-auto">
        <div className="col-lg-6 nwslttr1">
          <h5>Stay Connected with EmoWall Newsletter</h5>
          <h3>Be the first to know about our latest anonymous posts and updates</h3>
          <p>Sign up for our newsletter and never miss a thing! Get exclusive access to our latest anonymous posts, updates on our website, and other special offers. </p>
          <div className="scl">
              <p>FOLLOW US ON SOCIAL MEDIA</p>
              <div className="icn">
                <a link=''><Bs.BsFacebook/></a>
                <a link=''><Bs.BsInstagram/></a>
                <a link=''><Bs.BsTwitter/></a>
              </div>
            </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 nws">
          <Newsletter />
        </div>
      </div>

      <div className='row footer mx-auto'>

          <Footer />

      </div>


      {/* <main className="main-content">
        <section className="home-section px-5">
          <p>EmoWall Confessions</p>
          <h2 className='fw-bold'>A Safe Space to Share Your Emotions Anonymously</h2>
          <p>Unburden your heart in a safe and supportive space. Share your emotions anonymously, without fear of judgment. Join our community of honest individuals who are discovering that they are not alone in their feelings.</p>

          <div className="emo-gallery mt-5">
            <p className='my-4'>Tell us what's been weighing on your mind?</p>
            <div className="row">{sectionBoxes}</div>
            <div className="emo-share-btn">
              <Button>Share your Emotions</Button>
            </div>
          </div>
        </section>
      </main> */}

    </div>
  );
}

export default App;
