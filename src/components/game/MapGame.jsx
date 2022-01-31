import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import styles from "./MapGame.module.css";

import { INIT_MAP_CENTER_POS, NORMAL_ZOOM } from "../../helpers/constants";
import { useSelector } from "react-redux";
import { greenMarker } from "../../helpers/markerColors";

function Map() {
  const randomPlaces = useSelector((state) => state.game.randomPlaces);
  return (
    <div className={styles.container}>
      <MapContainer
        className={styles["container__map"]}
        center={INIT_MAP_CENTER_POS}
        zoom={NORMAL_ZOOM}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=05d9beab414a4075a9a29990cc4e22bc"
          attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {randomPlaces.map((obj) => {
          return obj.isClicked ? (
            <Marker position={obj.location} key={obj.id} icon={greenMarker}>
              <Popup>bang</Popup>
            </Marker>
          ) : null;
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
