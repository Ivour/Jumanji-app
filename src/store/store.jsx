import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";
import listReducer from "./listSlice";

const store = configureStore({
  reducer: {
    controller: controllerReducer,
    form: formReducer,
    list: listReducer,
  },
});

export default store;
