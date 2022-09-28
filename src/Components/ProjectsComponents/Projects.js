import React, { useState } from "react";
import ProjectCards from "./ProjectCard";
import ecommerce from "./ProjectImages/e-commerce.png"
import memoryGame from "./ProjectImages/memory-game.png"
import taskApp from "./ProjectImages/task-app.png"
import weatherApp from "./ProjectImages/weathering-around.png"

const Projects = () => {

    const projectsList = [
        {
            "id": 1,
            "name" : "E-commerce Site",
            "description" : "A mock E-commerce website, using the free-store-API, and Firebase Storage API. Users can uses the google login, to save their cart, address, and payment information, as well as view their order history",
            "url" : "https://jocular-cucurucho-8e6c53.netlify.app/",
            "github": "https://github.com/dvonnew/mock-ecommerce",
            "image" : ecommerce
            
        },
        {
            "id" : 2,
            "name" : "Todo-list",
            "description" : "A task list app, that maintains a users list of task/reminders and allows them to set the due date, priority and title. The user can also mark tasks as complete as well as delete tasks that are no longer needed",
            "url" : "https://festive-goodall-dba849.netlify.app/",
            "github": "https://github.com/dvonnew/todo_list",
            "image" : taskApp
        },
        {
            "id" : 2,
            "name" : "Weather App",
            "description" : "A weather app using the OpenWeather API. Users can search for a location and receive relevant weather data for the location. Users can see both Farenheit and Celsius.",
            "url" : "https://friendly-clarke-bfd541.netlify.app/",
            "github" : "https://github.com/dvonnew/weatherapp",
            "image" : weatherApp
        },
        {
            "id" : 4,
            "name" : "Memory Card Game",
            "description" : "A classic memory game. Three cards from which a player selects. Scores are tallied up, until the user guesses a card twice. The user's high score is monitored while playing.",
            "url" : "https://reliable-cactus-d19140.netlify.app",
            "github": "https://github.com/dvonnew/memory-game",
            "image" : memoryGame
        }
    ]

    const [projects, setProjects] = useState(projectsList)

    return(
        <div className="projects">
            <h2>My Work</h2>
            <div className="projects-display">
                {projects.map(project => (
                    <ProjectCards project={project} key={project.id}/>
                ))}
            </div>
        </div>
    )
}

export default Projects