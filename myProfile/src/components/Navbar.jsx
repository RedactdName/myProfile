import { Link } from 'react-router-dom';


function Navbar({ currentPage }) {
    const pages = ['projects', 'contact']
    return (
        <nav className="navigation">
            {/* <a href="#ContactMe">Contact Me</a>
            <a href="#Work">Work</a>
            <a href="#AboutMe">About Me</a> */}
            <ul>
                <li
                    className={currentPage === '/' && 'navActive'} key='about'
                >
                    <Link to='/'>About</Link>
                </li>
                {pages.map((Page) => (
                    <li
                        className={currentPage === `/${Page}` && 'navActive'} key={Page}
                    >
                        <Link to={`/${Page}`}>{Page}</Link>
                    </li>
                ))}
            </ul>

        </nav>
    )
}
export default Navbar;