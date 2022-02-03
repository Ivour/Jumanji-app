import React, { useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Map from "./components/map-components/Map";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/game/Game";

import { updatePlacesData } from "./store/formSlice";
import { URL_FIREBASE } from "./helpers/constants";
import useHttp from "./hooks/useHttp";
import styles from "./App.module.css";

let isInitial = true;

const App = () => {
  const sendRequest = useHttp();

  useEffect(() => {
    if (isInitial) {
      sendRequest({ url: URL_FIREBASE }, updatePlacesData);
    }
    isInitial = false;
  }, [sendRequest]);
  return (
    <div className={styles.app}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="map" />} />
        <Route path="map" element={<Map />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<p>404...nothing found</p>} />
      </Routes>
    </div>
  );
};

export default App;
