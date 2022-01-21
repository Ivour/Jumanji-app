import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";
import mapReducer from "./mapSlice";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    controller: controllerReducer,
    form: formReducer,
    map: mapReducer,
    list: listReducer,
  },
});

export default store;
