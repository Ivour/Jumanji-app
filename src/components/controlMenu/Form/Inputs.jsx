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
  const placeInpHasError = useSelector(
    (state) => state.form.placeInputHasError
  );

  const placeInpHandler = (e) => {
    if (e.target.value.length < 2 || includesNum(e.target.value)) {
      dispatch(placeInputHasError(true));
    } else {
      dispatch(placeInputHasError(false));
      dispatch(setPlaceInput(e.target.value));
    }
  };

  const descriptionInputHandler = (e) => {
    dispatch(setDescriptionInput(e.target.value));
  };

  const debouncePlaceInputHandler = debounce(placeInpHandler, 500);
  const debounceDescriptionInputHandler = debounce(
    descriptionInputHandler,
    500
  );

  return (
    <Fragment>
      {placeInpHasError && (
        <Typography fontSize="small" color="error" className={styles.error}>
          Write valid place
        </Typography>
      )}

      <div className={styles["input-with-label"]}>
        <label htmlFor="name">
          <Typography fontSize="small">Place name:</Typography>
        </label>
        <input
          type="text"
          onChange={debouncePlaceInputHandler}
          className={styles["input-with-label__input"]}
        />
      </div>

      <div className={styles["input-with-label"]}>
        <label htmlFor="descripiton">
          <Typography fontSize="small">Description:</Typography>
        </label>
        <input
          type="text"
          onChange={debounceDescriptionInputHandler}
          className={styles["input-with-label__input"]}
        />
      </div>
    </Fragment>
  );
};

export default Inputs;
