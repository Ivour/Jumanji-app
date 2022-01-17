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
    deleteCurrentLocation: (state) => {
      state.currentLocation = "";
    },
  },
});

export const { getCurrentLocation, deleteCurrentLocation } = mapSlice.actions;

export default mapSlice.reducer;
