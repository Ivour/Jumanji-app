import { useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { disactivateAddMarkerSwitch ,activateControllerBtn} from "../../store/controllerSlice";
import { showForm } from "../../store/formSlice";

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
      //  const { lat, lng } = event.latlng;
      if (addMarkerSwitchIsActive) {
        props.onGetPosition(event.latlng);
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
