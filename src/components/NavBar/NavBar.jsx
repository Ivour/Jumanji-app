import React, { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import BasicTabs from "./BasicTabs";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LandscapeIcon from "@mui/icons-material/Landscape";

import { useSelector, useDispatch } from "react-redux";
import {
  toggleController,
  hideList,
  showList,
  disactivateAddMarkerSwitch,
  disactivateDeleteSwitch,
} from "../../store/controllerSlice";

import { cancelForm } from "../../store/formSlice";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  const listIsVisible = useSelector((state) => state.controller.listIsVisible);
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);

  const location = useLocation();

  const toggleControlerBtnHandler = () => {
    dispatch(toggleController()); // NEZAPOMÍNAT ODPÁLIT FUNKCI POMOCÍ ()
  };

  const refreshPageHandler = () => {
    navigate("/");
    window.location.reload(true);
  };

  const toggleListBtnHandler = () => {
    listIsVisible ? dispatch(hideList()) : dispatch(showList());
  };

  if (gameIsLoaded) {
    dispatch(disactivateAddMarkerSwitch());
    dispatch(disactivateDeleteSwitch());
    dispatch(cancelForm());
    dispatch(toggleController("hide"));
  }

  const mouseOverHandler = (e) => {
    if ((e.target.id === "jumanji" || e.target.id === "logo") && gameIsLoaded)
      setIsHovered(true);
  };
  const mouseLeaveHandler = (e) => {
    if (gameIsLoaded) setIsHovered(false);
  };
  return (
    <Fragment>
      <nav className={styles.nav}>
        <div
          className={styles["nav__logo-container"]}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <LandscapeIcon
            fontSize="large"
            color="success"
            onClick={refreshPageHandler}
            className={styles["nav__logo"]}
            id="logo"
          />
          <Typography
            variant="h6"
            onClick={refreshPageHandler}
            className={styles["nav__logo-text"]}
            id="jumanji"
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
        {isHovered && (
          <Typography fontSize="small" color="error">
            warning: if you click the chosen places will be gone...
          </Typography>
        )}

        <div className={styles["nav__btns"]}>
          <BasicTabs />
          <div>
            <Button
              variant={listIsVisible ? "outlined" : "contained"}
              color="secondary"
              onClick={toggleListBtnHandler}
              disabled={location.pathname === "/game" ? true : false}
            >
              Show List
            </Button>
            <Button
              variant={controllerBtnIsActive ? "outlined" : "contained"}
              color="success"
              onClick={toggleControlerBtnHandler}
              endIcon={
                controllerBtnIsActive ? (
                  <ArrowForwardIosIcon />
                ) : (
                  <ArrowBackIosNewIcon />
                )
              }
              disabled={
                location.pathname === "/game"
                  ? true
                  : gameIsLoaded
                  ? true
                  : false
              }
              className={styles["nav__controller-btn"]}
            >
              Toggle Controller
            </Button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
