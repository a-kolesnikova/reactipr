import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Api, Logger } from "../../middleware";
import SubmitButton from "./SubmitButton";

import TextField from "material-ui/TextField";
import { redA700, grey300 } from "material-ui/styles/colors";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.url = "http://falling-water-3115.getsandbox.com/login";
    this.state = {
      login: "",
      password: "",
      loginState: ""
    };
  }

  onChangeValue = e => {
    const el = e.target;
    this.setState({
      [el.name]: el.value.trim(),
      loginState: ""
    });
  };

  handleSubmitEvent = e => {
    e.preventDefault();

    this.setState({ loginState: "Wait" });

    const item = {
      Username: this.state.login,
      Password: this.state.password
    };

    Api.requestLogin(this.url, item, data => {
      Logger.toConsole({ req: { Username: item.Username }, res: data });
      this.setState({
        loginState: data.Auth || "Denied",
        login: "",
        password: ""
      });
    });
  };

  get isSuccessful() {
    return this.state.loginState === "Allow";
  }

  render() {
    const { login, password, loginState } = { ...this.state };

    const styles = {
      errorStyle: {
        borderColor: redA700
      },
      underlineStyle: {
        borderColor: grey300
      }
    };

    let fieldStyles =
      loginState === "Denied" ? styles.errorStyle : styles.underlineStyle;

    const Form = (
      <form onSubmit={this.handleSubmitEvent} onChange={this.onChangeValue}>
        <TextField
          hintText="Login"
          underlineStyle={fieldStyles}
          defaultValue={login}
          name="login"
        />
        <br />
        <br />
        <TextField
          hintText="Password"
          underlineStyle={fieldStyles}
          defaultValue={login}
          name="password"
          type="password"
          value={password}
        />
        <br />
        <br />
        <br />
        <SubmitButton state={this.state} />
      </form>
    );

    if (!this.isSuccessful) {
      return Form;
    } else {
      return <Redirect to="/success" />;
    }
  }
}