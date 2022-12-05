import React from 'react'

function Experience() {
  const experience = require("../db/experience.json")
  return (
    <div className="page-container exp">
      <h3>My Work Experience</h3>
      {experience.map((work, i) => {
        return (
          <div key={i} style={{margin: "1rem"}}>
            {Object.keys(work).map((key, j) => {
              return (
                <div key={j}>
                  {key}: {work[key]}
                </div>
              );
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Experience