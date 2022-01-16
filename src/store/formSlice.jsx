import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeInput: "",
  descriptionInput: "",
  radioBtnInput: "",
  formIsVisible: false,
  spinnerIsLoading: false,
  placesData: [],
};

const formSlice = createSlice({
  name: "formSlice",
  initialState,
  reducers: {
    showForm: (state) => {
      state.formIsVisible = true;
    },
    showSpinner: (state) => {
      state.spinnerIsLoading = true;
    },
    hideSpinner: (state) => {
      state.spinnerIsLoading = false;
    },
    updatePlacesData: (state, amount) => {
      state.placesData = amount.payload;
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
  },
});

export const {
  showForm,
  showSpinner,
  addPlace,
  setPlaceInput,
  setDescriptionInput,
  resetForm,
  hideSpinner,
  updatePlacesData,
} = formSlice.actions;

export default formSlice.reducer;
