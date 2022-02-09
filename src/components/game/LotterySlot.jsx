import React, { useEffect } from "react";
import styles from "./LotterySlot.module.css";
import { Button } from "@mui/material";
import ListItem from "../controlMenu/list/ListItem";
import { useDispatch, useSelector } from "react-redux";

import { addOnePlace, setGameIsLoaded } from "../../store/gameSlice";
import BeginGame from "./BeginGame";

const LotterySlot = () => {
  const gameIsLoading = useSelector((state) => state.game.gameIsLoading);
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);
  const randomPlaces = useSelector((state) => state.game.randomPlaces);
  const placesData = useSelector((state) => state.form.placesData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (gameIsLoading) {
      console.log("effect", gameIsLoading);
      setTimeout(() => {
        dispatch(setGameIsLoaded());
      }, 1000);
    }
  }, [dispatch, gameIsLoading]);

  const addOnePlaceHandler = () => {
    dispatch(addOnePlace(placesData));
  };

  // const IvoOne = IvoPlaces[Math.floor(Math.random() * 10)];
  return (
    <div className={styles.container}>
      {!gameIsLoaded && <BeginGame />}

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
          sx={{ borderRadius: "1rem", margin: "1em" }}
        >
          Pick one more place
        </Button>
      )}
    </div>
  );
};

export default LotterySlot;
