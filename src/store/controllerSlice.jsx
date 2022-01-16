import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controllerBtnIsActive: true,
  addMarkerSwitchIsActive: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.controllerBtnIsActive = !state.controllerBtnIsActive;
    },

    activateControllerBtn: (state) => {
      state.controllerBtnIsActive = true;
    },

    toggleAddMarker: (state, amount) => {
      state.addMarkerSwitchIsActive = amount.payload;
    },

    disactivateAddMarkerSwitch: (state) => {
      state.addMarkerSwitchIsActive = false;
    },
  },
});

export const {
  toggleController,
  activateControllerBtn,
  toggleAddMarker,
  disactivateAddMarkerSwitch,
} = controllerSlice.actions;

export default controllerSlice.reducer;
