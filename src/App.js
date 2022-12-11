import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About'
import Experience from './components/Experience'
import Hobby from './components/Hobby'
import Home from './components/Home'
import Projects from './components/Projects'
import EmptyRoute from './components/EmptyRoute';


const Content = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransitionStage] = useState("fadeIn")

  useEffect(() => {
    if(location != displayLocation)
    setTransitionStage("fadeOut")
  }, [location, displayLocation])
  
  return (
    <div 
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if(transitionStage === "fadeOut"){
          setTransitionStage("fadeIn")
          setDisplayLocation(location)
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<EmptyRoute />} />
        {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
      </Routes>
    </div>
  )
}

function App() {
  const [displayNav, setDisplayNav] = useState(true)
  const [screenSize, getDimension] = useState({ dynamicWidth: window.innerWidth, dynamicHeight: window.innerHeight });

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  });

  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="App-background">
          {displayNav ? <NavBar /> : null}
          <Content />
          <footer className="copyright">Copyright &copy; Quan Pham</footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
