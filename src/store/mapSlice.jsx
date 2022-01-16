import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curentLocation: "",
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    getCurrentLocation: (state, amount) => {
      state.currentLocation = amount.payload;
    },
  },
});

export const { getCurrentLocation } = mapSlice.actions;

export default mapSlice.reducer;
