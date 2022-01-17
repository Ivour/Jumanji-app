import { useEffect, Fragment } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";

import AddMarkerOnClick from "./AddMarkerOnClick";
import styles from "./Map.module.css";
import AutoZoom from "./AutoZoom";

import Controller from "../controlMenu/Controller";
import { Typography } from "@mui/material";

import { updatePlacesData } from "../../store/formSlice";

import customMarker from "../../UI/customMarker";

/* function MyComponent() {
  const map = useMapEvent("click", (e) => {
    console.log(e);
  });
  return null;
} */
let isInitial = true;

function Map() {
  /* const [position, setPosition] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); */
  const dispatch = useDispatch();

  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );

  const places = useSelector((state) => state.form.placesData);

  useEffect(() => {
    fetch(
      "https://jumanjiapp-c982f-default-rtdb.europe-west1.firebasedatabase.app/test.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const a = [];
        for (const key in data) {
          a.push({ ...data[key], id: key });
        }
        dispatch(updatePlacesData(a));
      });
    isInitial = false;
  }, [dispatch]);

  /* useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }); */

  /*  const getPositionHandler = (objPos) => {
    setPosition((prev) => [...prev, objPos]);
  };
 */
  return (
    <Fragment>
      <div className={styles.container}>
        <MapContainer
          className={styles.mapContainer}
          center={[49.75287993415023, 15.435791015625002]}
          zoom={isInitial ? 5 : 8}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=05d9beab414a4075a9a29990cc4e22bc"
            attribution='&copy; <a href="https://www.thunderforest.com">Thunderforest</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* <Marker position={[49.194011782178066, 16.60989809635794]}>
            <Popup>
              <div className={styles.popup}>
                <Typography variant="button" fontSize="small">
                  BRNO
                </Typography>
              </div>
            </Popup>
          </Marker> */}
          {places.map((placeObj) => (
            <Marker
              position={[placeObj.location[0], placeObj.location[1]]}
              key={placeObj.id}
              icon={customMarker}
            >
              <Popup>
                <Typography variant="button">{placeObj.placeName}</Typography>
                <Typography>{placeObj.description}</Typography>
              </Popup>
            </Marker>
          ))}
          {isInitial && <AutoZoom />}
          <AddMarkerOnClick />
        </MapContainer>
        {controllerBtnIsActive && <Controller />}
      </div>
    </Fragment>
  );
}

export default Map;

/* <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
      </Popup> 
       </Marker>*/
