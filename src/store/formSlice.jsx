import { createSlice } from "@reduxjs/toolkit";

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
    placeInputHasError: (state, amount) => {
      state.placeInputHasError = amount.payload;
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
  placeInputHasError
} = formSlice.actions;

export default formSlice.reducer;
