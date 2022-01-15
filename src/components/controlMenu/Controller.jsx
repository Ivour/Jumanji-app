import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../store/controllerSlice";

import AddForm from "./Form/AddForm";
import Card from "../../UI/Card";

import styles from "./Controller.module.css";
import { Typography, Button } from "@mui/material";
import SwitchLabel from "../../UI/SwitchLabel";

const Controller = () => {
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
  );

  const formIsVisible = useSelector((state) => state.controller.formIsVisible);
  const dispatch = useDispatch();

  const activateAddMarkerHandler = () => dispatch(actions.toggleAddMarker());

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
        <SwitchLabel />

        <Button variant="contained" color="success" className={styles.a}>
          show List
        </Button>
      </div>
      {formIsVisible ? <AddForm /> : null}
    </div>
  );
};

export default Controller;
