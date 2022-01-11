import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./BasicTabs.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function BasicTabs() {
  const location = useLocation();
  console.log(location.pathname);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{ style: { background: "green" } }}
      >
        <Tab
          label="Map"
          to="/map"
          LinkComponent={Link}
          className={styles.link}
        />
        <Tab
          label="Game"
          to="/game"
          LinkComponent={Link}
          className={styles.link}
        />
      </Tabs>
    </Box>
  );
}

//<Tab label={<span style={{ color: "black" }}>Game</span>} />
