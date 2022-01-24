import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../UI/Card";
import LocationField from "./LocationField";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";
import Button from "@mui/material/Button";
import Inputs from "./Inputs";

import { sendForm, cancelForm } from "../../../store/formActions";

const AddForm = () => {
  const [checkedUser, setCheckedUser] = useState(null);

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
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      user: checkedUser,
      placeName: enteredPlace,
      description: enteredDescription,
      location: currentLocation,
    };

    dispatch(sendForm(obj));
  };

  return (
    <div>
      <Card>
        <form onSubmit={submitHandler} className={styles.form}>
          {placeInpHasError && (
            <Typography fontSize="small" color="error">
              write valid place
            </Typography>
          )}

          <Inputs />

          <RadioBtns
            onGetRadioValue={getCheckedValueHandler}
            // onUncheckRadio={isRadioChecked}
          />

          <LocationField />

          <div>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={() => dispatch(cancelForm())}
            >
              Cancel
            </Button>
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
