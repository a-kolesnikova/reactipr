import React from "react";
import RaisedButton from "material-ui/RaisedButton";
import RefreshIndicator from "material-ui/RefreshIndicator";

const SubmitButton = props => {
  const { login, password, loginState } = { ...props.state };

  let isDisabled = !login || password.length < 3 || loginState === "Wait";

  const style = {
    container: {
      position: "relative"
    },
    refresh: {
      display: "inline-block",
      position: "relative"
    }
  };

  let btnComponent =
    loginState === "Wait" ? (
      <RefreshIndicator
        size={40}
        left={10}
        top={0}
        status="loading"
        style={style.refresh}
      />
    ) : (
      <RaisedButton
        type="submit"
        label="Login"
        className="button-submit"
        primary={true}
        disabled={isDisabled}
      />
    );

  return btnComponent;
};

export default SubmitButton;