import { Typography } from "@mui/material";
import React, { useState } from "react";

import Card from "../../../UI/Card";
import Selector from "./Selector";

import styles from "./AddForm.module.css";

const AddForm = () => {
  const [enteredPlace, setEnteredPlace] = useState("");
  console.log(enteredPlace);
  return (
    <div className={styles.container}>
      <Card>
        <form>
          <div className={styles["nameInput-container"]}>
            <label htmlFor="name">
              <Typography fontSize="small">Place name:</Typography>
            </label>
            <input
              type="text"
              value={enteredPlace}
              onChange={(e) => setEnteredPlace(e.target.value)}
            />
          </div>

          <Selector />
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
