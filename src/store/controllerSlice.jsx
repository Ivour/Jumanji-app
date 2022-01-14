import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleBtnIsActive: true,
  addMarkerBtnIsActive: false,
  formIsVisible: false,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    toggleController: (state, amount) => {
      state.toggleBtnIsActive = !state.toggleBtnIsActive;
    },

    activateToggleBtn: (state) => {
      state.toggleBtnIsActive = true;
    },

    toggleAddMarker: (state) => {
      state.addMarkerBtnIsActive = !state.addMarkerBtnIsActive;
    },

    disactivateAddMarkerBtn: (state) => {
      state.addMarkerBtnIsActive = false;
    },
    showForm: (state) => {
      state.formIsVisible = true;
    },
  },
});

export const actions = controllerSlice.actions;

export default controllerSlice.reducer;
