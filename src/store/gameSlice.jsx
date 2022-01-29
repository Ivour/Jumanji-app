import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  randomPlaces: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateRandomPlaces(state, amount) {
      state.randomPlaces = amount.payload;
    },
    addOnePlace(state, amount) {
      state.randomPlaces.push(...amount.payload);
    },
  },
});

export const { updateRandomPlaces, addOnePlace } = gameSlice.actions;

export default gameSlice.reducer;
