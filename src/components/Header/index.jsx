import React, { useEffect, useState } from 'react'
import './header.css';
import { NavLink, Link} from "react-router-dom";

import Button from '../button';

import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import * as Md from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

import logo from '../../assets/icons/logo.png';

function index() {
  const [openMenu, setOpenMenu] = useState(true);
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if(isDark === true){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <div className='container-width'>
      <nav className='home-nav'>
        <div className='flex justify-between items-center w-full'>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>

          <ul className='md:flex gap-4 font-bold hidden items-center'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/faqs'>Faqs</Link></li>
            {isDark ? 
              ( <Md.MdSunny onClick={toggleTheme} size={24} className='cursor-pointer' /> ) :
              (<Md.MdDarkMode onClick={toggleTheme} size={24} className='cursor-pointer' />)}
            
            <FaUser size={19} className='cursor-pointer'/>
            <Link to='/release'>
              <Button>Release</Button>
            </Link>
          </ul>

          <div className='cursor-pointer md:hidden flex gap-2'>
            {openMenu ? 
              <HiOutlineBars3 onClick={() => setOpenMenu(!openMenu)} size={36}/>
            : <IoMdClose onClick={() => setOpenMenu(!openMenu)} size={36}/> }
          </div>
        </div>
      </nav>

      <nav className={`md:hidden w-full h-screen absolute bg-lightBg text-center text-xl font-bold z-50 duration-300 ${openMenu ? '-left-full' : 'left-0'}`}>
        <ul className='mx-auto flex flex-col gap-2'>
          <li onClick={() => setOpenMenu(!openMenu)}><Link to='/'>Home</Link></li>
          <li onClick={() => setOpenMenu(!openMenu)}><Link to='/release'>Release</Link></li>
          <li onClick={() => setOpenMenu(!openMenu)}><Link to='/faqs'>Faqs</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default index