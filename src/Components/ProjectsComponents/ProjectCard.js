import React from "react";
import { mdiOpenInNew } from '@mdi/js'
import Icon from "@mdi/react";

const ProjectCards = (props) => {

    const { project } = props
    
    return (
        <div className="project-card">
            <img src={project.image} alt="project" className="project-image"/>
            <div className="project-details">
                <div className="title-and-links">
                    <h4 className="project-title">{project.name}</h4>
                    <div className="project-links">
                        <a href={project.github} className='links' target="_blank">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"/>
                        </a>
                        <a href={project.url} className='links' target="_blank">
                            <Icon path={mdiOpenInNew}
                            color="black" />
                        </a>
                    </div>
                </div>
                <div className="description">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards