import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controllerBtnIsActive: false,
  addMarkerSwitchIsActive: false,
  deleteSwitchIsActive: false,
  listIsVisible: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      if (amount.payload === "hide") state.controllerBtnIsActive = true; // tohle je obrovskej bordel, sprav to!
      if (!state.controllerBtnIsActive) state.listIsVisible = false;

      state.controllerBtnIsActive = !state.controllerBtnIsActive;
    },

    activateControllerBtn: (state) => {
      state.controllerBtnIsActive = true;
    },

    showList: (state) => {
      state.listIsVisible = true;
      state.controllerBtnIsActive = false;
    },
    hideList: (state) => {
      state.listIsVisible = false;
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
  showList,
  hideList,
} = controllerSlice.actions;

export default controllerSlice.reducer;
