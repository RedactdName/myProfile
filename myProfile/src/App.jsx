
import { useState } from 'react'
import './App.css'
import About from './components/About';
import Projects from './components/projects';
import ProjectCard from './components/ProjectCard';
import { Link } from 'react-router-dom';
import Head from './components/header';
// import Navbar from './components/navbar';
import Contact from './components/contact';
import Navbar from './components/navbar';
// import NavTabs from './components/Navtabs';

function App() {

  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'projects'
    },
    {
      name: 'contact'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      < Head >
        <Navbar currentPage={currentPage} />
      </Head>
      <main>
        <Page currentPage={currentPage} />
      </main>
{/* 
      < About />
      < Projects />
      < ProjectCard />
      < Contact /> */}

    </>
  )
}

export default App
// import { Outlet } from 'react-router-dom';
// import Nav from './components/Navtabs';
// function App() {
//   return (
//     <>
//       <Nav />
//       <main className="mx-3">
//         <Outlet />
//       </main>
//     </>
//   );
// }
