import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../UI/Card";
import LocationField from "./LocationField";
import {
  showSpinner,
  addPlace,
  setPlaceInput,
  setDescriptionInput,
  resetForm,
  hideSpinner,
} from "../../../store/formSlice";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";

let re = new RegExp("[0-9]");
const includesNum = (str) => re.test(str);

const AddForm = () => {
  //const [enteredPlace, setEnteredPlace] = useState("");
  // const [enteredDescription, setEnteredDescription] = useState("");
  const [checkedUser, setCheckedUser] = useState(null);
  const [isRadioChecked, setIsRadioChecked] = useState(false);
  const [placeInpHasError, setPlaceInpHasError] = useState(false);

  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const enteredDescription = useSelector(
    (state) => state.form.descriptionInput
  );
  const currentLocation = useSelector((state) => state.map.currentLocation);

  const placeInpHandler = (e) => {
    if (e.target.value.length > 2 && !includesNum(e.target.value)) {
      setPlaceInpHasError(false);
    }
    //setEnteredPlace(e.target.value);
    dispatch(setPlaceInput(e.target.value));
  };

  const getCheckedValueHandler = (data) => {
    setCheckedUser(data);
    setIsRadioChecked(true);
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
    dispatch(showSpinner());
    const obj = {
      user: checkedUser,
      enteredPlace,
      enteredDescription,
      location: currentLocation,
    };
    fetch(
      "https://jumanjiapp-c982f-default-rtdb.europe-west1.firebasedatabase.app/test.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(addPlace({ ...obj, key: data.name }));
        dispatch(resetForm());
        dispatch(hideSpinner());
      })
      .catch((err) => console.log(err));

    //setEnteredPlace("");
    // setEnteredDescription("");
  };
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
              onChange={(e) => dispatch(setDescriptionInput(e.target.value))}
            />
          </div>
          <RadioBtns
            onGetRadioValue={getCheckedValueHandler}
            onUncheckRadio={isRadioChecked}
          />
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
