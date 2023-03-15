import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Signup from './pages/Signup';
import About from './pages/About';
import Release from './pages/Release';
import Login from './pages/Login';
import Reset from './pages/Reset';

import Love from './pages/sections/Love'
import Sadness from './pages/sections/Sadness'
import Anger from './pages/sections/Anger'
import Happiness from './pages/sections/Happiness'


import UserDetails from './components/user-details';

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
    path: "/about",
    element: <About />,
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
    path: "/reset",
    element: <Reset />,
  },

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
