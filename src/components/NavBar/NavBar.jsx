import React, { Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  disactivateAddMarkerSwitch,
  hideList,
  showList,
} from "../../store/controllerSlice";

import { hideForm, resetForm } from "../../store/formSlice";

import { deleteCurrentLocation } from "../../store/mapSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  const listIsVisible = useSelector((state) => state.controller.listIsVisible);

  const location = useLocation();

  const navigate = useNavigate();

  const toggleControlerBtnHandler = () => {
    dispatch(toggleController()); // NEZAPOMÍNAT ODPÁLIT FUNKCI POMOCÍ ()
  };

  const navigateHomeHandler = () => {
    navigate("/");
    dispatch(disactivateAddMarkerSwitch());
    dispatch(hideForm());
    dispatch(resetForm());
    dispatch(deleteCurrentLocation());
  };

  const toggleListBtnHandler = () => {
    listIsVisible ? dispatch(hideList()) : dispatch(showList());
  };

  return (
    <Fragment>
      <nav className={styles.nav}>
        <div className={styles["nav__logo-container"]}>
          <LandscapeIcon
            fontSize="large"
            color="success"
            onClick={navigateHomeHandler}
            className={styles["nav__logo"]}
          />
          <Typography
            variant="h6"
            onClick={navigateHomeHandler}
            className={styles["nav__logo-text"]}
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
              disabled={location.pathname === "/game" ? true : false}
              className={styles["nav__controller-btn"]}
            >
              Toggle Controller
            </Button>
          </div>
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
