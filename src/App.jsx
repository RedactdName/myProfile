import React, {useState } from 'react';
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import Page from "../components/Page.jsx";




function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    { name: "Portfolio" },
    { name: "Resume"},
    { name: "Contact" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        <Navbar
          pages={pages}  cu
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Navbar>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
    
    </div>
  );
}




export default App;
