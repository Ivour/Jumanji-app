import React from "react";
import { useMap } from "react-leaflet";
import { useSelector } from "react-redux";

const ZoomToMarkerOnListClick = () => {
  const map = useMap();
  const location = useSelector((state) => state.game.locationOfClickedListItem);
  console.log(location);
  return <></>;
};

export default ZoomToMarkerOnListClick;
