import React, { Fragment } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Map from "./components/map-components/Map";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/game/Game";

const App = () => {
  const a = useSelector((state) => state.form.placesData);
  console.log(a);
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
