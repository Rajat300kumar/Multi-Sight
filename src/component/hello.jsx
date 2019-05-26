import React, { Component } from "react";
import styled from "styled-components";
import Home from "./Home";

const Image = styled.img`
  width: 100%;
  height: 435px;
`;
const CENTER = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 50px;
`;

class Hello extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <Image
            src="https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/photo-1522143049013-2519756a52d4.jpg"
            alt=""
          />

          <CENTER>How can we help you today?</CENTER>
        </div>
      </React.Fragment>
    );
  }
}

export default Hello;
