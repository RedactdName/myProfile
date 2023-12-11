import React from "react";
import ProfileImage from "../../public/assets/images/my_profile.jpg";

function Header(props) {
    return (
        <header className='flex-row space-between px-1'>
            <h1 className="hero-text">I am Lisa Eimicke</h1>
            {props.children}
            <img 
          src={ProfileImage}
          className="profileImage"
          alt="Picture of Lisa Eimicke"
         
        />
            
        </header>
    )
}

export default Header;