import React, { Component } from "react";
import styled from "styled-components";

const STYLED = styled.input`
  border-radius: 12px;
  height: 40px;
  font-size: 10pt;
  background-color: #e9ecef;
  padding: 0.575rem 1.12rem;
  opacity: 0.8;
  border: 1px solid #f8f9fa;
  margin-right: 15px;
`;
const TEXT = styled.textarea`
  border-radius: 12px;

  font-size: 10pt;
  background-color: #e9ecef;
  padding: 0.575rem 1.12rem;
  opacity: 0.8;
  border: 1px solid #f8f9fa;
`;

class ContectThird extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2 style={{ padding: 20 }}>Contacts</h2>
        <div
          className="row"
          style={{
            display: "flex",
            margin: "auto" /*marginTop: 20, boxSizing: "border-box" */
          }}
        >
          <div
            className="col-md-5 mb-5 mb-md-0 m-2"
            style={{ boxSizing: "border-box" }}
          >
            <div style={{ marginLeft: 10, marginBottom: 20, display: "flex" }}>
              <div>
                First Name:
                <br />
                <STYLED type="text" name="firstname" size="20" />
              </div>
              <div>
                Last name:
                <br />
                <STYLED type="text" name="firstname" size="20" />
                <br />
              </div>
            </div>
            Email Address:
            <br />
            <STYLED type="text" name="firstname" size="50" />
            <br />
            <p>Message</p>
            <TEXT rows="9" cols="55">
              Message
            </TEXT>
            <br />
            <button style={{ borderRadius: 12 }}>Send Message</button>
          </div>
          <div className="col-md-5" /*style={{ direction: "left" }}*/>
            <p style={{ color: "#868e96 " }}>
              Effects present letters inquiry no an removed or friends. Desire
              behind latter me though in. Supposing shameless am he engrossed up
              additions. My possible peculiar together to. Desire so better am
              cannot he up before points. Remember mistaken opinions it pleasure
              of debating. Court front maids forty if aware their at.
              <p>
                >Chicken use are pressed removed. Able an hope of body. Any nay
                shyness article matters own removal nothing his forming. Gay own
                additions education satisfied the perpetual. If he cause manor
                happy. Without farther she exposed saw man led. Along on happy
                could cease green oh.
              </p>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContectThird;
