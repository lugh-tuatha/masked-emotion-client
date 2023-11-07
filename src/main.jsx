import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Release from './pages/Release';
import Faqs from './pages/Faqs';

import Love from './pages/sections/Love'
import Sadness from './pages/sections/Sadness'
import Anger from './pages/sections/Anger'

import CommentSection from './pages/CommentSection'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import Login from './pages/login';
TimeAgo.addDefaultLocale(en)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/release",
    element: <Release />,
  },
  {
    path: "/faqs",
    element: <Faqs />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // section routes 
  {
    path: "/release/love",
    element: <Love />,
  },
  {
    path: "/release/sadness",
    element: <Sadness />,
  },
  {
    path: "/release/anger",
    element: <Anger />,
  },
  {
    path: "/release/love/1",
    element: <CommentSection />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
