import React, { Fragment } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Map from "./components/mapComps/Map";
import NavBar from "./components/NavBar/NavBar";
import Game from "./components/game/Game";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/map" />} />
        <Route path="map" element={<Map />} />
        <Route path="game" element={<Game />} />
        <Route path="*" element={<p>nothing found</p>} />
      </Routes>
    </Fragment>
  );
};

export default App;
