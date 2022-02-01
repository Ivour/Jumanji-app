import React, { Fragment } from "react";
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
    <Fragment>
      <Typography variant="h4">Let's play!</Typography>

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
    </Fragment>
  );
};

export default BeginGame;
