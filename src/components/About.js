import React from 'react'
// import info from "../db/basic-info"

function About() {
  const info = require("../db/basic-info")
  const getResume = () => {
    fetch("Quan_Pham_Resume_2022.pdf").then(response => {
      response.blob().then(blob => {
        const fileUrl = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileUrl;
        alink.download = "Quan_Pham_Resume_2022.pdf";
        alink.click();
      })
    })
  }

  return (
    <div className="page-container about">
      <div>
        <div className="profile-pic">
          a picture
        </div>
        <div style={{maxWidth: "80ch"}}>
          <h4>About Me</h4>
          <p style={{lineHeight: 1.8}}>
            My name is Quan Pham, I am a Junior developer who just graduated from
            Seattle University. I am dedicated to my work and passionate about learning
            new things. My work can vary from fullstack development to UI/UX design, I
            am looking forward to working with you.
          </p>
          <div className="contact-box">
            <ul>
              <li> <span>Name:</span> {info.name} </li>
              <li> <span>Education:</span> {info.education[0].level} </li>
              <li> <span>Institution:</span> {info.education[0].institution} </li>
              <li> <span>Location:</span> {info.location} </li>
            </ul>
            <ul>
              <li> <span className="icon-small icon-email"/><a href={`mailto:${info.email}`}>{info.email}</a> </li>
              <li> <span className="icon-small icon-linkedin"/><a href={info.linkedin}>{info.linkedin}</a> </li>
              <li> <span className="icon-small icon-github"/><a href={info.github}>{info.github}</a> </li>
              <li> <span className="icon-small icon-discord"/><a href={info.discord}>{info.discord}</a> </li>
            </ul>
          </div>
          <button className="download-btn" onClick={getResume}>DOWNLOAD RESUME</button>
        </div>
      </div>
      <div>
        <div className="info-box">
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
        <div style={{minWidth: "35ch"}} />
      </div>
      <div>
        <div className="contact-box" style={{width: "calc(80ch + 300px"}}>
          <ul>
            <li> <span className="icon-small icon-email"/><a href={`mailto:${info.email}`}>{info.email}</a> </li>
            <li> <span className="icon-small icon-linkedin"/><a href={info.linkedin}>{info.linkedin}</a> </li>
            <li> <span className="icon-small icon-github"/><a href={info.github}>{info.github}</a> </li>
            <li> <span className="icon-small icon-discord"/><a href={info.discord}>{info.discord}</a> </li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default About