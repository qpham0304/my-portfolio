import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const info = require("../db/basic-info.json")
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Home")
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const profileImg = require("../assets/images/profile-image-1.jpg")
  const profileName = require("../assets/images/profile-name.png")
  
  const handleSelectPage = (page) => {
    if(page !== selectedPage){
      navigate(`/${page}`)
      setSelectedPage(page);
    }
  }

  return (
    <div className="page-container home">
      <img src={profileImg} style={{borderRadius: 360, width: "200px", height: "200px", objectFit:"cover", margin: "1rem"}}/>
      <img src={profileName} style={{width: "250px"}}/>
      <br />
      <div style={{width: "30ch"}}>
        <p>Hi there, welcome to my site!</p>
        <p>Here, you will find everything about to me. Let's know each other better</p>
      </div>
      <p style={{fontSize: "2rem", fontWeight: "100"}}>[status: open to work]</p>
      <ul className={"navigate-btn-li"}>
        {page.map(page => {
          return (
            <li className="navigate-btn" key={page} onClick={() => handleSelectPage(page)}>
              {page}
            </li>
          )
        })}
      </ul>
      <ul className="icon-link">
        <a href={`mailto:${info.email}`}> <span style={{margin: "0px"}} className="icon icon-email"/> </a>
        <a href={info.github}> <span style={{margin: "0"}}  className="icon icon-github"/> </a>
        <a href={info.linkedin}> <span  style={{margin: "0"}} className="icon icon-linkedin"/> </a>
        <a href={info.discord}> <span style={{margin: "0"}}  className="icon icon-discord"/> </a>
      </ul>
    </div>
  )
}

export default Home