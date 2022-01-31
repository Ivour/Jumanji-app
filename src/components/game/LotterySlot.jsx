import React, { useState, useEffect } from "react";
import styles from "./LotterySlot.module.css";
import { Typography, Button } from "@mui/material";
import GameCheckbox from "./GameCheckbox";
import ListItem from "../controlMenu/list/ListItem";
import { useDispatch, useSelector } from "react-redux";
import Selector from "./Selector";

import LoadingSpinner from "./LoadingSpinner";
import {
  updateRandomPlaces,
  addOnePlace,
  setGameIsLoading,
  setGameIsLoaded,
  setCheckboxIsChecked,
  setPlacesToShow,
} from "../../store/gameSlice";

const LotterySlot = () => {
  const gameIsLoading = useSelector((state) => state.game.gameIsLoading);
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);
  const randomPlaces = useSelector((state) => state.game.randomPlaces);
  const placesData = useSelector((state) => state.form.placesData);
  const checkboxIsChecked = useSelector(
    (state) => state.game.checkboxIsChecked
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (gameIsLoading) {
      setTimeout(() => {
        dispatch(setGameIsLoaded());
      }, 1000);
    }
  }, [dispatch, gameIsLoading]);

  const getCheckStateHandler = (e) => {
    dispatch(setCheckboxIsChecked(e));
  };
  const choosePlaceHandler = () => {
    dispatch(updateRandomPlaces(placesData));
    dispatch(setGameIsLoading(true));
  };

  const getSelectorValueHandler = (val) => {
    dispatch(setPlacesToShow(val));
  };

  const addOnePlaceHandler = () => {
    dispatch(addOnePlace(placesData));
  };

  // const IvoOne = IvoPlaces[Math.floor(Math.random() * 10)];
  return (
    <div className={styles.container}>
      {!gameIsLoading && !gameIsLoaded && (
        <Typography variant="h4">Let's play!</Typography>
      )}
      {!gameIsLoading && !gameIsLoaded && (
        <GameCheckbox onGetCheckState={getCheckStateHandler} />
      )}
      {!checkboxIsChecked && !gameIsLoading && !gameIsLoaded && (
        <Selector
          onGetValue={getSelectorValueHandler}
          isChecked={checkboxIsChecked}
        />
      )}
      {!gameIsLoading && !gameIsLoaded && (
        <Button
          variant="contained"
          color="secondary"
          onClick={choosePlaceHandler}
        >
          Choose random places
        </Button>
      )}
      {gameIsLoading && <LoadingSpinner />}
      {gameIsLoaded &&
        randomPlaces.map((obj) => (
          <ListItem
            key={obj.id}
            id={obj.id}
            placeName={obj.placeName}
            description={obj.description}
            location={obj.location}
            user={obj.user}
            isClicked={obj.isClicked}
            isGameList={true}
          />
        ))}
      {gameIsLoaded && randomPlaces.length < 5 && (
        <Button
          onClick={addOnePlaceHandler}
          variant="contained"
          color="secondary"
        >
          Pick one more place
        </Button>
      )}
    </div>
  );
};

export default LotterySlot;
