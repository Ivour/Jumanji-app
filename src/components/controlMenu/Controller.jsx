import React from "react";

import { useSelector } from "react-redux";

import AddForm from "./Form/AddForm";

import styles from "./Controller.module.css";
import { Typography, Button } from "@mui/material";
import SwitchLabel from "../../UI/SwitchLabel";

const Controller = () => {
  /*  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
  ); */

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
        <SwitchLabel />
        <SwitchLabel />

        
      </div>
      {formIsVisible ? <AddForm /> : null}
    </div>
  );
};

export default Controller;
