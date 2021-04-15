import React, { Fragment } from "react";
import "./Navbar.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const MenuITem = ({ children, to = "#", ...restProps }) => (
  <Fragment>
      <Typography
        style={{
          display: "flex",
          justifySelf: "flex-start",
          width: "max-content",
        }}
        variant="h5"
      >
        <Link to={to}>
          {children}
        </Link>
      </Typography>
  </Fragment>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <MenuITem to="/">App</MenuITem>
      <MenuITem to="/authentication">Login</MenuITem>
      <MenuITem to="/">Map</MenuITem>
    </div>
  );
};

export default Navbar;
