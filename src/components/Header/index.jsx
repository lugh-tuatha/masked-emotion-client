import React from 'react'
import './header.css';
import { NavLink, Link} from "react-router-dom";
import { FaBars } from 'react-icons/fa';

import { HiOutlineBars3 } from 'react-icons/hi2'
import logo from '../../assets/icons/logo.png';

function index() {
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

          <div className='md:hidden'>
            <HiOutlineBars3 size={36}/>

            <ul className='w-full bg-white absolute left-0 top-0 h-screen'>
              <li className='font-2xl'><Link to='/'>Home</Link></li>
              <li className='font-2xl'><Link to='/release'>Release</Link></li>
              <li className='font-2xl'><Link to='/faqs'>Faqs</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default index