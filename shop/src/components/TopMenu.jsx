import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/products" className={classes.link}>
            Products
          </Link>
          <Link to="/products/new" className={classes.link}>
            New Product
          </Link>
          <Link to="/contact-us" className={classes.link}>
            Contact Us
          </Link>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
