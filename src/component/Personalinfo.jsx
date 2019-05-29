import React, { Component } from "react";
import { styled } from "styled-components";
import SOcial from "./social";

class Persanal extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          style={{
            height: "232px",
            textAlign: "left",

            backgroundColor: "black"
          }}
        >
          <div
            style={{
              float: "left",
              padding: "10px",
              boxshadow: " 0 2px 8px rgba(0,0,0,0.2)",
              width: "40%"
            }}
          >
            <span style={{ fontFamily: "sans-serif", color: "#007bff" }}>
              About me
            </span>
            <hr />
            <span style={{ fontFamily: "sans-serif", color: "#6c757d" }}>
              {" "}
              Hi i am front end developer
              <br />I worked in reactjs and hugo fremwork
              <br />i make static site with the help of react
            </span>
          </div>
          <div style={{ float: "left", padding: "10px", width: "20%" }}>
            <img
              style={{ height: "200px" }}
              src="https://avatars1.githubusercontent.com/u/49471947?s=400&u=bd2682639925b34850829425407fbd801c46bb5d&v=4"
              alt=""
            />
          </div>
          <div
            style={{
              float: "left",
              padding: "10px",
              width: "30%",
              color: "#6c757d"
            }}
          >
            <span
              style={{
                fontFamily: "sans-serif",
                color: "#007bff"
              }}
            >
              Persanal info
            </span>
            <hr />
            Name: Rajat Ranjan Kumar
            <br />
            Phone: 8757748541
            <br />
            Email: rajatranjan300@gmail.com
            <br />
            Address: B.T.M 1st stage ,bangalore
            <br />
            <SOcial />
          </div>
        </div>
      </>
    );
  }
}

export default Persanal;
