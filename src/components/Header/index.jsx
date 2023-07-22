import React from 'react'
import './header.css';
import { NavLink, Link} from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import { HiOutlineBars3 } from 'react-icons/hi2'
import logo from '../../assets/icons/logo.png';
import { useState } from 'react';

function index() {
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className='container-width'>
      <nav className='home-nav'>
        <div className='flex justify-between items-center w-full'>
          <img src={logo} alt="" />

          <ul className='md:flex gap-8 font-bold hidden '>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/release'>Release</Link></li>
            <li><Link to='/faqs'>Faqs</Link></li>
          </ul>

          <HiOutlineBars3 className='cursor-pointer md:hidden' onClick={() => setOpenMenu(!openMenu)} size={36}/>
        </div>
      </nav>

      <nav className={`md:hidden w-full h-screen absolute bg-lightBg text-center text-xl font-bold z-50 duration-300 ${openMenu ? '-left-full' : 'left-0'}`}>
        <ul className='mx-auto flex flex-col gap-2'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/release'>Release</Link></li>
          <li><Link to='/faqs'>Faqs</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default index