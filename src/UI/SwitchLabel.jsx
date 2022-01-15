import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { actions } from "../store/controllerSlice";

export default function SwitchLabel() {
  const dispatch = useDispatch();

  const activateAddMarkerHandler = () => dispatch(actions.toggleAddMarker());
  const addMarkerIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
  );

  return (
    <FormControlLabel
      control={<Switch color="secondary" onChange={activateAddMarkerHandler} />}
      label={addMarkerIsActive ? "activated" : "add marker"}
    />
  );
}
