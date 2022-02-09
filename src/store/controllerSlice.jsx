import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addMarkerSwitchIsActive: false,
  deleteSwitchIsActive: false,
  listIsVisible: false,
  selectedPagination: 1,
};

const controllerSlice = createSlice({
  name: "controller",
  initialState,
  reducers: {
    showList: (state) => {
      state.addMarkerSwitchIsActive = false;
      state.deleteSwitchIsActive = false;
      state.selectedPagination = 1;
      state.listIsVisible = true;
    },
    hideList: (state) => {
      state.listIsVisible = false;
    },
    changeSelectedPagination(state, amount) {
      state.selectedPagination = amount.payload;
    },

    activateAddMarkerBtn: (state) => {
      state.addMarkerSwitchIsActive = true;
      state.deleteSwitchIsActive = false;
      state.listIsVisible = false;
    },
    disactivateAddMarkerBtn: (state) => {
      state.addMarkerSwitchIsActive = false;
    },
    activateDeleteBtn: (state) => {
      state.deleteSwitchIsActive = true;
      state.addMarkerSwitchIsActive = false;
      state.listIsVisible = false;
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
  changeSelectedPagination,
} = controllerSlice.actions;

export default controllerSlice.reducer;
