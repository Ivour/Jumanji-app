import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

import styles from "./BasicTabs.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { hideForm } from "../../store/formSlice";
import { useDispatch } from "react-redux";
import { cancelForm, deleteCurrentLocation } from "../../store/formSlice";

const pathToIndex = {
  map: 0,
  game: 1,
};

const BasicTabs = () => {
  const location = useLocation();

  const dispatch = useDispatch();
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
          onClick={() => {
            dispatch(hideForm());
            dispatch(cancelForm());
            dispatch(deleteCurrentLocation());
          }}
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
