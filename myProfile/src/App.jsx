import { useState } from 'react'
import './App.css'
import About from './components/About';
import Projects from './components/projects';
import ProjectCard from './components/ProjectCard';
import { Link } from 'react-router-dom';
import Head from './components/header';
import Navbar from './components/navbar';
import Contact from './components/contact';

function App() {
 



  return (
    <>
    < Head />
    < Navbar />
    < About/>
    < Projects/>
    < ProjectCard />
    < Contact />
     
    </>
  )
}

export default App
