import React from 'react';
import './Resume.css';  // Importing the CSS file
import Header from './header/Header';
import Summary from './summary/Summary';
import Education from './education/Education';
import TechnicalSkills from './skills/TechnicalSkills';
import Experience from './experience/Experience';

function Resume() {
  return (
    <div className="resume-container">
      <section className='header-container'>
        <header>
          <Header />
        </header>
      </section>

      <section className="summary">
        <Summary />
      </section>

      <section className="education">
        <Education />
      </section>

      <section className="skills">
        <TechnicalSkills />
      </section>

      <section className="experience">
        <Experience />
      </section>
    </div>
  );
}


export default Resume;

