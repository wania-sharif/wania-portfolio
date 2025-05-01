import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="#home">WANIA S.</a></li>
            </ul>

            <ul>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="https://drive.google.com/file/d/1qDexofZBdZ7bYsMRQ84dvZZ6GAEHSIRg/view?usp=sharing"
                target="_blank"
                >RESUME</a><img src="images/arrow.png" className='arrow'/></li>
            </ul>

            <ul>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
};

export default Header;