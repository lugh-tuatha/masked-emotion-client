import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Release from './pages/Release';
import Developers from './pages/Developers'
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

import Love from './pages/sections/Love'
import Sadness from './pages/sections/Sadness'
import Anger from './pages/sections/Anger'
import Happiness from './pages/sections/Happiness'
import Regret from './pages/sections/Regret'
import Anxiety from './pages/sections/Anxiety'
import Hope from './pages/sections/Hope'
import Confusion from './pages/sections/Confusion'
import Guilt from './pages/sections/Guilt'
import Gratitude from './pages/sections/Gratitude'
import Fear from './pages/sections/Fear'
import Dream from './pages/sections/Dream'

import UserDetails from './components/user-details';

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/release",
    element: <Release />,
  },
  {
    path: "/userDetails",
    element: <UserDetails />,
  },
  {
    path: "/developers",
    element: <Developers />,
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
  {
    path: "/happiness",
    element: <Happiness />,
  },
  {
    path: "/regret",
    element: <Regret />,
  },
  {
    path: "/anxiety",
    element: <Anxiety />,
  },
  {
    path: "/hope",
    element: <Hope />,
  },
  {
    path: "/confusion",
    element: <Confusion />,
  },
  {
    path: "/guilt",
    element: <Guilt />,
  },
  {
    path: "/gratitude",
    element: <Gratitude />,
  },
  {
    path: "/fear",
    element: <Fear />,
  },
  {
    path: "/dream",
    element: <Dream />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
