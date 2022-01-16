import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  controllerBtnIsActive: true,
  addMarkerSwitchIsActive: false,
  formIsVisible: true,
  spinnerIsLoading: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.controllerBtnIsActive = !state.controllerBtnIsActive;
    },

    activateControllerBtn: (state) => {
      state.toggleBtnIsActive = true;
    },

    toggleAddMarker: (state, amount) => {
      state.addMarkerSwitchIsActive = amount.payload;
    },

    disactivateAddMarkerSwitch: (state) => {
      state.addMarkerSwitchIsActive = false;
    },
    showForm: (state) => {
      state.formIsVisible = true;
    },
    showSpinner: (state) => {
      state.spinnerIsLoading = true;
    },
  },
});

export const actions = controllerSlice.actions;

export default controllerSlice.reducer;
