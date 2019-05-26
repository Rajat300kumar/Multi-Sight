import React, { Component } from "react";

import Layout from "./layout";

class Home extends Component {
  state = {};
  render() {
    return (
      <Layout>
        <div style={{ textAlign: "center" }}>
          <h1>Hello This is</h1>
          <h1>a Blank Home Page</h1>
          <h1>And i Make it Latter</h1>
        </div>
      </Layout>
    );
  }
}

export default Home;
