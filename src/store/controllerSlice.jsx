import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleBtnIsPressed: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.toggleBtnIsPressed = !state.toggleBtnIsPressed;
    },
  },
});

export const actions = controllerSlice.actions;

export default controllerSlice.reducer;
