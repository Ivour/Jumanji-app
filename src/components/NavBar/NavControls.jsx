import React from "react";
import { Button } from "@mui/material";
import BasicTabs from "./BasicTabs";
import styles from "./NavControls.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleAddMarker } from "../../store/controllerSlice";
import {
  hideList,
  showList,
  toggleDeleteSwitch,
} from "../../store/controllerSlice";

import { cancelForm } from "../../store/formSlice";
import ReusableSwitch from "./ReusableSwitch";

const NavControls = () => {
  const location = useLocation();
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
    dispatch(toggleAddMarker(e.target.checked));
    if (!e.target.checked) dispatch(cancelForm());
  };

  const toggleDeleteSwitchHandler = (e) => {
    dispatch(toggleDeleteSwitch(e.target.checked)); // používáat toggle nebo showlist/hidelist
  };

  const toggleListBtnHandler = () => {
    if (formIsVisible) return;
    listIsVisible ? dispatch(hideList()) : dispatch(showList());
  };

  const pathIsGame = urlLocation.pathname === "/game";
  console.log(pathIsGame);

  return (
    <div className={styles["nav__controls"]}>
      {!pathIsGame && (
        <ReusableSwitch
          title="Add Marker"
          color="secondary"
          onChange={toggleAddMarkerHandler}
          checked={addMarkerSwitchIsActive}
        />
      )}

      {!pathIsGame && (
        <ReusableSwitch
          title="Delete Marker"
          color="error"
          onChange={toggleDeleteSwitchHandler}
          checked={deleteSwitchIsActive}
        />
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
