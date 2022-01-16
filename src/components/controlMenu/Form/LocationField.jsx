import React from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { Typography } from "@mui/material";

import styles from "./LocationField.module.css";
import { useSelector } from "react-redux";

import { DecimalConverter } from "migratory-js";

const LocationField = () => {
  const [lat, lng] = useSelector((state) => state.map.currentLocation);
  const decimalConverter = new DecimalConverter(
    +lat.toFixed(2),
    +lng.toFixed(2)
  );
  const finalLat = decimalConverter.toDms().latitude.toString();
  const finalLng = decimalConverter.toDms().longitude.toString();

  return (
    <div className={styles.container}>
      <MyLocationIcon fontSize="small" color="secondary" />
      <Typography fontSize="small" className={styles.typo}>
        {`${finalLat} ${finalLng}`}
      </Typography>
    </div>
  );
};

export default LocationField;
