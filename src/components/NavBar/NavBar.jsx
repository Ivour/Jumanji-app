import React from "react";
import styles from "./NavBar.module.css";
import Typography from "@mui/material/Typography";
import LandscapeIcon from "@mui/icons-material/Landscape";
import { useSelector, useDispatch } from "react-redux";
import {
  disactivateAddMarkerBtn,
  disactivateDeleteBtn,
} from "../../store/controllerSlice";
import NavControls from "./NavControls";
import BasicTabs from "./BasicTabs";

const NavBar = () => {
  const dispatch = useDispatch();

  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);

  const refreshPageHandler = () => {
    window.location.replace(window.location.origin);
  };

  if (gameIsLoaded) {
    dispatch(disactivateDeleteBtn());
    dispatch(disactivateAddMarkerBtn());
  }

  return (
    <nav className={styles.nav}>
      <div className={styles["nav__logo-container"]}>
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

        <BasicTabs />
      </div>

      <NavControls />
    </nav>
  );
};

export default NavBar;
