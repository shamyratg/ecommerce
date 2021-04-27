import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import mcbook from "../../img/1.jpg";
import useStyles from "./Style.js";
import {Link, useLocation} from "react-router-dom";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img
              src={mcbook}
              alt="wood life"
              height="25px"
              className={classes.image}
            />
            wood life
          </Typography>
          <div className={classes.grow} />
          {location.pathname ===  '/' && (
          <div className={classes.button}>
            <IconButton component={Link}  to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
