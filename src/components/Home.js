import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../App.css"

function Home() {
  const gmail = "#"
  const github = "https://github.com/qpham0304"
  const linkedin = "https://www.linkedin.com/in/quan-m-pham/"
  const discord = "#"
  const [selectedPage, setSelectedPage] = useState("Home")
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const navigate = useNavigate();
  const profileImg = require("../assets/images/profile-image.png")
  const profileName = require("../assets/images/profile-name.png")
  const handleSelectPage = (page) => {
    navigate(`/${page}`)
    setSelectedPage(page);
  }

  return (
    <div className="page-container home">
      <div className="profile-container">
        <img src={profileImg} style={{width: "35%"}}/>
        <img src={profileName} style={{width: "250px"}}/>
      </div>
      <br />
      <div style={{width: "30ch"}}>
        <p>Hi there, welcome to my site!</p>
        <p>Here, you will find everything about to me. Let's know each other better</p>
      </div>
      <p style={{fontSize: "2rem", fontWeight: "100"}}>[status: open to work]</p>
      <ul className={"navigate-btn-li"}>
        {page.map(page => {
          return (
            <li className="navigate-btn" key={page} onClick={() => handleSelectPage(page)}> {page} </li>
          )
        })}
      </ul>
      <ul className="icon-link">
        <a href={gmail}> <span style={{margin: "0px"}} className="icon icon-email"/> </a>
        <a href={github}> <span style={{margin: "0px"}} className="icon icon-github"/> </a>
        <a href={linkedin}> <span style={{margin: "0px"}} className="icon icon-linkedin"/> </a>
        <a href={discord}> <span style={{margin: "0px"}} className="icon icon-discord"/> </a>
      </ul>
    </div>
  )

}

export default Home