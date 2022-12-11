import React, { useState } from 'react'

const ExperienceCard = (props) => {
  const { exp } = props
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={"proj-card expanded"}>
      <h5>{exp.jobTitle}</h5>
      <h6>{exp.employer}</h6>
      <h6>{exp.from} - {exp.to}</h6>
      <h6>{exp.description}</h6>
      <ul>
        {exp.insight.map((item, i) => {
          return (<li key ={i}>{item}</li>)
        })}
      </ul>
    </div>
  )
}

const ProjectsList = () => {
  const experience = require("../db/experience.json")
  return(
    <div className="proj-list">
      {experience.map((exp, i) => {
        return (
          <ExperienceCard key={i} exp={exp}/>
        )
      })}
    </div>
  )
}

function Experience() {
  return (
    <div className="page-container exp">
      <h3>My Experience</h3>
      <ProjectsList />
    </div>
  )
}

export default Experience