import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../UI/Card";
import LocationField from "./LocationField";
import {
  showSpinner,
  addPlace,
  resetForm,
  hideSpinner,
  hideForm,
} from "../../../store/formSlice";

import { disactivateAddMarkerSwitch } from "../../../store/controllerSlice";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";
import { deleteCurrentLocation } from "../../../store/mapSlice";
import Button from "@mui/material/Button";
import Inputs from "./Inputs";

const AddForm = () => {
  //const [enteredPlace, setEnteredPlace] = useState("");
  // const [enteredDescription, setEnteredDescription] = useState("");
  const [checkedUser, setCheckedUser] = useState(null);
  const [isRadioChecked, setIsRadioChecked] = useState(false);

  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const enteredDescription = useSelector(
    (state) => state.form.descriptionInput
  );
  const currentLocation = useSelector((state) => state.map.currentLocation);
  const placeInpHasError = useSelector(
    (state) => state.form.placeInputHasError
  );

  const getCheckedValueHandler = (data) => {
    setCheckedUser(data);
    setIsRadioChecked(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(showSpinner());
    const obj = {
      user: checkedUser,
      placeName: enteredPlace,
      description: enteredDescription,
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
        dispatch(addPlace({ ...obj, id: data.name }));
        dispatch(disactivateAddMarkerSwitch());
        dispatch(hideForm());
        dispatch(resetForm());
        dispatch(hideSpinner());
        dispatch(deleteCurrentLocation());
      })
      .catch((err) => console.log(err));

    //setEnteredPlace("");
    // setEnteredDescription("");
  };

  const onCancelHandler = () => {
    dispatch(disactivateAddMarkerSwitch());
    dispatch(hideForm());
    dispatch(resetForm());
    dispatch(deleteCurrentLocation());
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

          <Inputs />

          <RadioBtns
            onGetRadioValue={getCheckedValueHandler}
            onUncheckRadio={isRadioChecked}
          />
          <div className={styles["submit-container"]}>
            <LocationField />

            <div>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={onCancelHandler}
              >
                Cancel
              </Button>
              <SubmitBtn
                formIsValid={!placeInpHasError && checkedUser !== null}
                a={submitHandler}
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
