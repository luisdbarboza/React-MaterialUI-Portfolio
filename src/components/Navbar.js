import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import clx from "classnames";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "yellow"
    }
  },
  navBar: {
    backgroundColor: "rgba(33, 37, 41, 0)",
    boxShadow: "0px 0px 0px gray",
    padding: "1rem 0rem",
    transition: "background-color 0.5s",
  },
  navBarActive: {
    backgroundColor: "rgba(33, 37, 41, 0.8)",
    boxShadow: "0px 0px 0px gray",
    padding: "1rem 0rem",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [navBarVisible, setNavBarVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavBarVisible(true);
    } else {
      setNavBarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <AppBar
      className={clx({
        [classes.navBar]: !navBarVisible,
        [classes.navBarActive]: navBarVisible,
      })}
    >
      <Grid container>
        <Grid item xs={false} md={7} lg={8}></Grid>
        <Grid item container xs={12} md={5} lg={4} spacing={2}>
          <Grid item container justify="center" xs={6}>
            <a href="#proyectos" className={classes.link}>
              PROYECTOS
            </a>
          </Grid>
          <Grid item container justify="center" xs={6} className={classes.link}>
            <a href="#about" className={classes.link}>
              SOBRE MÍ
            </a>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
