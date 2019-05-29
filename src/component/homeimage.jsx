import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 512px;
`;
const CENTER = styled.div`
  position: absolute;
  top: 30%;
  left: 40%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 50px;
`;

class Homeimage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Image
            src="https://media.istockphoto.com/photos/typing-on-laptop-closeup-man-working-on-computer-picture-id639637280"
            alt=""
          />

          <CENTER className="tc-l pv4 pv6-l ph3 ph4-ns">
            <h2 style={{ color: "#202" }}>
              This is static web multi page site<br />
              Hi, I am <span style={{ color: "#007bff" }}>Rajat Ranjan</span>
            </h2>
          </CENTER>
        </div>
      </React.Fragment>
    );
  }
}

export default Homeimage;
