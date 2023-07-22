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

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
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

  // section routes 
  {
    path: "/love",
    element: <Love />,
  },
  {
    path: "/sadness",
    element: <Sadness />,
  },
  {
    path: "/anger",
    element: <Anger />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
