import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@mui/material/Typography";

import {
  setPlaceInput,
  setDescriptionInput,
  placeInputHasError,
} from "../../../store/formSlice";

import styles from "./Inputs.module.css";

const re = new RegExp("[0-9]");
const includesNum = (str) => re.test(str);

const Inputs = () => {
  //const [placeInpHasError, setPlaceInpHasError] = useState(false);

  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const enteredDescription = useSelector(
    (state) => state.form.descriptionInput
  );

  const placeInpHandler = (e) => {
    if (e.target.value.length > 2 && !includesNum(e.target.value)) {
      dispatch(placeInputHasError(false));
    }
    //setEnteredPlace(e.target.value);
    dispatch(setPlaceInput(e.target.value));
  };

  const placeBlurHandler = () => {
    if (enteredPlace.length < 2 || includesNum(enteredPlace)) {
      dispatch(placeInputHasError(true));
    } else {
      dispatch(placeInputHasError(false));
    }
  };
  return (
    <Fragment>
      <div className={styles.container}>
        <label htmlFor="name">
          <Typography fontSize="small">Place name:</Typography>
        </label>
        <input
          type="text"
          value={enteredPlace}
          onChange={placeInpHandler}
          onBlur={placeBlurHandler}
          className={styles["container__input"]}
        />
      </div>

      <div className={styles.container}>
        <label htmlFor="descripiton">
          <Typography fontSize="small">Description:</Typography>
        </label>
        <input
          type="text"
          value={enteredDescription}
          onChange={(e) => dispatch(setDescriptionInput(e.target.value))}
          className={styles["container__input"]}
        />
      </div>
    </Fragment>
  );
};

export default Inputs;
