import React from "react";
import LotterySlot from "./LotterySlot";
import MapGame from "./MapGame";
import styles from "./Game.module.css";
import { useSelector } from "react-redux";

const Game = () => {
  const gameIsLoaded = useSelector((state) => state.game.gameIsLoaded);
  return (
    <div className={styles.container}>
      {gameIsLoaded && <MapGame />}
      <LotterySlot />
    </div>
  );
};

export default Game;
