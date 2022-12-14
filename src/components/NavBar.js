import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function NavBar() {
  const page = ["Home", "About", "Hobby", "Experience", "Projects"]
  const navigate = useNavigate();
  const location = useLocation();
  const [isToggleOn, setIsToggleOn] = useState(false)
  const[selectedPage, setSelectedPage] = useState(() =>{
    if(location.pathname.length === 1){
      return "Home"
    }
    else{
      return location.pathname.slice(1)
    }
  })

  useEffect(() => {
    if(location.pathname.slice(1).length > 1)
      handleSelectPage(location.pathname.slice(1))
  }, [location])

  const handleSelectPage = (page) => {
    if(page !== selectedPage){
      navigate(`/${page}`)
      setSelectedPage(page);
    }
  }

  return (
    <nav>
      <ul className={isToggleOn ? "nav-li expanded" : "nav-li"}>
        {page.map(page => {
          return (
            <li key={page} onClick={() => handleSelectPage(page)}>
              <a className={selectedPage.toLowerCase() === page.toLowerCase() ? "nav-item active" : "nav-item"}>{page}</a>
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