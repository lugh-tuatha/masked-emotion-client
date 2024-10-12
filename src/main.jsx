import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from 'react-dom/client'

import App from './App'
import Release from './pages/release';
import Faqs from './pages/faqs';
import Login from './pages/login';
import Category from './pages/category';
import NotFound from './pages/not-found'
import CommentSection from './pages/comment-section'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addDefaultLocale(en)

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
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
  {
    path: "/release/:category",
    element: <Category />,
  },
  // section routes 
  {
    path: "/release/love/1",
    element: <CommentSection />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
