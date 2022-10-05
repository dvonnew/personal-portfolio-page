import React from "react";
import image from "./skiing.JPG"

const Contact = (props) => {


    return (
        <div className="contacts">
            <div className="contact-info"> 
                <h2>Contact Information</h2>
                <p>Please feel free to contact me with any inquiries. My contact information is listed below:</p>
                <p>A: 1150 Galapago St, APT 909 Denver CO, 80204</p>
                <p>E: dvonnewilliams1@gmail.com</p>
                <p>P: 978-844-8682</p>
                <div className="my-links">
                    <a href='https://github.com/dvonnew' className='links' target="_blank">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"/>
                    </a>
                    <a href='https://www.linkedin.com/in/dvonne-williams/' className='links' target="_blank">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
                    </a>
                </div>
            </div>
            <div className="contact-photo">
                <img src={image} alt="contact" />
            </div>
        </div>
    )
}

export default Contact