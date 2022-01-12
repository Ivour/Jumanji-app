import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./BasicTabs.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const pathToIndex = {
  map: 0,
  game: 1,
};

const BasicTabs = () => {
  const location = useLocation();

  const locationIndex = pathToIndex[location.pathname.slice(1)] || 0;

  const [selectedTab, setSelectedTab] = useState(locationIndex);

  if (selectedTab !== locationIndex) setSelectedTab(locationIndex);

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
};

export default BasicTabs;

//<Tab label={<span style={{ color: "black" }}>Game</span>} />
