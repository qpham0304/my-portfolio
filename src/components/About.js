import React, { useState } from 'react'
import resume from '../assets/Quan_Pham_Resume.pdf'

function About() {
  const profileImage = require("../assets/images/profile-image.jpg")
  const info = require("../db/basic-info")
  const [isDiscordCopied, setDiscordCopied] = useState(false)

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
    setDiscordCopied(true)  
  }

  return (
    <div className="page-container about">
      <div>
        <div className="spacer" />
        <div className="profile-pic">
          <img src={profileImage}/>
        </div>
        <div className="spacer" />
        <div className="intro-box">
          <h4>About Me</h4>
          <p style={{ lineHeight: 1.8 }}>
            My name is Quan Pham, I am a Junior developer who just graduated from
            Seattle University. I am dedicated to my work and passionate about learning
            new things. My work can vary from fullstack development to UI/UX design, I
            am looking forward to working with you.
          </p>
          <div className="info-box border">
            <ul>
              <li> <span>Name:</span> {info.name} </li>
              <li> <span>Education:</span> {info.education[0].level} </li>
              <li> <span>Institution:</span> {info.education[0].institution} </li>
              <li> <span>Location:</span> {info.location} </li>
            </ul>
            <ul>
              <li> <span>Available:</span> {info.availability} </li>
              <li> <span>Freelance:</span> {info.freelance} </li>
              <li> <span>Experience:</span> {info.experience} </li>
            </ul>
          </div>
          <button className="btn download-btn">
            <a href={resume}>DOWNLOAD RESUME</a>
          </button>
          
        </div>
      </div>
      <h4>My Skills</h4>
      <div className="skill-box">
        <h6>Commonly use languages</h6>
        <p>{info.languages}</p>
        <h6>Domains of interest</h6>
        <p>{info.domains}</p>
        <h6>Technology</h6>
        <p>{info.technology}</p>
        <h6>Management</h6>
        <p>{info.management}</p>
        <h6>tools</h6>
        <p>{info.tools}</p>
      </div>
      <h4>Contact</h4>
      <div className="info-box">
        <ul style={{ margin: "-1rem 0" }}>
          <li>
            <span className="icon-small icon-email" />
            <a href={`mailto:${info.email}`}>{info.email}</a>
          </li>
          <li>
            <span className="icon-small icon-linkedin" />
            <a href={info.linkedin}>{info.linkedin}</a>
          </li>
          <li>
            <span className="icon-small icon-github" />
            <a href={info.github}>{info.github}</a>
          </li>
          <li> 
            <span className="icon-small icon-discord" />
            <a>{info.discord}</a>
            <button className={'btn copy-btn'} onClick={() => handleCopyText(info.discord)}>
              {"Copy"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About