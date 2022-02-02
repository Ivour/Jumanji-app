import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LocationField from "./LocationField";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";
import Button from "@mui/material/Button";
import Inputs from "./Inputs";

import useHttp from "../../../hooks/useHttp";
import { URL_FIREBASE } from "../../../helpers/constants";
import { addPlace, showSpinner } from "../../../store/formSlice";
import { cancelForm } from "../../../store/formSlice";

const AddForm = () => {
  // const [checkedUser, setCheckedUser] = useState(null);
  const sendRequest = useHttp();

  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const enteredDescription = useSelector(
    (state) => state.form.descriptionInput
  );
  const currentLocation = useSelector((state) => state.form.currentLocation);
  const checkedUser = useSelector((state) => state.form.userInput);
  const placeInpHasError = useSelector(
    (state) => state.form.placeInputHasError
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      user: checkedUser,
      placeName: enteredPlace,
      description: enteredDescription,
      location: currentLocation,
    };

    sendRequest(
      {
        url: URL_FIREBASE,
        method: "POST",
        body: obj,
        headers: { "Content-Type": "application/json" },
      },
      addPlace,
      [showSpinner],
      [cancelForm]
    );

    //dispatch(sendForm(obj));
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Typography variant="h6" className={styles["container__title"]}>
        Add marker form
      </Typography>
      {placeInpHasError && (
        <Typography fontSize="small" color="error">
          write valid place
        </Typography>
      )}

      <Inputs />

      <RadioBtns
      //onGetRadioValue={getCheckedValueHandler}
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
  );
};

export default AddForm;
