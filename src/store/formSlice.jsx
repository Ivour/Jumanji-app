import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formIsVisible: true,
  spinnerIsLoading: false,
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
  },
});

export const { showForm, showSpinner } = formSlice.actions;

export default formSlice.reducer;
