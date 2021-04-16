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
    width:"100%",
    height:"70vh",  
    background:`url(${wallpaper}) no-repeat center / contain` , 
    [theme.breakpoints.down('sm') ]: {
      display: 'none',
    },
  },
  authForm: {
    width:"60%",
    justifySelf:"center",
    [theme.breakpoints.up('md')]: {
      width:"100%",
    },
  }

}));

const Auth = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.root} center`}>
        <Grid container  className={`center`} xs={10} >
            <Grid className="center" item container  spacing={5 }>
                <Grid className={classes.authImg}  item sm={6} md={5}></Grid>
                <Grid className={`${classes.authForm}`} item  sm={6} md={5}><AuthForm/></Grid>
            </Grid>
        </Grid>
    </div>
  );
};

export default Auth;
