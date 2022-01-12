import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controllerIsShown: true,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.controllerIsShown = !state.controllerIsShown;
    },
  },
});

export const actions = controllerSlice.actions;

export default controllerSlice.reducer;
