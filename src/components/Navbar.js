import React from "react";
import { NavLink } from "react-router-dom";

// Material-ui components and icons
import {
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Tooltip,
  Fade,
} from "@material-ui/core";
import WbSunnySharpIcon from "@material-ui/icons/WbSunnySharp";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

// useStyles used to over ride the button default props
const useStyles = makeStyles((theme) => ({
  button: {
    margin: 4,
    color: "#6BCAE2",
    fontWeight: "bold",
    backgroundImage:
      "url(https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-740x463.jpg)",

    "&:hover": {
      color: "#000000", // on hover black color text
      backgroundColor: "#ffff00", // does not work with a backgound image set as a background
    },
  },
}));

export default function Navbar(props) {
  const classes = useStyles(); // material ui classes

  function darkModeButton() {
    if (props.darkMode) {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(false)}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <WbSunnySharpIcon fontSize="small" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          onClick={(e) => props.set_darkMode(true)}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <BeachAccessIcon fontSize="small" />
        </IconButton>
      );
    }
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box>{darkModeButton()}</Box>
        {/* Tooltip can display the button name */}
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="HOME"
        >
          <Button
            className={classes.button}
            variant="contained"
            component={NavLink}
            to="/"
          >
            Home
          </Button>
        </Tooltip>
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="DASHBOARD"
        >
          <Button
            variant="contained"
            className={classes.button}
            component={NavLink}
            to="/dashboard"
          >
            Dashboard
          </Button>
        </Tooltip>
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="LOGIN"
        >
          <Button
            variant="contained"
            className={classes.button}
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
        </Tooltip>
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="SIGNUP"
        >
          <Button
            variant="contained"
            className={classes.button}
            component={NavLink}
            to="/signup"
          >
            Signup
          </Button>
        </Tooltip>
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="MOTIVATION"
        >
          <Button
            variant="contained"
            className={classes.button}
            component={NavLink}
            to="/motivation"
          >
            motivation
          </Button>
        </Tooltip>
        <Tooltip
          size="medium"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
          title="QUIZ"
        >
          <Button
            variant="contained"
            className={classes.button}
            component={NavLink}
            to="/triviaquiz"
          >
            triviaquiz
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
