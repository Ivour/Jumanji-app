import React, { useState, Fragment } from "react";
import styles from "./ListItem.module.css";
import { Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import NotesIcon from "@mui/icons-material/Notes";
import PersonIcon from "@mui/icons-material/Person";
import { randomPlaceIsClicked } from "../../../store/gameSlice";
import { useDispatch } from "react-redux";

const ListItem = (props) => {
  const dispatch = useDispatch();

  const revealPlaceHandler = (e) => {
    dispatch(randomPlaceIsClicked(e.target.id));
  };

  const showBorderOnSelectHandler = (e) => {
    props.onGetLocation(props.location);
  };

  return (
    <div
      className={props.isGameList ? styles["item--game"] : styles["item"]}
      onClick={
        props.isGameList ? revealPlaceHandler : showBorderOnSelectHandler
      }
      id={props.id}
    >
      {!props.isClicked && props.isGameList && <p id={props.id}>Reveal me</p>}
      {props.isClicked && (
        <Fragment>
          <div className={styles["item__first-line"]}>
            <div className={styles["item__containter"]}>
              <PlaceIcon
                fontSize="small"
                color="success"
                className={styles["item__icon"]}
              />
              <Typography variant="subtitle2" className={styles["item__title"]}>
                {props.placeName}
              </Typography>
            </div>
            <div className={styles["item__containter"]}>
              <MyLocationIcon
                fontSize="small"
                color="success"
                className={styles["item__icon"]}
              />
              <Typography variant="body2" className={styles["item__location"]}>
                {props.location.map((x) => x.toFixed(2)).join(" ")}
              </Typography>
            </div>
          </div>
          <div className={styles["item__second-line"]}>
            <div className={styles["item__containter"]}>
              <NotesIcon
                fontSize="small"
                color="success"
                className={styles["item__icon"]}
              />
              <Typography
                variant="body2"
                className={styles["item__description"]}
              >
                {props.description}
              </Typography>
            </div>
            <div className={styles["item__containter"]}>
              <PersonIcon
                fontSize="small"
                color="success"
                className={styles["item__icon"]}
              />
              <Typography variant="body2" className={styles["item__user"]}>
                {props.user}
              </Typography>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ListItem;
