import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import { Typography, Button } from "@mui/material";
import { greenMarker, redMarker } from "../../helpers/markerColors";
import { removePlace } from "../../store/formActions";
import { hideForm } from "../../store/formSlice";

const MarkersAndPopups = () => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.form.placesData);
  const deleteSwitchIsActive = useSelector(
    (state) => state.controller.deleteSwitchIsActive
  );
  const currentLocation = useSelector((state) => state.form.currentLocation);

  const deleteHandler = (e) => {
    dispatch(hideForm());

    dispatch(removePlace(e.target.id)); // using action creator thunk
  };

  return (
    <Fragment>
      {currentLocation ? (
        <Marker icon={redMarker} position={currentLocation} />
      ) : null}
      {places.map((placeObj) => (
        <Marker
          position={[placeObj.location[0], placeObj.location[1]]}
          key={placeObj.id}
          icon={greenMarker}
        >
          {deleteSwitchIsActive ? (
            <Popup>
              <Typography color="error">Are you sure?</Typography>
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={deleteHandler}
                id={placeObj.id}
                sx={{ margin: "auto" }}
              >
                Delete
              </Button>
            </Popup>
          ) : (
            <Popup>
              <Typography variant="button">{placeObj.placeName}</Typography>
              <Typography>{placeObj.description}</Typography>
            </Popup>
          )}
        </Marker>
      ))}
      ;
    </Fragment>
  );
};

export default MarkersAndPopups;
