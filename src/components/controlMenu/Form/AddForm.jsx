import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import LocationField from "./LocationField";

import RadioBtns from "./RadioBtns";

import styles from "./AddForm.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Inputs from "./Inputs";

import useHttp from "../../../hooks/useHttp";
import { URL_FIREBASE } from "../../../helpers/constants";
import { addPlace } from "../../../store/formSlice";
import { cancelForm } from "../../../store/formSlice";
import {
  disactivateAddMarkerBtn,
  toggleAddMarker,
} from "../../../store/controllerSlice";

const AddForm = () => {
  // const [checkedUser, setCheckedUser] = useState(null);
  const sendRequest = useHttp();

  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const enteredDescription = useSelector(
    (state) => state.form.descriptionInput
  );
  const currentLocation = useSelector((state) => state.form.currentLocation);
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
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
      [],
      [cancelForm, disactivateAddMarkerBtn]
    );

    //dispatch(sendForm(obj));
  };
  console.log(currentLocation);

  if (!currentLocation && addMarkerSwitchIsActive)
    return (
      <div className={styles.form}>
        <Typography variant="h6">Click the map</Typography>
      </div>
    );

  if (!currentLocation && deleteSwitchIsActive)
    return (
      <div className={styles.form}>
        <Typography variant="h6">Click a marker you want to delete</Typography>
      </div>
    );

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Typography variant="h6" sx={{ alignSelf: "center" }}>
        Add marker form
      </Typography>
      {placeInpHasError && (
        <Typography fontSize="small" color="error">
          Write valid place
        </Typography>
      )}

      <Inputs />

      <RadioBtns />

      <LocationField />

      <div className={styles["form__buttons"]}>
        <Button
          size="small"
          variant="contained"
          color="error"
          sx={{ borderRadius: "1rem" }}
          onClick={() => {
            dispatch(cancelForm());
            dispatch(disactivateAddMarkerBtn());
          }}
        >
          Cancel
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          endIcon={<SendIcon />}
          sx={{ borderRadius: "1rem" }}
          onClick={submitHandler}
          disabled={placeInpHasError || !enteredPlace}
        >
          Add place
        </Button>
      </div>
    </form>
  );
};

export default AddForm;
