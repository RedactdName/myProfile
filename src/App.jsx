import React, {useState } from 'react';
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Page from "./components/Page";




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
