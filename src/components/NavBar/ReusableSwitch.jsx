import * as React from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ReusableSwitch(props) {
  const location = useLocation();
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);
  return (
    <FormControlLabel
      control={
        <Switch
          size="medium"
          checked={props.checked}
          color={props.color}
          sx={{ marginTop: "-0.7em" }}
          onChange={props.onChange}
          disabled={location.pathname === "/game" || gameIsLoaded}
        />
      }
      label={props.title}
      labelPlacement="top"
    />
  );
}
