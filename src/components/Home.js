import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Qsvg } from '../assets/icons/custom-name-svg/Q.svg'
import { ReactComponent as Usvg } from '../assets/icons/custom-name-svg/u.svg'
import { ReactComponent as Ansvg } from '../assets/icons/custom-name-svg/an.svg'
import { ReactComponent as Psvg } from '../assets/icons/custom-name-svg/P.svg'
import { ReactComponent as Hsvg } from '../assets/icons/custom-name-svg/h.svg'
import { ReactComponent as Underlinesvg } from '../assets/icons/custom-name-svg/underline.svg'
import { ReactComponent as Amsvg } from '../assets/icons/custom-name-svg/am.svg'



function Home() {
  const info = require("../db/basic-info.json")
  const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useState("Home")
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const profileImg = require("../assets/images/profile-image.jpg")
  
  const handleSelectPage = (page) => {
    if(page !== selectedPage){
      navigate(`/${page}`)
      setSelectedPage(page);
    }
  }

  return (
    <div className="page-container home">
      <img src={profileImg} style={{borderRadius: 360, width: "200px", height: "200px", objectFit:"cover", margin: "1rem"}}/>
      <div className="hand-written-name">
        <div>
          <Qsvg id="Q" strokeDasharray={193}  strokeDashoffset={193}/>
          <Usvg id="u" strokeDasharray={39}  strokeDashoffset={39} />
          <Ansvg id="an" strokeDasharray={92}  strokeDashoffset={92} />
          <Psvg id="P"  strokeDasharray={204}  strokeDashoffset={204} />
          <Hsvg id="h" strokeDasharray={95}  strokeDashoffset={95} />
          <Amsvg id="am" strokeDasharray={117}  strokeDashoffset={117} />
        </div>
        <Underlinesvg id="underline" strokeDasharray={269} strokeDashoffset={269}/>
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