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

    activateAddMarkerBtn: (state) => {
      if (state.deleteSwitchIsActive) return;
      state.addMarkerSwitchIsActive = true;
    },
    disactivateAddMarkerBtn: (state) => {
      state.addMarkerSwitchIsActive = false;
    },
    activateDeleteBtn: (state) => {
      if (state.addMarkerSwitchIsActive) return;
      state.deleteSwitchIsActive = true;
    },
    disactivateDeleteBtn: (state) => {
      state.deleteSwitchIsActive = false;
    },
  },
});

export const {
  activateAddMarkerBtn,
  disactivateAddMarkerBtn,
  activateDeleteBtn,
  disactivateDeleteBtn,
  showList,
  hideList,
} = controllerSlice.actions;

export default controllerSlice.reducer;
