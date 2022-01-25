import { useEffect, Fragment } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

import AddMarkerOnClick from "./AddMarkerOnClick";
import styles from "./Map.module.css";
import AutoZoom from "./AutoZoom";

import Controller from "../controlMenu/Controller";

import { updatePlacesData } from "../../store/formSlice";

import MarkersAndPopups from "./MarkersAndPopups";
import List from "../controlMenu/list/List";
import {
  INIT_MAP_CENTER_POS,
  INIT_ZOOM,
  NORMAL_ZOOM,
  URL_FIREBASE,
} from "../../helpers/constants";
import Scale from "./Scale";
import useHttp from "../../hooks/useHttp";

let isInitial = true;

function Map() {
  const sendRequest = useHttp();

  const listIsVisible = useSelector((state) => state.controller.listIsVisible);

  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );

  useEffect(() => {
    if (isInitial) {
      sendRequest({ url: URL_FIREBASE }, updatePlacesData);
    }
    isInitial = false;
  }, [sendRequest]);

  return (
    <Fragment>
      <div className={styles.container}>
        <MapContainer
          className={styles["container__map"]}
          center={INIT_MAP_CENTER_POS}
          zoom={isInitial ? INIT_ZOOM : NORMAL_ZOOM}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=05d9beab414a4075a9a29990cc4e22bc"
            attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <MarkersAndPopups />

          {isInitial && <AutoZoom />}
          <AddMarkerOnClick />
          {listIsVisible && <List />}
        </MapContainer>
        {controllerBtnIsActive && <Controller />}
      </div>
    </Fragment>
  );
}

export default Map;
