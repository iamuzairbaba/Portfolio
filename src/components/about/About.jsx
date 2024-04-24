import React from "react";
import "./About.css";

const mySkills = [
  "HTML",
  "CSS",
  "Responsive Design",
  "JavaScript",
  "ReactJS",
  "NodeJS",
  "Python",
  "RestFUL API",
  "GraphQL",
  "GIT",
  "BootStrap",
  "MaterialUI",
];

function About() {
  return (
    <div id="about" className="about-section">
      <div className="main-container">
        <div>
          <h2 className="primary-heading">ABOUT ME</h2>

          <p className="secondary-heading">
            <span className="underline"></span>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-description">
          <div className="know-me">
            <h3 className="know-me-heading">Get to know me!</h3>
            <p className="know-me-para">
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites and Web Applications that leads to the
              success of the overall product. Check out some of my work in the
              Projects section.
            </p>
            <p className="know-me-para">
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin and Instagram where I post useful content related to
              Web Development and Programming
            </p>
            <p className="know-me-para know-me-para-end">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <a className="contact-btn" href='#contact'>CONTACT</a>
          </div>
          <div className="my-skills">
            <h3 className="know-me-heading">My Skills</h3>
            <div className="skills">
              {mySkills.map((skill) => {
                return <div className="skill">{skill}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
