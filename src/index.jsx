import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import App from "./App";
import store from "./store/store";
import theme from "./helpers/theme";

ReactDOM.render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </Provider>,
  document.getElementById("root")
);
