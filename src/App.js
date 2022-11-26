import './App.css';
import { useState } from 'react';
import { Routes, Route, Navigate, useMatch } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About'
import Experience from './components/Experience'
import Hobby from './components/Hobby'
import Home from './components/Home'
import Projects from './components/Projects'

function App() {
  const [displayNav, setDisplayNav] = useState(true)
  return (
    <div className="wrapper">
      <div className="App-background">
        {displayNav ? <NavBar /> : null}
        <div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hobby" element={<Hobby />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        <footer className="copyright">&copy; Quan Pham</footer>
      </div>
    </div>
    
  );
}

export default App;
