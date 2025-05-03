import React, { useRef } from 'react';
import './contact.css';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.8, once: true });
    return (
        <div className="contact" id="contact" ref={ref}>
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={ isInView && { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >Contact me</motion.h3>

            <motion.div className="socials"
                initial={{ opacity: 0, y: -50 }}
                animate={ isInView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}>
                <ul>
                    <li><a href="mailto:dev.waniash@gmail.com" className='underline'>dev.waniash@gmail.com</a></li>
                    <li><a href="https://www.linkedin.com/in/wania-sharif-a76834324" 
                            target='_blank'
                            className='underline'>LinkedIn</a></li>
                    <li><a href="https://github.com/wania-sharif" target='_blank' className='underline'>GitHub</a></li>
                </ul>
            </motion.div>

            <div className='copyright'>
                <p>© 2025 Wania Sharif.</p>
                <p>All rights reserved.</p>
            </div>
            
        </div>
    );
};

export default Contact;