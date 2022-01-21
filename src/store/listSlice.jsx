import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPagination: 1,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeSelectedPagination(state, amount) {
      state.selectedPagination = amount.payload;
    },
  },
});

export const { changeSelectedPagination } = listSlice.actions;

export default listSlice.reducer;
