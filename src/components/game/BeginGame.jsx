import React from "react";
import { useSelector } from "react-redux";
import { Typography, Button } from "@mui/material";
import Selector from "./Selector";
import GameCheckbox from "./GameCheckbox";
import { useDispatch } from "react-redux";
import {
  setCheckboxIsChecked,
  setGameIsLoading,
  updateRandomPlaces,
  setPlacesToShow,
} from "../../store/gameSlice";
import styles from "./BeginGame.module.css";

const BeginGame = () => {
  const placesData = useSelector((state) => state.form.placesData);
  const checkboxIsChecked = useSelector(
    (state) => state.game.checkboxIsChecked
  );

  const dispatch = useDispatch();

  const getSelectorValueHandler = (val) => {
    dispatch(setPlacesToShow(val));
  };

  const getCheckStateHandler = (e) => {
    dispatch(setCheckboxIsChecked(e));
  };
  const choosePlaceHandler = () => {
    dispatch(updateRandomPlaces(placesData));
    dispatch(setGameIsLoading(true));
  };
  return (
    <div className={styles["choose-form"]}>
      <Typography variant="h4">LET THE GAME BEGIN</Typography>

      <GameCheckbox onGetCheckState={getCheckStateHandler} />

      {!checkboxIsChecked && (
        <Selector
          onGetValue={getSelectorValueHandler}
          isChecked={checkboxIsChecked}
        />
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={choosePlaceHandler}
      >
        Choose random places
      </Button>
    </div>
  );
};

export default BeginGame;
