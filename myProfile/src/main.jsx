import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About';
import Projects from './components/projects';
import ProjectCard from './components/ProjectCard';
import { Link } from 'react-router-dom';
import Head from './components/header';
// import Navbar from './components/navbar';
import Contact from './components/contact';
import NavTabs from './components/Navtabs';
import ErrorPage from './components/error.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: < App />,
  errorElement: < ErrorPage />,
  children: [{
    index: true,
    element: <About/> 
  },{
  path: '/Projects',
  element: < Projects/>
  
  }]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

);
