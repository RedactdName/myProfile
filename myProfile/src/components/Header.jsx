// function Head(){
//     return (
// <header>
//     <h1 className="hero-text">I am Lisa Eimicke</h1>

//     <nav className="navigation">
//         <a  href="#ContactMe">Contact Me</a>
//         <a  href="#Work">Work</a>
//         <a  href="#AboutMe">About Me</a>
//     </nav>
//     <img src="../assets/images/my_profile.jpg" alt="Picture of Lisa Eimicke" className="image" />
// </header>
// )}
// export default Head;

import ProfileImage from '../assets/images/my_profile.jpg'

function Head(props) {
    return (
        <header>
            <h1 className="hero-text">I am Lisa Eimicke</h1>
            <img src={ProfileImage} alt="Picture of Lisa Eimicke" className="image" />
            {props.children}
        </header>
    )
}

export default Head;