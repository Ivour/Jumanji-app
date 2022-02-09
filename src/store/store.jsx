import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    controller: controllerReducer,
    form: formReducer,
    game: gameReducer,
  },
});

export default store;
