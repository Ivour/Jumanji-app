import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleBtnIsActive: true,
  addMarkerBtnIsActive: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.toggleBtnIsActive = !state.toggleBtnIsActive;
    },
    toggleAddMarker: (state) => {
      state.addMarkerBtnIsActive = !state.addMarkerBtnIsActive;
    },
    disactivateAddMarkerBtn: (state) => {
      state.addMarkerBtnIsActive = false;
    },
  },
});

export const actions = controllerSlice.actions;

export default controllerSlice.reducer;
