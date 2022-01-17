import React, { useState, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import styles from "./NavBar.module.css";

import BasicTabs from "./BasicTabs";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AlarmIcon from "@mui/icons-material/Alarm";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleController,
  disactivateAddMarkerSwitch,
} from "../../store/controllerSlice";

let infoText;

const NavBar = () => {
  //const [toggleIsClicked, setToggleIsClicked] = useState(false);
  const dispatch = useDispatch();
  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  const location = useLocation();

  const navigate = useNavigate();

  /*  if (location.pathname === "/game")
    dispatch(actions.disactivateAddMarkerSwitch()); */

  const toggleBtnHandler = () => {
    dispatch(toggleController()); // NEZAPOMÍNAT ODPÁLIT FUNKCI POMOCÍ ()
    //setToggleIsClicked((prev) => !prev);
  };

  const navigateHomeHandler = () => {
    navigate("/");
    dispatch(disactivateAddMarkerSwitch());
  };

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div className={styles.logoContainer}>
          <LandscapeIcon
            fontSize="large"
            color="success"
            onClick={navigateHomeHandler}
            className={styles.logo}
          />
          <Typography
            variant="h6"
            onClick={navigateHomeHandler}
            className={styles["logo-text"]}
          >
            Jumanji App
          </Typography>
        </div>

        {!controllerBtnIsActive &&
          addMarkerSwitchIsActive &&
          location.pathname !== "/game" && (
            <Typography fontSize="small" color="error">
              warning: if you click on a map marker adding form will be shown
            </Typography>
          )}

        <div className={styles["nav-btns"]}>
          <BasicTabs />
          <Button
            variant={controllerBtnIsActive ? "outlined" : "contained"}
            color="success"
            onClick={toggleBtnHandler}
            endIcon={
              controllerBtnIsActive ? (
                <ArrowForwardIosIcon />
              ) : (
                <ArrowBackIosNewIcon />
              )
            }
            disabled={location.pathname === "/game" ? true : false}
            className={styles.toggleBtn}
          >
            Toggle Controller
          </Button>
          {/*  <IconButton
            color="secondary"
            aria-label="add an alarm"
            href="https://www.seznam.cz"
          >
            <AlarmIcon />
          </IconButton> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
