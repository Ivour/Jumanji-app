import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";

import Map from "./components/map-components/Map";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/game/Game";

import { updatePlacesData } from "./store/formSlice";
import { URL_FIREBASE } from "./helpers/constants";
import useHttp from "./hooks/useHttp";

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
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="map" />} />
        <Route path="map" element={<Map />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<p>404...nothing found</p>} />
      </Routes>
    </Fragment>
  );
};

export default App;
