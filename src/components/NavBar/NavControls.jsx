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

import { cancelForm } from "../../store/formSlice";

const NavControls = () => {
  const dispatch = useDispatch();
  const urlLocation = useLocation();
  console.log(urlLocation.pathname);

  const listIsVisible = useSelector((state) => state.controller.listIsVisible);
  const formIsVisible = useSelector((state) => state.form.formIsVisible);
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );

  const toggleAddMarkerHandler = (e) => {
    addMarkerSwitchIsActive
      ? dispatch(disactivateAddMarkerBtn())
      : dispatch(activateAddMarkerBtn()); // používáat toggle nebo showlist/hidelist
    //if (!e.target.checked) dispatch(cancelForm());
  };

  const toggleDeleteSwitchHandler = () => {
    deleteSwitchIsActive
      ? dispatch(disactivateDeleteBtn())
      : dispatch(activateDeleteBtn()); // používáat toggle nebo showlist/hidelist
  };

  const toggleListBtnHandler = () => {
    if (formIsVisible) return;
    listIsVisible ? dispatch(hideList()) : dispatch(showList());
  };

  const pathIsGame = urlLocation.pathname === "/game";

  return (
    <div className={styles["nav__controls"]}>
      {!pathIsGame && (
        <Button
          variant={addMarkerSwitchIsActive ? "outlined" : "contained"}
          color="secondary"
          onClick={toggleAddMarkerHandler}
          sx={{ borderRadius: "1rem" }}
        >
          Add Marker
        </Button>
      )}

      {!pathIsGame && (
        <Button
          variant={deleteSwitchIsActive ? "outlined" : "contained"}
          color="error"
          onClick={toggleDeleteSwitchHandler}
          sx={{ borderRadius: "1rem", margin: "0 0.5em" }}
        >
          Delete Marker
        </Button>
      )}
      {!pathIsGame && (
        <Button
          variant={listIsVisible ? "outlined" : "contained"}
          color="secondary"
          onClick={toggleListBtnHandler}
          sx={{ marginRight: "1em", borderRadius: "1rem" }}
        >
          Show List
        </Button>
      )}

      <BasicTabs />
    </div>
  );
};

export default NavControls;
