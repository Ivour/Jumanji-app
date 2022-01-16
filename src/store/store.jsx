import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";
import mapReducer from "./mapSlice";

const store = configureStore({
  reducer: {
    controller: controllerReducer,
    form: formReducer,
    map: mapReducer,
  },
});

export default store;
