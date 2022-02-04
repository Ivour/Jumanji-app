import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";

import styles from "./RadioBtns.module.css";
import { useDispatch } from "react-redux";
import { selectUser } from "../../../store/formSlice";

const RadioBtns = () => {
  const dispatch = useDispatch();
  return (
    <FormControl component="fieldset" className={styles.container}>
      <Typography fontSize="small" className={styles["container__main-label"]}>
        User:
      </Typography>
      <RadioGroup
        aria-label="user"
        name="row-radio-buttons-group"
        defaultValue="Kubao"
        className={styles["container__buttons"]}
        onChange={(e) => dispatch(selectUser(e.target.value))}
      >
        <FormControlLabel
          value="Kubao"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography
              fontSize="small"
              className={styles["container__btn-label"]}
            >
              Kubao
            </Typography>
          }
        />
        <FormControlLabel
          value="Vohři"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography
              fontSize="small"
              className={styles["container__btn-label"]}
            >
              Vohři
            </Typography>
          }
        />
        <FormControlLabel
          value="Ivour"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography
              fontSize="small"
              className={styles["container__btn-label"]}
            >
              Ivour
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtns;
