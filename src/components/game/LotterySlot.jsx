import React, { useState, useEffect } from "react";
import styles from "./LotterySlot.module.css";
import { Typography, Button } from "@mui/material";
import GameCheckbox from "./GameCheckbox";
import ListItem from "../controlMenu/list/ListItem";
import { useDispatch, useSelector } from "react-redux";
import Selector from "./Selector";
import { sampleSize } from "lodash";

import LoadingSpinner from "./LoadingSpinner";
import {
  updateRandomPlaces,
  addOnePlace,
  setGameIsLoading,
  setGameIsLoaded,
  setCheckboxIsChecked,
} from "../../store/gameSlice";

let chooseBtnIsClicked = false;
let isInitial = true;
let content;

const LotterySlot = () => {
  const [value, setValue] = useState(3); // co to kurva je?!
  const placesData = useSelector((state) => state.form.placesData);
  const checkboxIsChecked = useSelector(
    (state) => state.game.checkboxIsChecked
  );

  const gameIsLoading = useSelector((state) => state.game.gameIsLoading);

  const randomPlaces = useSelector((state) => state.game.randomPlaces);

  const dispatch = useDispatch();

  useEffect(() => {
    if (chooseBtnIsClicked && isInitial) {
      dispatch(setGameIsLoading(true));
      setTimeout(() => {
        content = randomPlaces.map((obj) => (
          <ListItem
            key={obj.id}
            id={obj.id}
            placeName={obj.placeName}
            description={obj.description}
            location={obj.location}
            user={obj.user}
            isGameList={true}
          />
        ));
        dispatch(setGameIsLoading(false));
        dispatch(setGameIsLoaded());
        isInitial = false;
      }, 1000);
    }
  }, [randomPlaces, dispatch]);

  const getCheckStateHandler = (e) => {
    dispatch(setCheckboxIsChecked(e));
  };
  const choosePlaceHandler = () => {
    dispatch(updateRandomPlaces(placesData));

    chooseBtnIsClicked = true;
  };

  const getSelectorValueHandler = (val) => {
    setValue(val);
  };

  const addOnePlaceHandler = () => {
    const idOfRandomPlaces = randomPlaces.map((obj) => obj.id);
    const filteredPlaces = placesData.filter(
      (obj) => !idOfRandomPlaces.includes(obj.id)
    );
    const randomFromFiltered = sampleSize(filteredPlaces, 1);

    const randomPlacesClone = [...randomPlaces, ...randomFromFiltered];
    content = randomPlacesClone.map((obj) => (
      <ListItem
        key={obj.id}
        id={obj.id}
        placeName={obj.placeName}
        description={obj.description}
        location={obj.location}
        user={obj.user}
        isGameList={true}
      />
    ));
    dispatch(addOnePlace(randomFromFiltered));
  };

  // const IvoOne = IvoPlaces[Math.floor(Math.random() * 10)];
  return (
    <div className={styles.container}>
      {!chooseBtnIsClicked && <Typography variant="h4">Let's play!</Typography>}
      {!chooseBtnIsClicked && (
        <GameCheckbox onGetCheckState={getCheckStateHandler} />
      )}
      {!checkboxIsChecked && !chooseBtnIsClicked && (
        <Selector
          onGetValue={getSelectorValueHandler}
          isChecked={checkboxIsChecked}
        />
      )}
      {!chooseBtnIsClicked && (
        <Button
          variant="contained"
          color="secondary"
          onClick={choosePlaceHandler}
        >
          Choose random places
        </Button>
      )}
      {gameIsLoading && <LoadingSpinner />}
      {content}
      {content && randomPlaces.length < 5 && (
        <Button onClick={addOnePlaceHandler}>Pick one more place</Button>
      )}
    </div>
  );
};

export default LotterySlot;
