import React from "react";

import { useSelector, useDispatch } from "react-redux";

import AddForm from "./Form/AddForm";

import styles from "./Controller.module.css";
import { Typography } from "@mui/material";
import SwitchLabel from "../../UI/SwitchLabel";

import { toggleAddMarker } from "../../store/controllerSlice";
import { resetForm } from "../../store/formSlice";

const Controller = () => {
  /*  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
  ); */ const dispatch = useDispatch();
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  const toggleAddMarkerHandler = (e) => {
    dispatch(toggleAddMarker(e.target.checked));

    if (!e.target.checked) dispatch(resetForm());
  };

  const formIsVisible = useSelector((state) => state.form.formIsVisible);
  // const dispatch = useDispatch();

  // const activateAddMarkerHandler = () => dispatch(actions.toggleAddMarker());

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Controller
      </Typography>
      <div className={styles.mainControllerBtns}>
        {/* <Button
          variant={addMarkerIsActive ? "outlined" : "contained"}
          color="success"
          className={styles.a}
          onClick={activateAddMarkerHandler}
        >
          add Marker
        </Button> */}
        <SwitchLabel
          title="Add Marker"
          color="secondary"
          onChange={toggleAddMarkerHandler}
          checked={addMarkerIsActive}
        />
        <SwitchLabel title="Delete Marker" color="error" />
      </div>
      {formIsVisible ? <AddForm /> : null}
    </div>
  );
};

export default Controller;
