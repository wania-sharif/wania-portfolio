import './about.css';

const About = () => {
    return (
        <div className="about">
            {/* <h2>ABOUT ME</h2> */}
            <div className='content'>
                <p>Hey, I'm Wania Sharif. I am a software developer based in Windsor, Ontario <br/>
                    <br/>Quisque ac finibus nulla. Orci varius natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus. Nam a lorem congue, 
                    pellentesque erat ultrices, porttitor dolor. Nullam sit amet lorem 
                    ultricies, cursus sapien at, consectetur magna.
                </p>

                <div className='career'>
                    <h3>EXPERIENCE</h3>
                    <Item
                        title="CICAN Hackathon"
                        date="2025"
                        description="Hackathon hosted by Colleges and Institutes of Canada"
                    />
                    <Item
                        title="WinHacks"
                        date="2025"
                        description="Hackathon hosted by University of Windsor"
                    />
                    <Item
                        title="Software Development Student"
                        date="2023 - NOW"
                        description="Learning practices and principles of software development through
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