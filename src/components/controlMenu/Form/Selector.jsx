import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./Selector.module.css";

export default function Selector() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size="small" className={styles.control}>
      <InputLabel
        id="demo-simple-select-helper-label"
        color="secondary"
        className={styles.label}
      >
        Age
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={age}
        label="Age"
        onChange={handleChange}
        color="secondary"
        className={styles.select}
        size="small"
      >
        <MenuItem value={10} className={styles.a}>
          Ten
        </MenuItem>
      </Select>
    </FormControl>
  );
}
