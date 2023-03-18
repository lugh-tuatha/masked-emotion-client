import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

import sectionBoxData from '../../json/sectionBoxes'

import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import * as Tb from "react-icons/tb";
import * as Gi from "react-icons/gi";
import * as Md from "react-icons/md";

const icons = [
  <Ai.AiFillHeart size={20}/>,
  <Fa.FaHeartBroken size={20} />,
  <Bs.BsFire size={20} />,
  <Md.MdCelebration size={20} />,
  <Fa.FaSadCry size={20}/>,
  <Bs.BsFillExclamationOctagonFill size={20} />,
  <Gi.GiSprout size={20}/>,
  <Bs.BsFillPatchQuestionFill size={20}/>,
  <Fa.FaTired size={20}/>,
  <Fa.FaGrinStars size={20} />,
  <Gi.GiFalling size={20} />,
  <Bs.BsRocketTakeoffFill size={20} />,
];

function Sidebar() {
  const currentPathname = window.location.pathname;
  const sectionBoxes = sectionBoxData.sectionBoxes.map((sectionBox, index) => {
    const isActive = currentPathname === sectionBox.link;
    const className = `d-flex align-items-center gap-2 ${isActive ? 'active' : ''}`;
    return (
      <Link to={sectionBox.link} key={index}>
        <ul className={className}>
          {icons[index]}
          <li className="my-2">{sectionBox.description}</li>
        </ul>
      </Link>
    );
  });

  return (
    <nav className='sidenav d-block m-0 p-0'>
      <div className='sidenav-head d-flex align-items-center'>
        <img src="https://th.bing.com/th/id/OIG.NUVCQ0M1MzM3NzM3ODc0?pcl=1b1a19&pid=ImgGn" className='img-fluid'/>
      </div>
      <h2 className='text-center my-4'>Explore Emotions</h2>
      {sectionBoxes}
    </nav>  
  );
}


export default Sidebar