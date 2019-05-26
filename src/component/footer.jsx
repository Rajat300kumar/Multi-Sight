import React, { Component } from "react";
import styled from "styled-components";

const Footer1 = styled.footer`
  background-color: #3f3f3f;
  height: 80px;

  margin-bottom: 0px;
`;

class Footer extends Component {
  state = {};
  render() {
    return (
      <Footer1 className="footer justify-content-bottom py-3 bd-dark">
        <span style={{ color: "white" }}>
          © 2019 Your company. All rights reserved.
        </span>
      </Footer1>
    );
  }
}

export default Footer;
