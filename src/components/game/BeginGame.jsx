import React from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import Selector from "./Selector";
import GameCheckbox from "./GameCheckbox";
import { useDispatch } from "react-redux";
import { setGameIsLoading, updateRandomPlaces } from "../../store/gameSlice";
import styles from "./BeginGame.module.css";
import LoadingSpinner from "./LoadingSpinner";

const BeginGame = () => {
  const dispatch = useDispatch();

  const placesData = useSelector((state) => state.form.placesData);
  const gameIsLoading = useSelector((state) => state.game.gameIsLoading);
  const checkboxIsChecked = useSelector(
    (state) => state.game.checkboxIsChecked
  );

  const choosePlaceHandler = () => {
    dispatch(updateRandomPlaces(placesData));
    dispatch(setGameIsLoading(true));
  };
  if (gameIsLoading) {
    return (
      <div className={styles["choose-form"]}>
        {gameIsLoading && <LoadingSpinner />}
      </div>
    );
  }
  return (
    <div className={styles["choose-form"]}>
      <Typography variant="h4">LET THE GAME BEGIN</Typography>

      <GameCheckbox />

      {!checkboxIsChecked && <Selector isChecked={checkboxIsChecked} />}

      <Button
        variant="contained"
        color="secondary"
        onClick={choosePlaceHandler}
        sx={{ borderRadius: "1rem" }}
      >
        Choose random places
      </Button>
    </div>
  );
};

export default BeginGame;
