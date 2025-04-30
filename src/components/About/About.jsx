import './about.css';

const About = () => {
    return (
        <div className="about">
            <h2>ABOUT ME</h2>
            <div className='content'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris sit amet lectus vel magna tincidunt commodo. Pellentesque
                    tincidunt nec lectus vel fermentum. Vivamus leo lectus, porttitor
                    a fringilla non, ultrices pulvinar eros. Donec at tincidunt mi. 
                    Quisque ac finibus nulla. Orci varius natoque penatibus et magnis 
                    dis parturient montes, nascetur ridiculus mus. Nam a lorem congue, 
                    pellentesque erat ultrices, porttitor dolor. Nullam sit amet lorem 
                    ultricies, cursus sapien at, consectetur magna.
                </p>

                <div className='career'>
                    <h3>EXPERIENCE</h3>
                    <Item
                        title="MOBILE APPLICATION DEVELOPMENT"
                        date="2023 - 2026"
                        description="St. Clair College, Windsor, Ontario"
                    />
                    <Item
                        title="MOBILE APPLICATION DEVELOPMENT"
                        date="2023 - 2026"
                        description="St. Clair College, Windsor, Ontario"
                    />

                    <h3>EDUCATION</h3>
                    <Item
                        title="MOBILE APPLICATION DEVELOPMENT"
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