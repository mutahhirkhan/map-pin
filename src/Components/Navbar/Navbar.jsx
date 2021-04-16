import React, { Fragment } from "react";
import "./Navbar.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "./../../Redux/auth/authActions";

const MenuITem = ({ children, to = "#", ...restProps }) => (
  <Fragment>
    <Typography
      {...restProps}
      style={{
        display: "flex",
        justifySelf: "flex-start",
        width: "max-content",
      }}
      variant="h5"
    >
      <Link to={to}>{children}</Link>
    </Typography>
  </Fragment>
);

const Navbar = ({ auth, signout }) => {
  return (
    <div className="navbar">
      <MenuITem to="/">App</MenuITem>
      {auth ? (
        <MenuITem onClick={signout}>Signout</MenuITem>
      ) : (
        <MenuITem to="/authentication">Login</MenuITem>
      )}
      <MenuITem to="/">Map</MenuITem>
    </div>
  );
};

var actions = {
  signout,
};

var mapState = (state) => ({
  auth: state.auth,
});

export default connect(mapState, actions)(Navbar);
