import React from "react";
import { Typography } from "@mui/material";
import styles from "./ListItems.module.css";

const ListItems = (props) => {
  return (
    <div className={styles.container} onClick={() => props.onClick()}>
      {" "}
      {
        //not working! cannot use map here..
      }
      <Typography variant="subtitle2">{props.placeName} </Typography>
      <Typography variant="body2">{props.description}</Typography>
      <Typography variant="body2">useformat: {props.location}</Typography>
      <Typography variant="body2">User: {props.user}</Typography>
    </div>
  );
};

export default ListItems;
