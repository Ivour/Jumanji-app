import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";
import formReducer from "./formSlice";

const store = configureStore({
  reducer: { controller: controllerReducer, form: formReducer },
});

export default store;
