import React, {useState} from "react";
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { signup } from 'src/Redux/auth/authActions';

const SignupForm = ({signup}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault()
    var signupData = {
      name,
      email,
      password,
    };
    console.log(signupData);
    // signup(signupData)
  };

  return (
      <form style={{display: "grid", gap:"1em"}} onSubmit={handleSubmit}>
      <TextField
          type="text"
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
        ></TextField>
      <TextField
          type="email"
          value={email}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      <TextField
          // type="password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
      <Button style={{backgroundColor:"none"}} variant="contained" type="submit" children="Sign up"></Button>
      </form>
  );
};

var actions = {
  signup,
}

export default connect(null, actions)(SignupForm);
