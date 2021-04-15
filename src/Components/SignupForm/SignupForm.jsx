import React, {useState} from "react";
import { TextField } from '@material-ui/core';

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var handleSubmit = (e) => {
    e.preventDefault()
    var signinData = {
      email,
      password,
    };
    console.log(signinData);
  };

  return (
    <div>
      <h1>SIGN up</h1>
      <form onSubmit={handleSubmit}>
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
          type="password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></TextField>
        <Button type="submit" children="Sign up"></Button>

      </form>
    </div>
  );
};

export default SignupForm;
