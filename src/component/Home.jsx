import React, { Component } from "react";
import Persanal from "./Personalinfo";
import Layout from "./layout";
import Homeimage from "./homeimage";
import HomeContent from "./homecontents";

class Home extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <Homeimage />
        <HomeContent />
        <Persanal />
      </Layout>
    );
  }
}

export default Home;
