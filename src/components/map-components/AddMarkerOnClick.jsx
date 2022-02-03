import { useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  disactivateAddMarkerSwitch,
  hideList,
  toggleAddMarker,
} from "../../store/controllerSlice";
import {
  showForm,
  cancelForm,
  getCurrentLocation,
} from "../../store/formSlice";
import {
  ADD_MARKER_PAN_DURATION,
  EASE_LINEARITY,
} from "../../helpers/constants";

function AddMarkerToClick(props) {
  const dispatch = useDispatch();
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  const map = useMapEvents({
    click(event) {
      if (addMarkerSwitchIsActive) {
        const { lat, lng } = event.latlng;
        // props.onGetPosition(event.latlng);
        dispatch(getCurrentLocation([lat, lng]));

        map.panTo([lat, lng], {
          animate: true,
          duration: ADD_MARKER_PAN_DURATION,
          easeLinearity: EASE_LINEARITY,
        });

        dispatch(showForm());

        dispatch(hideList());
      }
    },
  });

  return <></>;
}

export default AddMarkerToClick;
