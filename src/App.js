import React from 'react';
import Header from './Header.js';
import Profile from './Profile.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import './tailwind.generated.css';
import './main.css'

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
