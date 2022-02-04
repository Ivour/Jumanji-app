import { useState } from "react";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

import styles from "./BasicTabs.module.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { hideForm } from "../../store/formSlice";
import { useDispatch } from "react-redux";
import { cancelForm, deleteCurrentLocation } from "../../store/formSlice";
import {
  toggleAddMarker,
  toggleDeleteSwitch,
} from "../../store/controllerSlice";

const BasicTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(location.pathname.slice(1));

  // if (selectedTab !== locationIndex) setSelectedTab(locationIndex);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Box>
      <Tabs
        value={selectedTab || "map"}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        className={styles.tabs}
      >
        <Tab
          value="map"
          to="game"
          label="Map"
          className={styles.link}
          onClick={() => {
            navigate("map");
            dispatch(hideForm());
            dispatch(cancelForm());
            dispatch(deleteCurrentLocation());
          }}
        />
        <Tab
          value="game"
          to="map"
          label="Game"
          className={styles.link}
          onClick={() => {
            navigate("game");
            dispatch(toggleAddMarker(false));
            dispatch(toggleDeleteSwitch(false));
          }}
        />
      </Tabs>
    </Box>
  );
};

export default BasicTabs;

//<Tab label={<span style={{ color: "black" }}>Game</span>} />
