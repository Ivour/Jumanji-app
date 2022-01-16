import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    addPlace: (state, amount) => {
      state.placesData.push(amount.payload);
    },
  },
});

export const { showForm, showSpinner, addPlace } = formSlice.actions;

export default formSlice.reducer;
