import React, {useState} from 'react'
import './admin-sidebar.css'
import { IconContext } from 'react-icons';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { Link } from 'react-router-dom';

import { SidebarData } from '../../json/SidebarData';


function Admin_Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <sidebar>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active m-0' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars m-0">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </IconContext.Provider>
    </sidebar>
  )
}

export default Admin_Sidebar