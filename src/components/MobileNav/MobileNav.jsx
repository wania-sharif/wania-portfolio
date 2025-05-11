import './mobileNav.css';

const MobileNav = (props) => {
    return (
        <div className={"mobile-nav" + (props.state ? " open" : "")}>
            <ul>
                <li><a href="">HOME</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#about">ABOUT ME</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            <ul>
                <li><a href="https://drive.google.com/file/d/1qDexofZBdZ7bYsMRQ84dvZZ6GAEHSIRg/view?usp=sharing" 
                       target="_blank">VIEW RESUME</a></li>
                <li><a href="https://www.linkedin.com/in/wania-sharif-a76834324" target='_blank'>LINKEDIN</a></li>
            </ul>
        </div>
    );
}

export default MobileNav;