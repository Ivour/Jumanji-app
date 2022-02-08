import React from "react";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const NavInfo = ({ isHovered }) => {
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );
  console.log(isHovered, "ishovered");

  return (
    <Typography
      fontSize="small"
      color={deleteSwitchIsActive || isHovered ? "error" : null}
    >
      {deleteSwitchIsActive && "To delete a marker - click one..."}
      {addMarkerSwitchIsActive && "Click on a map to add a marker"}
      {isHovered && "Warning: Clicking here will reset the game!"}
    </Typography>
  );
};

export default NavInfo;
