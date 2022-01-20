import * as React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function SwitchLabel(props) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={props.checked}
          color={props.color}
          onChange={props.onChange}
        />
      }
      label={props.title}
      labelPlacement="top"
    />
  );
}
