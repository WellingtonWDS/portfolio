import { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <section className="about">
        {/* ABOUT ME */}
        <h2 className="about-title">About Me</h2>
        <div className="about-presentation">
          <p className="about-text">
            I'm a FrontEnd Developer who is trying to solve problems with
            beautiful, intuitive and responsive web pages.
          </p>
          <div className="about-img pages"></div>
        </div>

        <div className="about-presentation">
          <div className="about-img games"></div>
          <p className="about-text">
            My main goal is to be a specialized web developer. And, as a hobby,
            work with game development!
          </p>
        </div>

        {/* SKILLS */}
        <h2 className="about-title">Skills</h2>
        <p>HTML</p>
        <div className="progress-bar">
          <div className="progress-bar-25"></div>
        </div>
      </section>
    );
  }
}

export default About;
