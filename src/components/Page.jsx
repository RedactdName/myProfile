import React from 'react';
import PageDisplay from './PageDisplay';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';




function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
          return <Resume />; 
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{currentPage.name}</h2>
      <PageDisplay>{renderPage()}</PageDisplay>
    </section>
  );
}
export default Page;
