import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom';

import sectionBoxData from '../../json/sectionBoxes'
import logo from '../../assets/icons/logo.png'

import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import * as Bs from "react-icons/bs";
import * as Tb from "react-icons/tb";
import * as Gi from "react-icons/gi";
import * as Md from "react-icons/md";

const icons = [
  <Ai.AiFillHeart size={16}/>,
  <Fa.FaHeartBroken size={16} />,
  <Bs.BsFire size={16} />,
  <Md.MdCelebration size={16} />,
  <Fa.FaSadCry size={16}/>,
  <Bs.BsFillExclamationOctagonFill size={16} />,
  <Gi.GiSprout size={16}/>,
  <Bs.BsFillPatchQuestionFill size={16}/>,
  <Fa.FaTired size={16}/>,
  <Fa.FaGrinStars size={16} />,
  <Gi.GiFalling size={16} />,
  <Bs.BsRocketTakeoffFill size={16} />,
];

function Sidebar() {
  const currentPathname = window.location.pathname;
  const sectionBoxes = sectionBoxData.sectionBoxes.slice(0, 3).map((sectionBox, index) => {
    const isActive = currentPathname === sectionBox.link;
    const className = `sidenav section-icon flex items-center gap-2 ${isActive ? 'active' : ''}`;
    return (
      <Link to={sectionBox.link} key={index}>
        <ul className={className}>
          <div className='icon'>
            {icons[index]}
          </div>
          <li className="my-2">{sectionBox.description}</li>
        </ul>
      </Link>
    ); 
  });

  return (
    <div className='sidenav d-block m-0 p-0'>
      <h2>Explore Emotions</h2>
      {sectionBoxes}
    </div>  
  );
}

export default Sidebar