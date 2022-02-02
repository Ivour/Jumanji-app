import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addMarkerSwitchIsActive: false,
  deleteSwitchIsActive: false,
  listIsVisible: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
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
