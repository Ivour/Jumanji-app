import React, { Fragment } from "react";

import Map from "./components/mapComps/Map";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Map />
    </Fragment>
  );
};

export default App;
