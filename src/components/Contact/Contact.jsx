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
            >CONTACT ME</motion.h3>

            <div>
                <motion.div className="socials"
                    initial={{ opacity: 0, y: -50 }}
                    animate={ isInView && { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    <h2>SOCIAL</h2>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                    </ul>
                </motion.div>
                
                <motion.div className="contacts"
                initial={{ opacity: 0, y: -50 }}
                animate={isInView && { opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}>
                    <h2>CONTACT</h2>
                    <ul>
                        <li>E-mail</li>
                        <li>Whatsapp</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;