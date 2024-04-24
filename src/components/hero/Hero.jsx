import React from "react";
import "./Hero.css";
import backgroundImage from "../../assets/bg.svg";
import linkedInImg from "../../assets/linkedin-dark.svg";
import githubImg from "../../assets/github-dark.svg";
import twitterImg from "../../assets/twitter-dark.svg";

function Hero() {
  return (
    <div
      id="home"
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${backgroundImage})`,
      }}
    >
      <div className="hero-text">
        <p className="primary-text">HEY, I'M UZAIR BASHIR</p>
        <p className="secondary-text">
          A Result-Oriented Web Developer building and managing simple but
          beautiful Websites and Web Applications that leads to the success of
          the overall product
        </p>
        <a href="link_to_projects_page" className="projects-button" style={{ display: "inline-block", margin: "0 auto", marginTop: "40px" }}>
          PROJECTS
        </a>
      </div>
      <div className="hero-socials">
        <ul className="hero-socials-list">
          <li>
            <a href="link_to_linkedin_profile">
              <img src={linkedInImg} alt="linkedIn" />
            </a>
          </li>
          <li>
            <a href="link_to_twitter_profile">
              <img src={twitterImg} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="link_to_github_profile">
              <img src={githubImg} alt="Github" />
            </a>
          </li>
        </ul>
      </div>
      <div className="mouse"></div>
    </div>
  );
}

export default Hero;
