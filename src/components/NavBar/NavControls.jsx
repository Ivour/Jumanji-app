import React from "react";
import { Button } from "@mui/material";
import styles from "./NavControls.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  activateAddMarkerBtn,
  activateDeleteBtn,
  disactivateAddMarkerBtn,
  disactivateDeleteBtn,
} from "../../store/controllerSlice";
import { hideList, showList } from "../../store/controllerSlice";
import { cancelForm, showForm } from "../../store/formSlice";

const NavControls = () => {
  const dispatch = useDispatch();
  const listIsVisible = useSelector((state) => state.controller.listIsVisible);
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

  return (
    <div className={styles["nav__controls"]}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={toggleListBtnHandler}
        sx={{ borderRadius: "1rem" }}
      >
        Show List
      </Button>

      {!gameIsLoaded && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={toggleAddMarkerHandler}
          sx={{ borderRadius: "1rem", margin: "0 0.5em" }}
        >
          Add Marker
        </Button>
      )}

      {!gameIsLoaded && (
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
