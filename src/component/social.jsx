import React, { Component } from "react";
class SOcial extends Component {
  state = {};
  render() {
    return (
      <>
        <i
          style={{ color: "#007bff", padding: "5px" }}
          class="fab fa-2x fa-facebook-square"
        />
        <i
          style={{ color: "#007bff", padding: "5px" }}
          class="fab fa-2x  fa-linkedin-in"
        />
        <i
          style={{ color: "#007bff", padding: "5px" }}
          class="fab fa-2x  fa-twitter"
        />
        <i
          style={{ color: "#dc3545", padding: "5px" }}
          class="fab fa-2x  fa-instagram"
        />
      </>
    );
  }
}

export default SOcial;
