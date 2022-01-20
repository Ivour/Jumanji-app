import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controllerBtnIsActive: true,
  addMarkerSwitchIsActive: false,
  deleteSwitchIsActive: false,
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
      if (state.deleteSwitchIsActive) return;
      state.addMarkerSwitchIsActive = amount.payload;
    },

    disactivateAddMarkerSwitch: (state) => {
      state.addMarkerSwitchIsActive = false;
    },
    activateDeleteSwitch: (state) => {
      if (state.addMarkerSwitchIsActive) return;
      state.deleteSwitchIsActive = true;
    },
    disactivateDeleteSwitch: (state) => {
      state.deleteSwitchIsActive = false;
    },
  },
});

export const {
  toggleController,
  activateControllerBtn,
  toggleAddMarker,
  disactivateAddMarkerSwitch,
  activateDeleteSwitch,
  disactivateDeleteSwitch,
} = controllerSlice.actions;

export default controllerSlice.reducer;
