import { Outlet } from 'react-router-dom';
import Nav from './components/Navtabs';
function App() {
  return (
    <>
      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}



// ___________________________________________________________________
// import { useState } from 'react'
// import './App.css'
// import About from './components/About';
// import Projects from './components/projects';
// import ProjectCard from './components/ProjectCard';
// import { Link } from 'react-router-dom';
// import Head from './components/header';
// // import Navbar from './components/navbar';
// import Contact from './components/contact';
// import NavTabs from './components/Navtabs';

// function App() {

//   return (
//     <>
//     < Head />
//     {/* < Navbar /> */}
//     < NavTabs/>
//     < About/>
//     < Projects/>
//     < ProjectCard />
//     < Contact />
     
//     </>
//   )
// }

export default App
