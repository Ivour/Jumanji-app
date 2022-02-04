import React, { useEffect, lazy, Suspense } from "react";

import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { updatePlacesData } from "./store/formSlice";
import { URL_FIREBASE } from "./helpers/constants";
import useHttp from "./hooks/useHttp";
import styles from "./App.module.css";
import LoadingSpinner from "./components/game/LoadingSpinner";
const Game = lazy(() => import("./components/game/Game"));
const Map = lazy(() => import("./components/map-components/Map"));
const NavBar = lazy(() => import("./components/NavBar/NavBar"));

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
      <Suspense fallback={<LoadingSpinner appIsLoading={true} />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="map" />} />
          <Route path="map" element={<Map />} />
          <Route path="game" element={<Game />} />
          <Route path="*" element={<p>404...nothing found</p>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
