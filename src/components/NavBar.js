import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import '../App.css'

function NavBar() {
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const navigate = useNavigate();
  const location = useLocation();
  const[selectedPage, setSelectedPage] = useState(location.pathname.slice(1))
  const [isToggleOn, setIsToggleOn] = useState(false)
  
  const handleSelectPage = (page) => {
    navigate(`/${page}`)
    setSelectedPage(page);
    console.log(location.pathname.slice(1))
  }

  return (
    <nav>
      <ul className={isToggleOn ? "nav-li expanded" : "nav-li"}>
        {page.map(page => {
          return (
            <li key={page} onClick={() => handleSelectPage(page)}>
              <a className={selectedPage === page ? "nav-item active" : "nav-item"} href="#0">{page}</a>
            </li>
          )
        })}
      </ul>
      <div className={isToggleOn ? "nav-toggle-btn active" : "nav-toggle-btn"} id="toggleBtn" onClick={() => setIsToggleOn(!isToggleOn)}>
        <span />
      </div>
    </nav>
  )
}

export default NavBar