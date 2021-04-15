import { makeStyles } from "@material-ui/core";
import React from "react";
import wallpaper from "src/Assets/wallpaper.jpg";

const useStyle = makeStyles((theme) => ({
  root: {},
  wallpaper: {
    height: `calc(100vh - var(--navbar-height))`,
  },
}));

const Auth = () => {
  const classes = useStyle();
  return (
    <div
      className={classes.wallpaper}
      style={{
        background: `url(${wallpaper}) no-repeat center / cover`,
      }}
    >
      <h1>Auth</h1>
    </div>
  );
};

export default Auth;
