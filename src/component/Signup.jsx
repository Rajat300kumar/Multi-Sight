import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./layout";

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
  border-radius: 5;
`;

class Signup extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <BACK>
          <FORM>
            <h1 style={{ textAlign: "center" }}>Sign-up</h1>
            <form>
              <div className="form-group">
                <label style={{ fontSize: 25, margin: 10 }} htmlFor="username">
                  User Name
                </label>
                <input
                  style={{ width: 450, margin: 15 }}
                  id="username"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label style={{ fontSize: 25, margin: 10 }} htmlFor="email">
                  Email
                </label>
                <input
                  style={{ width: 450, margin: 15 }}
                  id="email"
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label style={{ fontSize: 25, margin: 10 }} htmlFor="pasward">
                  Passward
                </label>
                <input
                  style={{ width: 450, margin: 15 }}
                  id="pasward"
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

export default Signup;
