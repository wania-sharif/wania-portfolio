import React from 'react';
import './header.css';
import Burger from './Burger/Burger';

const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><a href="#home" className='underline'>WANIA S.</a></li>
            </ul>

            <ul>
                <li><a href="#projects" className='underline'>PROJECTS</a></li>
                <li><a href="#about" className='underline'>ABOUT ME</a></li>
                <li><a href="https://drive.google.com/file/d/1qDexofZBdZ7bYsMRQ84dvZZ6GAEHSIRg/view?usp=sharing"
                target="_blank"
                className='underline'
                >RESUME</a><img src="images/arrow.png" className='arrow'/></li>
            </ul>

            <ul>
                <li><a href="#contact" className='underline'>CONTACT</a></li>
            </ul>
            <ul>
                <Burger />
            </ul>
        </div>
    );
};

export default Header;