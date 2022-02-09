import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  placeInput: "",
  descriptionInput: "",
  currentLocation: "",
  userInput: "Kubao",
  placeInputHasError: false,
  formIsVisible: false,
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

    updatePlacesData: (state, amount) => {
      const arr = [];
      for (const key in amount.payload) {
        arr.push({ ...amount.payload[key], id: key });
      }
      state.placesData = arr;
    },
    selectUser: (state, amount) => {
      state.userInput = amount.payload;
    },

    addPlace: (state, amount) => {
      const obj = {
        user: state.userInput,
        placeName: state.placeInput,
        description: state.descriptionInput,
        location: state.currentLocation,
        id: amount.payload.name,
      };
      state.placesData.push(obj);
    },
    setPlaceInput: (state, amount) => {
      state.placeInput = amount.payload;
    },
    setDescriptionInput: (state, amount) => {
      state.descriptionInput = amount.payload;
    },
    cancelForm: (state) => {
      state.placeInput = "";
      state.descriptionInput = "";
      state.currentLocation = "";
      state.formIsVisible = false;
    },
    placeInputHasError: (state, amount) => {
      state.placeInputHasError = amount.payload;
    },
    removePlaceAndUpdate: (state, amount) => {
      const updatedPlaces = current(state.placesData).filter(
        (obj) => obj.id !== amount.payload
      );
      state.placesData = updatedPlaces;
      //state.placesData.filter((obj) => obj.id !== placeToRemove);
    },
    getCurrentLocation: (state, amount) => {
      state.currentLocation = amount.payload;
    },
    deleteCurrentLocation: (state) => {
      state.currentLocation = "";
    },
  },
});

export const {
  showForm,
  hideForm,
  addPlace,
  setPlaceInput,
  setDescriptionInput,
  cancelForm,
  updatePlacesData,
  placeInputHasError,
  removePlaceAndUpdate,
  getCurrentLocation,
  deleteCurrentLocation,
  selectUser,
} = formSlice.actions;

export default formSlice.reducer;
