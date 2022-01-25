import { createSlice, current } from "@reduxjs/toolkit";
import { useCallback } from "react";

const initialState = {
  placeInput: "",
  descriptionInput: "",
  placeInputHasError: false,
  radioBtnInput: "",
  formIsVisible: false,
  spinnerIsLoading: false,
  formIsCanceled: false,
  placesData: [],
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    showForm(state) {
      state.formIsVisible = true;
    },
    hideForm: (state) => {
      state.formIsVisible = false;
    },
    showSpinner: (state) => {
      state.spinnerIsLoading = true;
    },
    hideSpinner: (state) => {
      state.spinnerIsLoading = false;
    },
    updatePlacesData: (state, amount) => {
      const arr = [];
      for (const key in amount.payload) {
        arr.push({ ...amount.payload[key], id: key });
      }
      state.placesData = arr;
    },

    addPlace: (state, amount) => {
      state.placesData.push(amount.payload);
    },
    setPlaceInput: (state, amount) => {
      state.placeInput = amount.payload;
    },
    setDescriptionInput: (state, amount) => {
      state.descriptionInput = amount.payload;
    },
    resetForm: (state) => {
      state.placeInput = "";
      state.descriptionInput = "";
    },
    placeInputHasError: (state, amount) => {
      state.placeInputHasError = amount.payload;
    },
    removePlaceAndUpdate: (state, amount) => {
      const updatedPlaces = current(state.placesData).filter(
        (obj) => obj.id !== amount.payload
      );
      state.placesData = updatedPlaces;
      //state.placesData.filter((obj) => obj.id !== placeToRemove);
    },
  },
});

export const {
  showForm,
  hideForm,
  showSpinner,
  addPlace,
  setPlaceInput,
  setDescriptionInput,
  resetForm,
  hideSpinner,
  updatePlacesData,
  placeInputHasError,
  removePlaceAndUpdate,
} = formSlice.actions;

export default formSlice.reducer;
