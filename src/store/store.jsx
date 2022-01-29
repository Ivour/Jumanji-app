import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";
import listReducer from "./listSlice";
import gameReducer from "./gameSlice";

const store = configureStore({
  reducer: {
    controller: controllerReducer,
    form: formReducer,
    list: listReducer,
    game: gameReducer,
  },
});

export default store;
