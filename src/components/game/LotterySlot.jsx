import React, { useState, useEffect } from "react";
import styles from "./LotterySlot.module.css";
import { Typography, Button } from "@mui/material";
import GameCheckbox from "./GameCheckbox";
import ListItem from "../controlMenu/list/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { sampleSize } from "lodash";
import Selector from "./Selector";
import LoadingSpinner from "./LoadingSpinner";
import { updateRandomPlaces, addOnePlace } from "../../store/gameSlice";

let chooseBtnIsClicked = false;
let isInitial = true;
let content;

const LotterySlot = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [value, setValue] = useState(3); // co to kurva je?!
  const placesData = useSelector((state) => state.form.placesData);

  const [isLoading, setIsLoading] = useState(false);

  const randomPlaces = useSelector((state) => state.game.randomPlaces);

  const dispatch = useDispatch();
  console.log("renderCycle");

  useEffect(() => {
    if (chooseBtnIsClicked && isInitial) {
      setIsLoading(true);
      setTimeout(() => {
        content = randomPlaces.map((obj) => (
          <ListItem
            key={obj.id}
            placeName={obj.placeName}
            description={obj.description}
            location={obj.location}
            user={obj.user}
            isGameList={true}
          />
        ));
        setIsLoading(false);
        isInitial = false;
      }, 2400);
    }
  }, [randomPlaces]);

  const getCheckStateHandler = (e) => {
    setIsChecked(e);
  };
  const choosePlaceHandler = () => {
    const users = [...new Set(placesData.map((obj) => obj.user))];
    const usersPlaces = users.map((user) =>
      placesData.filter((obj) => obj.user === user)
    );
    if (isChecked) {
      const uniquePlaces = usersPlaces.map(
        (arr) => arr[Math.floor(Math.random() * arr.length)]
      );
      dispatch(updateRandomPlaces(uniquePlaces));
    } else {
      const shuffled = sampleSize(placesData, value);
      dispatch(updateRandomPlaces(shuffled));
    }

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
      {!isChecked && !chooseBtnIsClicked && (
        <Selector onGetValue={getSelectorValueHandler} isChecked={isChecked} />
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
      {isLoading && <LoadingSpinner />}
      {content}
      {content && randomPlaces.length < 5 && (
        <Button onClick={addOnePlaceHandler}>Pick one more place</Button>
      )}
    </div>
  );
};

export default LotterySlot;
