import React from 'react'

import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: 'User',
    path: '/dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Posts',
    path: '/posts',
    icon: <AiIcons.AiFillBell />,
    cName: 'nav-text'
  },
]