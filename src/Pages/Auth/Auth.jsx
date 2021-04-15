import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import wallpaper from "src/Assets/authImg.jpg";
import AuthForm from "src/Components/AuthForm/AuthForm";

const useStyle = makeStyles((theme) => ({
  root: {
    height: `calc(100vh - var(--navbar-height))`,
    width:"100vw",
  },
  container1:{
    boxShadow:"2px 2px 10px 2px rgba(0,0,0,0.4)",
    borderRadius:"10px",
    padding:"2em",
  },
  authImg:{
    height:"70vh",
    background:`url(${wallpaper}) no-repeat center / contain` , 

  },
}));

const Auth = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} center`}>
        <Grid container  className={`center ${classes.container1}`}  xs={12} >
            <Grid className="center" item container  xs={12}  spacing={3}>
                <Grid className={classes.authImg} item sm={4} md={3}></Grid>
                <Grid item sm={4} md={3}>
                    <AuthForm/>
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
};

export default Auth;
