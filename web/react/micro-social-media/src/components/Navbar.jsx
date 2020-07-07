import React, { Component } from "react";

import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav className="main">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Internet-icon.svg/470px-Internet-icon.svg.png"
            alt="internet icon"
          />
          <span>SOCIAL</span>
        </div>
        <button className="icon-menu" onClick={this.props.navButtonHandler}>
          <span />
          <span />
          <span />
        </button>
      </nav>
    );
  }
}

export default Navbar;
