import React, { Component } from "react";
import styled from "styled-components";

const MapContainer = styled.iframe`
  width: 100%;
  height: 300px;
  margin-top: 20px;
`;

class Map extends Component {
  state = {};
  render() {
    return (
      <MapContainer src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7777.95608043039!2d77.63915487878324!3d12.909132881239392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149a163c761f%3A0x383a13f2dabe4eca!2sNarayana+Multispeciality+Hospital%2C+HSR+Layout!5e0!3m2!1sen!2sin!4v1556181617683!5m2!1sen!2sin" />
    );
  }
}

export default Map;
