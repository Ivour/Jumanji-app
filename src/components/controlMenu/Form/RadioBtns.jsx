import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";

import styles from "./RadioBtns.module.css";

const RadioBtns = () => {
  return (
    <FormControl component="fieldset" className={styles.control}>
      <Typography fontSize="small" className={styles.label}>
        User:{" "}
      </Typography>
      <RadioGroup
        aria-label="user"
        name="row-radio-buttons-group"
        className={styles.group}
      >
        <FormControlLabel
          value="Kubao"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography fontSize="small" className={styles.typo}>
              Kubao
            </Typography>
          }
        />
        <FormControlLabel
          value="Vohři"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography fontSize="small" className={styles.typo}>
              Vohři
            </Typography>
          }
        />
        <FormControlLabel
          value="Ivour"
          control={<Radio size="small" color="secondary" />}
          label={
            <Typography fontSize="small" className={styles.typo}>
              Ivour
            </Typography>
          }
        />
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioBtns;
