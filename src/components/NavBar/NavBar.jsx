import React, { useState, Fragment } from "react";
import { Outlet } from "react-router-dom";

import styles from "./NavBar.module.css";

import BasicTabs from "./BasicTabs";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AlarmIcon from "@mui/icons-material/Alarm";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <LandscapeIcon fontSize="large" color="success" />
          <Typography variant="h6">Jumanji App</Typography>
        </div>

        <div className={styles["nav-btns"]}>
          {/* <Button variant="contained" color="success">
          Map
        </Button>
        <Button variant="contained" color="success">
          Game
        </Button> */}
          <BasicTabs />
          <Button
            variant={isClicked ? "outlined" : "contained"}
            color="success"
            onClick={toggleHandler}
            endIcon={
              isClicked ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />
            }
          >
            Toggle Controller
          </Button>
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            href="https://www.seznam.cz"
          >
            <AlarmIcon />
          </IconButton>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
