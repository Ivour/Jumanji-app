import {
  showSpinner,
  addPlace,
  hideForm,
  resetForm,
  hideSpinner,
  removePlaceAndUpdate,
} from "./formSlice";

import {
  disactivateAddMarkerSwitch,
  disactivateDeleteSwitch,
} from "./controllerSlice";

import { deleteCurrentLocation } from "./mapSlice";

export const sendForm = (obj) => {
  return (dispatch) => {
    dispatch(showSpinner());

    fetch(
      "https://jumanjiapp-c982f-default-rtdb.europe-west1.firebasedatabase.app/test.json",
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((data) => {
        dispatch(addPlace({ ...obj, id: data.name }));
        dispatch(disactivateAddMarkerSwitch());
        dispatch(hideForm());
        dispatch(resetForm());
        dispatch(hideSpinner());
        dispatch(deleteCurrentLocation());
      })
      .catch((err) => console.log(err));
  };
};

export const cancelForm = () => {
  return (dispatch) => {
    dispatch(disactivateAddMarkerSwitch());
    dispatch(hideForm());
    dispatch(resetForm());
    dispatch(deleteCurrentLocation());
  };
};

export const removePlace = (id) => {
  return (dispatch) => {
    fetch(
      `https://jumanjiapp-c982f-default-rtdb.europe-west1.firebasedatabase.app/test/${id}.json`,
      {
        method: "DELETE",
      }
    );
    dispatch(removePlaceAndUpdate(id));
    dispatch(disactivateDeleteSwitch());
  };
};
