import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { toggleAddMarker } from "../store/controllerSlice";
import { resetForm } from "../store/formSlice";

export default function SwitchLabel() {
  const dispatch = useDispatch();
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  const toggleAddMarkerHandler = (e) => {
    dispatch(toggleAddMarker(e.target.checked));

    if (!e.target.checked) dispatch(resetForm());
  };

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
