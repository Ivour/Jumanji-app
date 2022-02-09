import React from "react";
import styles from "./NavBar.module.css";
import Typography from "@mui/material/Typography";
import LandscapeIcon from "@mui/icons-material/Landscape";
import NavControls from "./NavControls";
import BasicTabs from "./BasicTabs";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const urlLocation = useLocation();

  const refreshPageHandler = () => {
    window.location.replace(window.location.origin);
  };

  const pathIsMap = urlLocation.pathname === "/map";

  return (
    <nav className={styles.nav}>
      <div className={styles["nav__logo-container"]}>
        <LandscapeIcon
          fontSize="large"
          color="success"
          onClick={refreshPageHandler}
          className={styles["nav__logo"]}
        />
        <Typography
          variant="h6"
          onClick={refreshPageHandler}
          className={styles["nav__logo-text"]}
        >
          Jumanji App
        </Typography>

        <BasicTabs />
      </div>

      {pathIsMap && <NavControls />}
    </nav>
  );
};

export default NavBar;
