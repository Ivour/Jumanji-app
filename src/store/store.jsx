import { configureStore } from "@reduxjs/toolkit";
import controllerReducer from "./controllerSlice";

const store = configureStore({ reducer: { controller: controllerReducer } });

export default store;
