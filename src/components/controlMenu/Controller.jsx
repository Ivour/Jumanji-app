import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../store/controllerSlice";

import AddForm from "./AddForm";

import styles from "./Controller.module.css";
import { Typography, Button } from "@mui/material";

const Controller = () => {
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
  );
  const dispatch = useDispatch();

  const activateAddMarkerHandler = () => dispatch(actions.toggleAddMarker());

  return (
    <div className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        Controller
      </Typography>
      <div className={styles.mainControllerBtns}>
        <Button
          variant={addMarkerIsActive ? "outlined" : "contained"}
          color="success"
          className={styles.a}
          onClick={activateAddMarkerHandler}
        >
          add Marker
        </Button>
        <Button variant="contained" color="success" className={styles.a}>
          show List
        </Button>
      </div>
      <AddForm />
    </div>
  );
};

export default Controller;
