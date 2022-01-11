import styles from "./Card.modules.css";

import React from "react";

const Card = (props) => {
  return <div className={styles.card}>{props.children}</div>;
};

export default Card;
