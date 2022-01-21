import { useEffect, Fragment } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";

import AddMarkerOnClick from "./AddMarkerOnClick";
import styles from "./Map.module.css";
import AutoZoom from "./AutoZoom";

import Controller from "../controlMenu/Controller";

import { updatePlacesData } from "../../store/formSlice";

import MarkersAndPopups from "./MarkersAndPopups";
import List from "../controlMenu/list/List";

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

  const listIsVisible = useSelector((state) => state.controller.listIsVisible);

  const controllerBtnIsActive = useSelector(
    (state) => state.controller.controllerBtnIsActive
  );

  useEffect(() => {
    if (isInitial) {
      fetch(
        "https://jumanjiapp-c982f-default-rtdb.europe-west1.firebasedatabase.app/test.json"
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(updatePlacesData(data));
        });
    }
    isInitial = false;
  }, [dispatch]);

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
