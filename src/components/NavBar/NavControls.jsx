import React from "react";
import { Button } from "@mui/material";
import BasicTabs from "./BasicTabs";
import styles from "./NavControls.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  activateAddMarkerBtn,
  activateDeleteBtn,
  disactivateAddMarkerBtn,
  disactivateDeleteBtn,
} from "../../store/controllerSlice";
import { hideList, showList } from "../../store/controllerSlice";

import { hideForm, cancelForm, showForm } from "../../store/formSlice";

const NavControls = () => {
  const dispatch = useDispatch();
  const urlLocation = useLocation();
  console.log(urlLocation.pathname);

  const listIsVisible = useSelector((state) => state.controller.listIsVisible);
  const formIsVisible = useSelector((state) => state.form.formIsVisible);
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);

  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );

  const toggleAddMarkerHandler = (e) => {
    if (!addMarkerSwitchIsActive) {
      dispatch(activateAddMarkerBtn());
      dispatch(showForm());
    } else {
      dispatch(disactivateAddMarkerBtn());
      dispatch(cancelForm());
    }
  };

  const toggleDeleteSwitchHandler = () => {
    if (!deleteSwitchIsActive) {
      dispatch(activateDeleteBtn());
      dispatch(cancelForm());
      dispatch(showForm());
    } else {
      dispatch(disactivateDeleteBtn());
      dispatch(cancelForm());
    }
  };

  const toggleListBtnHandler = () => {
    if (!listIsVisible) {
      dispatch(cancelForm());
      dispatch(showList());
    } else {
      dispatch(hideList());
    }
  };

  const pathIsGame = urlLocation.pathname === "/game";

  return (
    <div className={styles["nav__controls"]}>
      {!pathIsGame && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={toggleListBtnHandler}
          sx={{ borderRadius: "1rem" }}
        >
          Show List
        </Button>
      )}
      {!pathIsGame && !gameIsLoaded && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={toggleAddMarkerHandler}
          sx={{ borderRadius: "1rem", margin: "0 0.5em" }}
        >
          Add Marker
        </Button>
      )}

      {!pathIsGame && !gameIsLoaded && (
        <Button
          variant="outlined"
          color="error"
          onClick={toggleDeleteSwitchHandler}
          sx={{ borderRadius: "1rem", marginRight: "1em" }}
        >
          Delete Marker
        </Button>
      )}
    </div>
  );
};

export default NavControls;
