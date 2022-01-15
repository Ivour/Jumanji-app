import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Typography } from "@mui/material";

import styles from "./LocationField.module.css";

const LocationField = () => {
  return (
    <div className={styles.container}>
      <MyLocationIcon fontSize="small" color="secondary" />
      <Typography fontSize="small" className={styles.typo}>
        41°24'12.2"N 2°10'26.5"E
      </Typography>
    </div>
  );
};

export default LocationField;
