import React from "react";
import AddForm from "./AddForm";

import styles from "./Controller.module.css";

const Controller = () => {
  return (
    <div className={styles.container}>
      <h1>MAP CONTROLLER</h1>
      <AddForm />
    </div>
  );
};

export default Controller;
