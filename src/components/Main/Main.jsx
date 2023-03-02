import { Component } from "react";
import "./Main.css";
import brFlag from "./assets/brazilian-flag.jpg";
import usaFlag from "./assets/usa-flag.jpg";
import linkedinLogo from "./assets/linkedin-logo.png";
import githubLogo from "./assets/github-logo.png";
import downloadLogo from "./assets/download-logo.png";

import Tilt from "react-parallax-tilt";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="greetings">
          <p className="greetings-phrase">Hello, I'm</p>
          <div class="glitch-wrapper">
            <div class="glitch" data-glitch="Wellington Duarte">
              Wellington Duarte
            </div>
          </div>
          <p className="greetings-ocupation">Web Developer</p>
        </div>
        <div className="figure">
          <Tilt
            className="box"
            style={{
              height: "400px",
              width: "400px",
              borderRadius: "10px",
            }}
            tiltAngleYInitial="30"
            perspective={500}
          >
            <div className="profile-pic"></div>
            <div className="squares left-square">
              <img src={brFlag} alt="Brazilian flag" className="flags" />
              <p>Portuguese Fluency</p>
              <p>Native</p>
            </div>
            <div className="squares right-square">
              <img src={usaFlag} alt="Brazilian flag" className="flags" />

              <p>English Fluency</p>
              <p>C2 - Proficient</p>
              <a
                href="https://www.efset.org/cert/pNjhUa"
                target={"_blank"}
                rel="noreferrer"
              >
                Certificate Link
              </a>
            </div>
            <div className="squares  card-infos">
              <p>Brazilian</p>
              <p>Born in Campinas - SP</p>
              <p>Living in Araçuaí - MG</p>
            </div>

            {/* Contact */}
            <div className="contact-squares">
              <a
                href="https://www.linkedin.com/in/wellington-duarte-santos-934ba61aa/"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="squares linkedin">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn Logo"
                    className="contact-logo"
                  />
                  <p>LinkedIn</p>
                </div>
              </a>

              <a
                href="https://github.com/WellingtonWDS"
                target={"_blank"}
                rel="noreferrer"
              >
                <div className="squares github">
                  <img
                    src={githubLogo}
                    alt="Github Logo"
                    className="contact-logo"
                  />
                  <p>Github</p>
                </div>
              </a>
              <div className="squares cv">
                <img
                  src={downloadLogo}
                  alt="Download Logo"
                  className="contact-logo"
                />
                <p>Download CV</p>
              </div>
            </div>
          </Tilt>

          {/* <img src={profilePic} alt="" className="profile-pic" /> */}
        </div>
      </section>
    );
  }
}

export default Main;
