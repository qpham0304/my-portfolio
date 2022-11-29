import React from 'react'

function About() {
  return (
    <div className="page-container about">
      <div style={{minWidth: "300px", height: "400px", border: "1px solid #e2d4b4", marginRight: "2rem"}}>
        a picture
      </div>
      <div style={{maxWidth: "80ch"}}>
        <h4 style={{letterSpacing: '3px'}}>About Me</h4>
        <p style={{lineHeight: 1.8}}>
          My name is Quan Pham, I am a Junior developer who just graduated from
          Seattle University. I am dedicated to my work and passionate about learning
          new things. My work can vary from fullstack development to UI/UX design, I
          am looking forward to working with you.
        </p>
        <div className="info-box">
          <ul>
            <li> <span>name:</span> Quan Pham </li>
            <li> <span>Contact:</span> quan.m.pham0304@gmail.com </li>
            <li> <span>Experience:</span> Junior </li>
            <li> <span>Location:</span> Seattle, WA </li>
          </ul>
          <ul>
            <li> <span>name:</span> Quan Pham </li>
            <li> <span>Contact:</span> quan.m.pham0304@gmail.com </li>
            <li> <span>Experience:</span> Junior </li>
            <li> <span>Location:</span> Seattle, WA </li>
          </ul>
        </div>
        <button className="download-btn">DOWNLOAD RESUME</button>
      </div>
    </div>
  )
}

export default About