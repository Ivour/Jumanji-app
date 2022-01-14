import { useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/controllerSlice";

function AddMarkerToClick(props) {
  const dispatch = useDispatch();
  const addMarkerBtnIsActive = useSelector(
    (state) => state.controller.addMarkerBtnIsActive
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
      if (addMarkerBtnIsActive) {
        props.onGetPosition(event.latlng);
        dispatch(actions.activateToggleBtn());
        dispatch(actions.disactivateAddMarkerBtn());
        dispatch(actions.showForm());
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
