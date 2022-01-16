import { useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  disactivateAddMarkerSwitch,
  activateControllerBtn,
} from "../../store/controllerSlice";
import { showForm } from "../../store/formSlice";
import { getCurrentLocation } from "../../store/mapSlice";

function AddMarkerToClick(props) {
  const dispatch = useDispatch();
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  ); //const [position, setPosition] = useState([]);

  /* const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
    },
  }); */

  useMapEvents({
    click(event) {
      if (addMarkerSwitchIsActive) {
        const { lat, lng } = event.latlng;
        // props.onGetPosition(event.latlng);

        dispatch(getCurrentLocation([lat, lng]));
        dispatch(activateControllerBtn());
        dispatch(disactivateAddMarkerSwitch());
        dispatch(showForm());
      }

      //setPosition((prev) => [...prev, { lat, lng }]);
    },
  });

  /* return position.latitude !== 0 ? (
    <Marker
      position={[position.latitude, position.longitude]}
      interactive={false}
    />
  ) : null; */
  return <></>;
}

export default AddMarkerToClick;
