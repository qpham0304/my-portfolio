import React, { useState } from 'react'

const ProjectCard = (props) => {
  const { proj } = props
  const[expanded, setExpanded] = useState(false)

  const handleExpandCard = () => {
    setExpanded(!expanded)
  }
  
  return(
    <div onClick={handleExpandCard} className={expanded ? "proj-card expanded" : "proj-card"}>
      <h5>{proj.title}</h5>
      <p><span>Technology:</span> {proj.technology}</p>
      <ul >
        {proj.description.map((item, i) => {
          return (<li key={i}> {item} </li>)
        })}
      </ul>
      <button className={expanded ? "expand-proj-btn" : "expand-proj-btn expanded"}>^</button>
    </div>
  )
}

const ProjectsList = () => {
  const projects = require("../db/projects.json")
  return(
    <div className="proj-list">
      {projects.map((proj, i) => {
        return (
          <ProjectCard key={i} proj={proj}/>
        )
      })}
    </div>
  )
}

function Projects() {
  return (
    <div className="page-container proj">
      <h3>My Projects</h3>
      <ProjectsList />
    </div>
  )
}

export default Projects