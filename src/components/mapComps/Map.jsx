import { useState, useEffect, Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import AddMarkerOnClick from "./AddMarkerOnClick";
import styles from "./Map.module.css";
import AutoZoom from "./AutoZoom";

/* function MyComponent() {
  const map = useMapEvent("click", (e) => {
    console.log(e);
  });
  return null;
} */

function Map() {
  const [position, setPosition] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  });

  const getPositionHandler = (objPos) => {
    setPosition((prev) => [...prev, objPos]);
  };

  return (
    <Fragment>
      <MapContainer
        className={styles.mapContainer}
        center={[49.194011782178066, 16.60989809635794]}
        zoom={5}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=05d9beab414a4075a9a29990cc4e22bc"
          attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {position.map((latLng) => (
          <Marker position={[latLng.lat, latLng.lng]}>
            <Popup>lklkl</Popup>
          </Marker>
        ))}
        <AutoZoom isLoaded={isLoaded} />
        <AddMarkerOnClick onGetPosition={getPositionHandler} />
      </MapContainer>
    </Fragment>
  );
}

export default Map;

/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> 
       </Marker>*/
