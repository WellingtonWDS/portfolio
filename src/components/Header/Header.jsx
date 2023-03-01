import { Component } from "react";
import logo from "../../components/Header/assets/logo.png";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src={logo} alt="Logo da página" className="main-logo" />
        <div className="header-nav">
          <p className="header-nav-item">Home</p>
          <p className="header-nav-item">About</p>
          <p className="header-nav-item">Projects</p>
          <p className="header-nav-item">Contact</p>
        </div>
      </header>
    );
  }
}

export default Header;
