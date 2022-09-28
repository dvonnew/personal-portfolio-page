import React from "react";
import image from "./professional.JPG"

const AboutMe = (props) => {

    const writeUp = `Hi! My name is D'vonne Williams, I am 28 year old and am an aspiring Software Engineer. I started to become unsatisfied by crunching numbers in excel as my day job, and began learning coding as away
    to get some sort of creative escape from the mundane. I've had the opportunity to build multiple personal projects of varying scale, including to my own Mock E-commerce website. 
    As I approach the end of this self-guided bootcamp (the OdinProject), I'm now seeing the possibility of turning my dream into a reality, and am putting myself out there to seek my first dev/engineering job. 
    I know the learning never stops, and that room for constant growth is what excites me about becoming a dev. Please see some of my personal projects below, go easy on me though, 
    as I'm trying to make this career switch while also devoting time to excel at my day job. Hope you enjoy, and thanks for stopping by!`

    return (
        <div className="bio">
            <div className="portrait">
                <img src={image} alt="portrait" /> 
            </div>
            <div className="about-me">
                <div className="about-me-write-up">
                    <h2>About Me</h2>
                    <p className="write-up">{writeUp}</p>
                </div>
                <div className="my-links"></div>
            </div>
        </div>
    )
}

export default AboutMe