import * as React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function SwitchLabel(props) {
  return (
    <FormControlLabel
      control={
        <Switch
          size="medium"
          checked={props.checked}
          color={props.color}
          sx={{ "margin-top": "-0.7em" }}
          onChange={props.onChange}
        />
      }
      label={props.title}
      labelPlacement="top"
    />
  );
}