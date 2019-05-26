import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { FontAwesomeIcon } from "font-awesome";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Span = styled.span`
  color: #868e96 !important;
  margin: 10px;
`;

class ContectSecond extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginTop: 50,
          marginBottom: 50,
          textAlign: "center"
        }}
      >
        <div styled={{ margin: 10, padding: 12 }}>
          <FontAwesomeIcon icon="map-marked-alt" />
          <h3>Addres</h3>
          <Span>
            h33/25 New Avenue New Heaven, 45Y 73J England, Great Britain
          </Span>
        </div>
        <div styled={{ margin: 10, padding: 12 }}>
          <FontAwesomeIcon icon="map-marked-alt" />
          <h3> Call Center</h3>
          <Span>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <span> +33 555 444 333</span>
          </Span>
        </div>
        <div styled={{ margin: 10, padding: 12 }}>
          <FontAwesomeIcon icon="map-marked-alt" />
          <h3> Electronic Support</h3>
          <Span>
            Please feel free to write an email to us or to use our electronic
            ticketing system. info@sell.com support@sell.com
          </Span>{" "}
        </div>
      </div>
    );
  }
}

export default ContectSecond;
