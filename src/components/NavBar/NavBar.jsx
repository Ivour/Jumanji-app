import React from "react";
import LandscapeIcon from "@mui/icons-material/Landscape";
import AlarmIcon from "@mui/icons-material/Alarm";
import styles from "./NavBar.module.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <LandscapeIcon className={styles.a} fontSize="large" color="success" />
        <Typography variant="h6">Jumanji App</Typography>
      </div>

      <div>
        <Button
          variant={isClicked ? "outlined" : "contained"}
          color="success"
          onClick={toggleHandler}
        >
          Toggle List
        </Button>
        <Button variant="contained" color="success">
          Toggle List
        </Button>
        <Button variant="contained" color="success">
          Toggle List
        </Button>
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          href="https://www.seznam.cz"
        >
          <AlarmIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default NavBar;
