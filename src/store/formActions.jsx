import { removePlaceAndUpdate } from "./formSlice";

import { disactivateDeleteBtn } from "./controllerSlice";

/* export const sendForm = (obj) => {
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
        dispatch(addPlace(data.name));
        dispatch(disactivateAddMarkerSwitch());
        dispatch(hideForm());
        dispatch(resetForm());
        dispatch(hideSpinner());
        dispatch(deleteCurrentLocation());
      })
      .catch((err) => console.log(err));
  };
};
 */
/* export const cancelForm = () => {
  return (dispatch) => {
    dispatch(disactivateAddMarkerSwitch());
    dispatch(hideForm());
    dispatch(resetForm());
    dispatch(hideSpinner());
    dispatch(deleteCurrentLocation());
  };
}; */

export const removePlace = (id) => {
  return (dispatch) => {
    fetch(
      `https://jumanji-67d52-default-rtdb.europe-west1.firebasedatabase.app/places/${id}.json`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong");
        dispatch(removePlaceAndUpdate(id));
        dispatch(disactivateDeleteBtn());
      })
      .catch((err) => console.error(err));
  };
};
