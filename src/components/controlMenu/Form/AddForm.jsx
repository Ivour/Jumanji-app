import { Typography } from "@mui/material";
import React, { useState } from "react";

import Card from "../../../UI/Card";
import LocationField from "./LocationField";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";

let re = new RegExp("[0-9]");
const includesNum = (str) => re.test(str);

const AddForm = () => {
  const [enteredPlace, setEnteredPlace] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [checkedUser, setCheckedUser] = useState(null);
  const [placeInpHasError, setPlaceInpHasError] = useState(false);

  const placeInpHandler = (e) => {
    if (e.target.value.length > 2 && !includesNum(e.target.value)) {
      setPlaceInpHasError(false);
    }
    setEnteredPlace(e.target.value);
  };

  const getCheckedValueHandler = (data) => {
    setCheckedUser(data);
  };

  const placeBlurHandler = () => {
    if (enteredPlace.length < 2 || includesNum(enteredPlace)) {
      setPlaceInpHasError(true);
    } else {
      setPlaceInpHasError(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      user: checkedUser,
      enteredPlace,
      enteredDescription,
    });
    setEnteredPlace("");
    setEnteredDescription("");
  };
  console.log("render");
  return (
    <div className={styles.container}>
      <Card>
        <form onSubmit={submitHandler}>
          {placeInpHasError && (
            <Typography fontSize="small" color="error">
              write valid place
            </Typography>
          )}
          <div className={styles["input-container"]}>
            <label htmlFor="name">
              <Typography fontSize="small">Place name:</Typography>
            </label>
            <input
              type="text"
              value={enteredPlace}
              onChange={placeInpHandler}
              onBlur={placeBlurHandler}
            />
          </div>

          <div className={styles["input-container"]}>
            <label htmlFor="descripiton">
              <Typography fontSize="small">Description:</Typography>
            </label>
            <input
              type="text"
              value={enteredDescription}
              onChange={(e) => setEnteredDescription(e.target.value)}
            />
          </div>
          <RadioBtns onGetRadioValue={getCheckedValueHandler} />
          <div className={styles["submit-container"]}>
            <LocationField />
            <SubmitBtn
              formIsValid={!placeInpHasError && checkedUser !== null}
              a={submitHandler}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
