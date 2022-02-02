import React from "react";
import { Typography } from "@mui/material";

const NavInfo = ({ isHovered }) => {
  if (isHovered)
    return (
      <Typography fontSize="small" color="error">
        warning: if you click the chosen places will be gone...
      </Typography>
    );

  return <div>text</div>;
};

export default NavInfo;
