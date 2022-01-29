import React from "react";
import LotterySlot from "./LotterySlot";
import MapGame from "./MapGame";
import styles from "./Game.module.css";

const Game = () => {
  return (
    <div className={styles.container}>
      <MapGame />
      <LotterySlot />
    </div>
  );
};

export default Game;
