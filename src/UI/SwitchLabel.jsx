import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { actions } from "../store/controllerSlice";

export default function SwitchLabel() {
  const dispatch = useDispatch();

  const toggleAddMarkerHandler = (e) =>
    dispatch(actions.toggleAddMarker(e.target.checked));
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
      label={addMarkerIsActive ? `Add marker activated` : `Add marker`}
    />
  );
}
