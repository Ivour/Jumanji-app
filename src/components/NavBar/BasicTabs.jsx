import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./BasicTabs.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { cancelForm } from "../../store/formSlice";
import {
  disactivateAddMarkerBtn,
  disactivateDeleteBtn,
} from "../../store/controllerSlice";

const BasicTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(location.pathname.slice(1));

  const handleChange = (e, newValue) => {
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
            dispatch(cancelForm());
            dispatch(disactivateAddMarkerBtn());
            dispatch(disactivateDeleteBtn());
            navigate("map");
          }}
        />
        <Tab
          value="game"
          to="map"
          label="Game"
          className={styles.link}
          onClick={() => {
            navigate("game");
            dispatch(disactivateAddMarkerBtn());
            dispatch(disactivateDeleteBtn());
          }}
        />
      </Tabs>
    </Box>
  );
};

export default BasicTabs;

//<Tab label={<span style={{ color: "black" }}>Game</span>} />
