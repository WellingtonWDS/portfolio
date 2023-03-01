import { Component } from "react";
import "./Main.css";
// import profilePic from "./assets/profile-pic.png";
import Tilt from "react-vanilla-tilt";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="greetings">
          <p>Hello, I'm</p>
          <div class="glitch-wrapper">
            <div class="glitch" data-glitch="Wellington Duarte">
              Wellington Duarte
            </div>
          </div>
          <p>Frontend Web Developer</p>
        </div>
        <div className="figure">
          <Tilt id="box" options={{ scale: 1, max: 25, glare: true }}>
            <div className="box">
              <div className="elements imgBox"></div>
            </div>
          </Tilt>

          {/* <img src={profilePic} alt="" className="profile-pic" /> */}
        </div>
      </section>
    );
  }
}

export default Main;
