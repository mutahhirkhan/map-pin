import React, { Fragment, useState } from "react";
import { Button, TextField} from "@material-ui/core";
import { connect } from 'react-redux';
import {signin} from "src/Redux/auth/authActions"

const SigninFom = ({signin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var handleSubmit = (e) => {
    e.preventDefault();
    var signupData = {
      email,
      password,
    };
    console.log(signupData);
    // signin()
  };
  return (
    <form style={{ display: "grid", gap: "1em" }} onSubmit={handleSubmit}>
      <TextField
        value={email}   
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        // type="password"
        value={password}
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <Button
        style={{ backgroundColor: "none", width: "100%" }}
        variant="contained"
        type="submit"
        children="Sign in"
      ></Button>
    </form>
  );
};

var actions = {
    signin
}

export default connect(null, actions)(SigninFom);
