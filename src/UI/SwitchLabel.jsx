import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { toggleAddMarker } from "../store/controllerSlice";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function SwitchLabel() {
  const dispatch = useDispatch();

  const toggleAddMarkerHandler = (e) =>
    dispatch(toggleAddMarker(e.target.checked));
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  return (
    <FormControlLabel
      control={
        <Switch
          checked={addMarkerIsActive}
          color="secondary"
          onChange={toggleAddMarkerHandler}
        />
      }
      label="Add marker switch"
      labelPlacement="top"
    />
  );
}
