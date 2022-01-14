import React from "react";

import Card from "../../UI/Card";

import styles from "./AddForm.module.css";

const AddForm = () => {
  return (
    <div className={styles.container}>
      <Card>
        <form>
          <input type="text" />
          <input type="checkbox" />
        </form>
      </Card>
    </div>
  );
};

export default AddForm;
