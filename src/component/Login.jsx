import React, { Component } from "react";
import Layout from "./layout";

import styled from "styled-components";
const LABEL = styled.label`
  margin-left: 15px;
  padding-block-start: 10px;
`;

const BACK = styled.div`
  height: 501px;
  background-image: url(https://d19m59y37dris4.cloudfront.net/directory/1-1/img/photo/photo-1497436072909-60f360e1d4b1.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

const FORM = styled.div`
  width: 40%;
  margin: 0px;
  height: 501px;
  font-family: babel;
  background-color: #fff;
`;

class LoginFrom extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log();
  };
  render() {
    return (
      <Layout>
        <BACK>
          <FORM>
            <h1 style={{ textAlign: "center", fontFamily: "babel" }}>Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <LABEL style={{ fontSize: 25, margin: 10 }} htmlFor="username">
                  User Name
                </LABEL>

                <input id="username" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <LABEL style={{ fontSize: 25, margin: 10 }} htmlFor="pasward">
                  Passward
                </LABEL>
                <input id="Passward" type="text" className="form-control" />
              </div>
              <div className="form-group">
                <LABEL
                  style={{ fontSize: 25, margin: 10 }}
                  htmlFor="Conform pasward"
                >
                  Conform Passward
                </LABEL>
                <input
                  id="Conform Passward"
                  type="text"
                  className="form-control"
                />
              </div>

              <button style={{ margin: 15 }} className="btn btn-primary">
                Login
              </button>
            </form>
          </FORM>
        </BACK>
      </Layout>
    );
  }
}

export default LoginFrom;
