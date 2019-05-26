import React, { Component } from "react";
import styled from "styled-components";
import NavRight from "./navright";
import { Link } from "react-router-dom";

import NavDrop from "./navDrop";
//import NavDrop from "./navDrop1";

/*const Dropdown = styled.button`
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
*/

const LII = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Unorder = styled.ul`
  background-color: #e9ecef;
  height: 60px;
`;
class navBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="nav navbar bg-white  ">
          <NavRight />
          <Unorder className="nav justify-content-end navbar bg-white ">
            <NavDrop />
            <li>
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/Login">
                Login
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/Signup" tabindex="-1">
                Sign up
              </Link>
            </li>
            <li>
              <button
                style={{ marginRight: 15, justifyContent: "center" }}
                className="btn btn-primary"
              >
                {" "}
                ADD a List
              </button>
            </li>
          </Unorder>
        </div>
      </React.Fragment>
    );
  }
}

export default navBar;
