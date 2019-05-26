import React, { Component } from "react";
import styled from "styled-components";
//import { styled } from "styled-components";
const LIST = styled.li`
  list-style-type: none;
  width: 100%;
`;

class FooterContect extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundColor: "#868e96",
            display: "flex",
            textDecoration: "none"
          }}
          className="hi"
        >
          <div style={{ margin: 10, padding: 5 }}>
            <p>Directory</p>
            <br />
            <span style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipisicing.
            </span>
            <div className="col-lg-4 mb-5 mb-lg-0" />
          </div>
          <div style={{ margin: 10, padding: 15 }}>
            <p>RENTALS</p>
            <br />
            <LIST style={{ textDecoration: "none" }}>
              <a style={{ color: "white" }} href="#">
                Room
              </a>
            </LIST>
            <LIST>
              <a style={{ color: "white" }} href="#">
                Map on top
              </a>
            </LIST>
            <LIST>
              <a style={{ color: "white" }} href="#">
                Side
              </a>
            </LIST>
            <LIST>
              <a style={{ color: "white" }} href="#" />
            </LIST>
          </div>

          <div style={{ margin: 10, padding: 15 }}>
            <p>Page</p>
            <br />
            <LIST style={{ textDecoration: "none" }}>
              <a style={{ color: "white" }} href="#">
                Room
              </a>
            </LIST>
            <LIST>
              <a style={{ color: "white" }} href="#">
                Map on top
              </a>
            </LIST>
            <LIST>
              <a style={{ color: "white" }} href="#">
                Side
              </a>
            </LIST>
            <LIST>
              <a href="#" />
            </LIST>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterContect;
