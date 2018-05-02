import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import LoginForm from "./components/loginform/LoginForm";
import SuccessMessage from "./components/successmessage/SuccessMessage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route path="/success" component={SuccessMessage} />
          <Route path="/" component={LoginForm} />
        </Switch>
      </div>
    );
  }
}

export default App;