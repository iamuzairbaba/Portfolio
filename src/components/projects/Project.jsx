import React from "react";
import "./Project.css";

function Project() {
  return (
    <div id="#projects" className="projects-section">
      <div className="main-container">
        <div>
          <h2 className="primary-heading">Projects</h2>
          <p className="secondary-heading">
            <span className="underlineproject"></span>
            Here you will find some of the personal projects that I created
          </p>
        </div>
        <div className="project">
          <img src="" alt="Project 1" className="project-image" />
          <div className="project-description">
            <p className="project-heading">Deen School</p>
            <p className="project-about">
              Created a Website for local non-profit NGO using the frontend
              tools I know
            </p>
            <a href="link-to-project" className="project-link-button">
              Go To Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
