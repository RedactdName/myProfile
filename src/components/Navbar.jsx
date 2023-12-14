import React, { useEffect } from 'react';

function Navbar(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,
      } = props;
      useEffect(() => {
        document.title = currentPage.name;
      }, [currentPage]);
      return (
          <nav className='navigation'>
            <ul className="flex-row">
              {pages.map((Page) => (
                <li
                  className={`mx-5 ${
                    currentPage.name === Page.name && 'navActive'
                    }`}
                  key={Page.name}
                >
                  <span
                    onClick={() => setCurrentPage(Page)}
                  >
                    {Page.name}
                  </span>
                </li>
              ))}
            </ul>

        </nav>
    )
}
export default Navbar;