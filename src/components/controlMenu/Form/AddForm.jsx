import { Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationField from "./LocationField";
import RadioBtns from "./RadioBtns";
import styles from "./AddForm.module.css";
import Inputs from "./Inputs";
import useHttp from "../../../hooks/useHttp";
import { URL_FIREBASE } from "../../../helpers/constants";
import { addPlace } from "../../../store/formSlice";
import { cancelForm } from "../../../store/formSlice";
import { disactivateAddMarkerBtn } from "../../../store/controllerSlice";
import FormButtons from "./FormButtons";

const AddForm = () => {
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
      addPlace
    ).then(() => {
      dispatch(cancelForm());
      dispatch(disactivateAddMarkerBtn());
    });

    //dispatch(sendForm(obj));
  };

  if (!currentLocation && addMarkerSwitchIsActive)
    return (
      <div className={styles.form}>
        <Typography variant="h6" sx={{ alignSelf: "center" }}>
          Click the map
        </Typography>
      </div>
    );

  if (!currentLocation && deleteSwitchIsActive)
    return (
      <div className={styles.form}>
        <Typography variant="h6" sx={{ alignSelf: "center" }}>
          Click a marker
        </Typography>
      </div>
    );

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Typography variant="h6" sx={{ alignSelf: "center" }}>
        Add marker form
      </Typography>

      <Inputs />

      <RadioBtns />

      <LocationField />

      <FormButtons onSubmit={submitHandler} />
    </form>
  );
};

export default AddForm;
