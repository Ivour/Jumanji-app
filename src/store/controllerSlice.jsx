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
    },
    hideList: (state) => {
      state.listIsVisible = false;
    },

    toggleAddMarker: (state, amount) => {
      if (state.deleteSwitchIsActive) return;
      state.addMarkerSwitchIsActive = amount.payload || false;
    },
    toggleDeleteSwitch: (state, amount) => {
      if (state.addMarkerSwitchIsActive) return;
      state.deleteSwitchIsActive = amount.payload || false;
    },
  },
});

export const { toggleAddMarker, toggleDeleteSwitch, showList, hideList } =
  controllerSlice.actions;

export default controllerSlice.reducer;
