import React from "react";
import { Button } from "@mui/material";
import SwitchLabel from "./SwitchLabel";
import BasicTabs from "./BasicTabs";
import styles from "./NavControls.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleAddMarker } from "../../store/controllerSlice";
import {
  hideList,
  showList,
  disactivateDeleteSwitch,
  activateDeleteSwitch,
} from "../../store/controllerSlice";

import { cancelForm } from "../../store/formSlice";

const NavControls = () => {
  const listIsVisible = useSelector((state) => state.controller.listIsVisible);

  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerIsActive
  );
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );

  const location = useLocation();
  const dispatch = useDispatch();
  const toggleAddMarkerHandler = (e) => {
    dispatch(toggleAddMarker(e.target.checked));

    if (!e.target.checked) dispatch(cancelForm());
  };

  const toggleDeleteSwitchHandler = () => {
    if (deleteSwitchIsActive) {
      dispatch(disactivateDeleteSwitch());
    } else {
      dispatch(cancelForm());
      dispatch(activateDeleteSwitch());
    }
  };

  const toggleListBtnHandler = () => {
    listIsVisible ? dispatch(hideList()) : dispatch(showList());
  };
  return (
    <div className={styles["nav__controls"]}>
      <Button
        variant={listIsVisible ? "outlined" : "contained"}
        color="secondary"
        onClick={toggleListBtnHandler}
        disabled={location.pathname === "/game" ? true : false}
      >
        Show List
      </Button>
      <SwitchLabel
        title="Add Marker"
        color="secondary"
        onChange={toggleAddMarkerHandler}
        checked={addMarkerIsActive}
      />
      <SwitchLabel
        title="Delete Marker"
        color="error"
        onChange={toggleDeleteSwitchHandler}
        checked={deleteSwitchIsActive}
      />
      <BasicTabs />
    </div>
  );
};

export default NavControls;
