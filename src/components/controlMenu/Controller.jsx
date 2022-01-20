import React from "react";

import { useSelector, useDispatch } from "react-redux";

import AddForm from "./Form/AddForm";

import styles from "./Controller.module.css";
import { Typography } from "@mui/material";
import SwitchLabel from "../../UI/SwitchLabel";

import {
  activateDeleteSwitch,
  disactivateDeleteSwitch,
  toggleAddMarker,
} from "../../store/controllerSlice";
import { resetForm, hideForm } from "../../store/formSlice";
import { cancelForm } from "../../store/formActions";

const Controller = () => {
  const dispatch = useDispatch();
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );
  const formIsVisible = useSelector((state) => state.form.formIsVisible);

  const toggleAddMarkerHandler = (e) => {
    dispatch(toggleAddMarker(e.target.checked));

    if (!e.target.checked) dispatch(resetForm());
  };

  const toggleDeleteSwitchHandler = () => {
    if (deleteSwitchIsActive) {
      dispatch(disactivateDeleteSwitch());
    } else {
      dispatch(cancelForm());
      dispatch(activateDeleteSwitch());
    }
  };

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Controller
      </Typography>
      <div className={styles.mainControllerBtns}>
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
        />
      </div>
      {formIsVisible ? <AddForm /> : null}
    </div>
  );
};

export default Controller;
