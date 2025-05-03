import { useRef } from 'react';
import './about.css';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const slideIn = {
        hidden: {
          opacity: 0,
          x: -100
        },
        visible: {
          opacity: 1,
          x: 0
        }
    };

    const transition = {
        duration: 0.5,
        delay: 0.3,
    }

    const ref = useRef(null);
    const isInView = useInView(ref, {amount: 0.5});

    return (
        <div className="about" id='about'>
            <div className='content'>
                <motion.div className='text' ref={ref} initial='hidden' animate={isInView ? 'visible': 'hidden'}>
                    <motion.p variants={slideIn} transition={transition}>Hey, I'm <strong>Wania!</strong><br/> I am a software developer based in Canada. <br/><br/>
                    I have a <strong>passion</strong> for creating <strong>beautiful</strong>, functional, and user-friendly applications.
                    My goal is to use my <strong>creativity</strong> to cultivate experiences that satisfy others. <br/>
                    </motion.p>
                    {/* <button>MORE ABOUT ME</button> */}
                </motion.div>

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

                    {/* <h3>AWARDS</h3> 
                    <ul>
                        <li>Academic Excellence Scholarship x2</li>
                        <li>Academic Distinction Award x3</li>
                    </ul>
                    

                    <h3>EDUCATION</h3>
                    <Item
                        title="Mobile Application Development, AA/OCAD"
                        date="2023 - 2026"
                        description="St. Clair College, Windsor, Ontario"
                    /> */}
                    
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