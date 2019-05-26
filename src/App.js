import React, { Component } from "react";
import NavBar from "./component/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import not from "./component/not";
//import Signup from "./component/Signup";

//import logo from "./logo.svg";
import "./App.css";
import Footer from "./component/footer";
import Contact from "./component/Contact";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEnvelope,
  faKey,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import LoginFrom from "./component/Login";
//import LoginFrom from "./component/Login";
import Signup from "./component/Signup";

library.add(faEnvelope, faKey, faMapMarkedAlt);

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={LoginFrom} />
          <Route path="/signup" component={Signup} />
          <Route path="/not" component="null" />
        </Switch>
      </>
    );
  }
}

export default App;
