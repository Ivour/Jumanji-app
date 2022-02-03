import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./NavBar.module.css";

import Typography from "@mui/material/Typography";

import LandscapeIcon from "@mui/icons-material/Landscape";

import { useSelector, useDispatch } from "react-redux";
import {
  toggleAddMarker,
  toggleDeleteSwitch,
} from "../../store/controllerSlice";

import { cancelForm } from "../../store/formSlice";

import NavInfo from "./NavInfo";
import NavControls from "./NavControls";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);

  const refreshPageHandler = () => {
    navigate("/");
    window.location.reload(true);
  };

  if (gameIsLoaded) {
    dispatch(toggleAddMarker(false));
    dispatch(toggleDeleteSwitch(false));
  }

  const mouseOverHandler = (e) => {
    if ((e.target.id === "jumanji" || e.target.id === "logo") && gameIsLoaded)
      setIsHovered(true);
  };
  const mouseLeaveHandler = () => {
    if (gameIsLoaded) setIsHovered(false);
  };
  return (
    <nav className={styles.nav}>
      <div
        className={styles["nav__logo-container"]}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <LandscapeIcon
          fontSize="large"
          color="success"
          onClick={refreshPageHandler}
          className={styles["nav__logo"]}
          id="logo"
        />
        <Typography
          variant="h6"
          onClick={refreshPageHandler}
          className={styles["nav__logo-text"]}
          id="jumanji"
        >
          Jumanji App
        </Typography>
      </div>

      <NavInfo isHovered={isHovered} />

      <NavControls />
    </nav>
  );
};

export default NavBar;
