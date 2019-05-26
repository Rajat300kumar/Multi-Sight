import React, { Component } from "react";
import ContectSecond from "./Contectsecond";
import footerContect from "./footerContect";
import Map from "./map";

import Hello from "./hello";

import ContectThird from "./Contectthird";
import FooterContect from "./footerContect";
import Layout from "./layout";
class Contects extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Hello />
        <ContectSecond />
        <ContectThird />
        <Map />
        <FooterContect />
      </Layout>
    );
  }
}

export default Contects;
