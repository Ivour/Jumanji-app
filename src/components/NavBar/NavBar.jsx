import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";

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
  const [toggleIsClicked, setToggleIsClicked] = useState(false);

  const navigate = useNavigate();

  const toggleBtnHandler = () => {
    setToggleIsClicked((prev) => !prev);
  };

  const navigateHomeHandler = () => {
    navigate("/map");
  };

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <LandscapeIcon
            fontSize="large"
            color="success"
            onClick={navigateHomeHandler}
            className={styles.icon}
          />
          <Typography variant="h6" onClick={navigateHomeHandler}>
            Jumanji App
          </Typography>
        </div>

        <div className={styles["nav-btns"]}>
          <BasicTabs />
          <Button
            variant={toggleIsClicked ? "outlined" : "contained"}
            color="success"
            onClick={toggleBtnHandler}
            endIcon={
              toggleIsClicked ? (
                <ArrowForwardIosIcon />
              ) : (
                <ArrowBackIosNewIcon />
              )
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
    </Fragment>
  );
};

export default NavBar;
