import './about.css';

const About = () => {
    return (
        <div className="about">
            <div className='content'>
                <p>Hey, I'm Wania! I am a software developer based in Windsor, Ontario. <br/>
                I have a passion for creating <strong>beautiful,</strong> functional, and user-friendly applications. <br/>
                My goal is to use my <strong>creativity</strong> in ways that bring <strong>satisfaction</strong> to others. <br/>

                <br/>I am currently pursuing a degree in Mobile Application Development at St. Clair College.
                I have worked on several projects, including full-stack web and mobile applications. <br/>
                I am always eager to learn new technologies and improve my skills. <br/>
                </p>

                <div className='career'>
                    <h3>EXPERIENCE</h3>
                    <Item
                        title="CICan Hackathon"
                        date="2025"
                        description="Hackathon hosted by Colleges and Institutes of Canada"
                    />
                    <Item
                        title="WinHacks Hackathon"
                        date="2025"
                        description="Hackathon hosted by University of Windsor"
                    />
                    <Item
                        title="Programming"
                        date="2023 - NOW"
                        description="Learning software development through
                        the development of full stack applications."
                    />

                    <h3>AWARDS</h3> 
                    <ul>
                        <li>Academic Excellence Scholarship x2</li>
                        <li>Academic Distinction Award x3</li>
                    </ul>
                    

                    <h3>EDUCATION</h3>
                    <Item
                        title="Mobile Application Development, AA/OCAD"
                        date="2023 - 2026"
                        description="St. Clair College, Windsor, Ontario"
                    />
                    
                </div>
            </div>
        </div>
    );
}

// Item component to display individual items in the career section
const Item = ({ title, date, description }) => {
    return (
        <div className='career-item'>
            <h4>{title}</h4>
            <p>{date}</p>
            <p>{description}</p>
        </div>
    );
}

export default About;