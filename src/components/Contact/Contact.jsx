import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h3>CONTACT ME</h3>
            <div>
                <section className="socials">
                    <h2>SOCIAL</h2>
                    <ul>
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Instagram</li>
                    </ul>
                </section>
                <section className="contacts">
                    <h2>CONTACT</h2>
                    <ul>
                        <li>E-mail</li>
                        <li>Whatsapp</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Contact;