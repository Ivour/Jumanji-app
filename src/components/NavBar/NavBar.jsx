import React from "react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className="logo">Jumanji app + logo</div>
      <ul>
        <li>map</li>
        <li>game</li>
      </ul>
    </nav>
  );
};

export default NavBar;
