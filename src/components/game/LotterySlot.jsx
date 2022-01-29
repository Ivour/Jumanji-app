import React, { useState, useEffect } from "react";
import styles from "./LotterySlot.module.css";
import { Typography, Button } from "@mui/material";
import GameCheckbox from "./GameCheckbox";
import ListItem from "../controlMenu/list/ListItem";
import { useSelector } from "react-redux";
import { sampleSize } from "lodash";
import Selector from "./Selector";
import CircularDeterminate from "./CircularDeterminate";

let chooseBtnIsClicked = false;

const LotterySlot = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [randomPlaces, setRandomPlaces] = useState([]);
  const [value, setValue] = useState(3);
  const placesData = useSelector((state) => state.form.placesData);

  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (chooseBtnIsClicked) {
      setIsLoading(true);
      setTimeout(() => {
        setContent(
          randomPlaces.map((obj) => (
            <ListItem
              key={obj.id}
              placeName={obj.placeName}
              description={obj.description}
              location={obj.location}
              user={obj.user}
              isGameList={true}
            />
          ))
        );
        setIsLoading(false);
      }, 5400);
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
      setRandomPlaces(uniquePlaces);
    } else {
      const shuffled = sampleSize(placesData, value);
      setRandomPlaces(shuffled);
    }

    chooseBtnIsClicked = true;
  };

  const getSelectorValueHandler = (val) => {
    setValue(val);
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
      {isLoading && <CircularDeterminate />}
      {content}
      {content && <Button>Pick one more place</Button>}
    </div>
  );
};

export default LotterySlot;
