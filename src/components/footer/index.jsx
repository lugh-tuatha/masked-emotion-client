import React from 'react'
import './footer.css'

import * as Go from 'react-icons/go'
import * as Ai from 'react-icons/ai'
import * as Bs from "react-icons/bs";

import Logo from '../../assets/icons/logo.png'

import Button from '../button';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="pt-12 py-8 footer mt-20">
      <div className="border-b-2 footer-child border-b-gray-500 md:flex footer-child w-10/12 xl:w-9/12 mx-auto pb-4">
        <div className='pr-8 text-justify'>
          <h1>MASKED EMOTION</h1>
          <p className='pt-2'>Our website provides a safe and supportive community for individuals to share their feelings and connect with others who may be going through similar experiences</p>
        </div>

        <div>
          <h1>QUICK LINKS</h1>
          <p className='my-2'>Home</p>
          <p>Release</p>
        </div>

        <div>
          <h1>SUPPORT</h1>
          <p className='my-2'>FAQs</p>
          <p>Terms of Use</p>
        </div>

        <div>
          <h1>SOCIAL</h1>

          <article className='w-full items-center gap-2 flex'>
            <Bs.BsFacebook size={28}/>
            <Ai.AiFillTwitterCircle size={32}/>
            <Ai.AiFillGithub size={32}/>
          </article>
        </div>
      </div>
      <p className='text-center mt-2'>Copyright © 2023 MaskedEmotion. All rights reserved.</p>
    </div>
  )
}


export default Footer