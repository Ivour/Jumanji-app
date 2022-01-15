import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import styles from "./LocationField.module.css";

const LocationField = () => {
  return (
    <div className={styles.container}>
      <MyLocationIcon fontSize="small" />
    </div>
  );
};

export default LocationField;
