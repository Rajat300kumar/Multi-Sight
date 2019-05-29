import React, { Component } from "react";
import "../logo.svg";
class NavRight extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar">
          <img
            src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/logo.svg"
            alt=""
          />
        </nav>
      </React.Fragment>
    );
  }
}

export default NavRight;
