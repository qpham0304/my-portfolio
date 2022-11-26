import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const[selectedPage, setSelectedPage] = useState("Home")
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const navigate = useNavigate();

  const handleSelectPage = (page) => {
    navigate(`/${page}`)
    setSelectedPage(page);
  }

  return (
    <nav>
      <ul className="nav-li">
        {page.map(page => {
          return (
            <li key={page} onClick={() => handleSelectPage(page)}>
              <a className="nav-item" href="#0">{page}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar