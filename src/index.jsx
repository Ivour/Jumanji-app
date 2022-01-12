import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";

import "./index.css";

import App from "./App";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
