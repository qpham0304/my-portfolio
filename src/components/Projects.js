import React from 'react'

function Projects() {
  const projects = require("../db/projects.json")
  return (
    <div className="page-container proj">
      <h3>My Projects</h3>
      <div className="proj-list">
        <div>
          {projects.map((proj, i) => {
            return (
              <div key={i} className="proj-card">
                {Object.keys(proj).map((key, j) => {
                  return (
                    <div key={j}>
                      {key}: {proj[key]}
                    </div>
                  );
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects