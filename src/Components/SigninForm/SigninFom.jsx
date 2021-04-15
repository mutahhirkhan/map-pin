import React, { Fragment, useState } from "react";
import { Button, TextField } from "@material-ui/core";

const SigninFom = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  var handleSubmit = (e) => {
    e.preventDefault();
    var signupData = {
      email,
      password,
    };
    console.log(signupData);
  };
  return (
      <Fragment>
        SignIn Form
      <div className="center">
      <form onSubmit={handleSubmit}>
        <TextField
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        <TextField
          type="password"
          value={password}
          label="password"
          onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        <Button style={{backgroundColor:"none"}} variant="contained" type="submit" children="Sign in"></Button>
      </form>
    </div>
          </Fragment>
  );
};

export default SigninFom;
