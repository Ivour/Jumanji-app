import { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

import AddMarkerOnClick from "./AddMarkerOnClick";
import styles from "./Map.module.css";
import AutoZoom from "./AutoZoom";

import AddForm from "../form/AddForm";
import MarkersAndPopups from "./MarkersAndPopups";
import List from "../list/List";
import {
  INIT_MAP_CENTER_POS,
  INIT_ZOOM,
  NORMAL_ZOOM,
} from "../../helpers/constants";

let isInitial = true;

function Map() {
  useEffect(() => {
    isInitial = false;
  }, []);

  const listIsVisible = useSelector((state) => state.controller.listIsVisible);

  const formIsVisible = useSelector((state) => state.form.formIsVisible);

  return (
    <div className={styles.container}>
      <MapContainer
        className={styles["container__map"]}
        center={INIT_MAP_CENTER_POS}
        zoom={isInitial ? INIT_ZOOM : NORMAL_ZOOM}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        tap={false}
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

      {formIsVisible && <AddForm />}
    </div>
  );
}

export default Map;
