import { Typography } from "@mui/material";
import React, { useState } from "react";

import Card from "../../../UI/Card";
import LocationField from "./LocationField";

import RadioBtns from "./RadioBtns";
import SubmitBtn from "./SubmitBtn";

import styles from "./AddForm.module.css";

const AddForm = () => {
  const [enteredPlace, setEnteredPlace] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  console.log(enteredPlace, enteredDescription);
  return (
    <div className={styles.container}>
      <Card>
        <form>
          <div className={styles["input-container"]}>
            <label htmlFor="name">
              <Typography fontSize="small">Place name:</Typography>
            </label>
            <input
              type="text"
              value={enteredPlace}
              onChange={(e) => setEnteredPlace(e.target.value)}
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
          <RadioBtns />
          <div className={styles["submit-container"]}>
            <LocationField />
            <SubmitBtn />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
