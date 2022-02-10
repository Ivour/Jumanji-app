import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FormButtons.module.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { cancelForm } from "../../store/formSlice";
import { disactivateAddMarkerBtn } from "../../store/controllerSlice";

const FormButtons = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const enteredPlace = useSelector((state) => state.form.placeInput);
  const placeInpHasError = useSelector(
    (state) => state.form.placeInputHasError
  );

  return (
    <div className={styles.buttons}>
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
        type="submit"
        endIcon={<SendIcon />}
        sx={{ borderRadius: "1rem" }}
        onClick={onSubmit}
        disabled={placeInpHasError || !enteredPlace}
      >
        Add place
      </Button>
    </div>
  );
};

export default FormButtons;
