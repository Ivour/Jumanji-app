import { createSlice } from "@reduxjs/toolkit";
import { sampleSize } from "lodash";

const initialState = {
  randomPlaces: [],
  checkboxIsChecked: false,
  placesToShow: 3,
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
        const shuffled = sampleSize(amount.payload, state.placesToShow);
        state.randomPlaces = shuffled;
      }
    },
    addOnePlace(state, amount) {
      const idOfRandomPlaces = state.randomPlaces.map((obj) => obj.id);
      const filteredPlaces = amount.payload.filter(
        (obj) => !idOfRandomPlaces.includes(obj.id)
      );
      const randomFromFiltered = sampleSize(filteredPlaces, 1);

      const randomPlacesClone = [...state.randomPlaces, ...randomFromFiltered];
      state.randomPlaces = randomPlacesClone;
    },
    setPlacesToShow(state, amount) {
      state.placesToShow = amount.payload;
    },
    setCheckboxIsChecked(state, amount) {
      state.checkboxIsChecked = amount.payload;
    },

    setGameIsLoading(state, amount) {
      state.gameIsLoading = amount.payload;
    },
    setGameIsLoaded(state) {
      state.gameIsLoading = false;
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
  setPlacesToShow,
} = gameSlice.actions;

export default gameSlice.reducer;
