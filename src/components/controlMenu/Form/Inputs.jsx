import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@mui/material/Typography";

import {
  setPlaceInput,
  setDescriptionInput,
  placeInputHasError,
} from "../../../store/formSlice";

import styles from "./Inputs.module.css";
import { debounce } from "lodash";

const re = new RegExp("[0-9]");
const includesNum = (str) => re.test(str);

const Inputs = () => {
  //const [placeInpHasError, setPlaceInpHasError] = useState(false);

  const dispatch = useDispatch();

  const placeInpHandler = (e) => {
    if (e.target.value.length < 2 || includesNum(e.target.value)) {
      dispatch(placeInputHasError(true));
    } else {
      dispatch(placeInputHasError(false));
    }
    //setEnteredPlace(e.target.value);
    dispatch(setPlaceInput(e.target.value));
  };

  const debouncePlaceInputHandler = debounce(placeInpHandler, 500);

  const descriptionInputHandler = (e) => {
    dispatch(setDescriptionInput(e.target.value));
  };

  const debounceDescriptionInputHandler = debounce(
    descriptionInputHandler,
    500
  );

  console.log("input render");
  return (
    <Fragment>
      <div className={styles.container}>
        <label htmlFor="name">
          <Typography fontSize="small">Place name:</Typography>
        </label>
        <input
          type="text"
          onChange={debouncePlaceInputHandler}
          className={styles["container__input"]}
        />
      </div>

      <div className={styles.container}>
        <label htmlFor="descripiton">
          <Typography fontSize="small">Description:</Typography>
        </label>
        <input
          type="text"
          onChange={debounceDescriptionInputHandler}
          className={styles["container__input"]}
        />
      </div>
    </Fragment>
  );
};

export default Inputs;
