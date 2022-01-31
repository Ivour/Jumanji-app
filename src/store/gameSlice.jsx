import { createSlice } from "@reduxjs/toolkit";
import { sampleSize } from "lodash";

const initialState = {
  randomPlaces: null,
  checkboxIsChecked: true,
  gameIsLoading: false,
  gameIsLoaded: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateRandomPlaces(state, amount) {
      const users = [...new Set(amount.payload.map((obj) => obj.user))];
      const usersPlaces = users.map((user) =>
        amount.payload.filter((obj) => obj.user === user)
      );
      if (state.checkboxIsChecked) {
        const uniquePlaces = usersPlaces.map(
          (arr) => arr[Math.floor(Math.random() * arr.length)]
        );
        state.randomPlaces = uniquePlaces;
      } else {
        const shuffled = sampleSize(amount.payload, 3);
        state.randomPlaces = shuffled;
      }
    },
    addOnePlace(state, amount) {
      state.randomPlaces.push(...amount.payload);
    },
    setCheckboxIsChecked(state, amount) {
      state.checkboxIsChecked = amount.payload;
    },

    setGameIsLoading(state, amount) {
      state.gameIsLoading = amount.payload;
    },
    setGameIsLoaded(state) {
      state.gameIsLoaded = true;
    },
    randomPlaceIsClicked(state, amount) {
      state.randomPlaces = state.randomPlaces.map((obj) => {
        return obj.id === amount.payload ? { ...obj, isClicked: true } : obj;
      });
    },
  },
});

export const {
  updateRandomPlaces,
  addOnePlace,
  setGameIsLoading,
  setGameIsLoaded,
  randomPlaceIsClicked,
  setCheckboxIsChecked,
} = gameSlice.actions;

export default gameSlice.reducer;
