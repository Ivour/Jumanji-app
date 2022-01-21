import React, { useEffect, useState } from "react";
import styles from "./ListItem.module.css";
import { Typography } from "@mui/material";

const ListItem = (props) => {
  const showBorderOnSelectHandler = () => {
    props.onGetLocation(props.location);
  };

  return (
    <div className={styles.item} onClick={showBorderOnSelectHandler}>
      <div className={styles["item-header"]}>
        <Typography variant="subtitle2">{props.placeName} </Typography>
        <Typography variant="body2">
          {props.location.map((x) => x.toFixed(2)).join(" ")}
        </Typography>
      </div>
      <div className={styles["item-main"]}>
        <Typography variant="body2" className={styles.description}>
          {props.description}
        </Typography>
        <Typography variant="body2" className={styles.userTypo}>
          User: {props.user}
        </Typography>
      </div>
    </div>
  );
};

export default ListItem;
