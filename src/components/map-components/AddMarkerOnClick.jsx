import { useMapEvents } from "react-leaflet";
import { useSelector, useDispatch } from "react-redux";
import {
  activateControllerBtn,
  disactivateAddMarkerSwitch,
} from "../../store/controllerSlice";
import { showForm, resetForm } from "../../store/formSlice";
import { getCurrentLocation } from "../../store/mapSlice";

function AddMarkerToClick(props) {
  const dispatch = useDispatch();
  const addMarkerSwitchIsActive = useSelector(
    (state) => state.controller.addMarkerSwitchIsActive
  );

  /* const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
    },
  }); */

  const map = useMapEvents({
    click(event) {
      if (addMarkerSwitchIsActive) {
        dispatch(resetForm());
        const { lat, lng } = event.latlng;
        // props.onGetPosition(event.latlng);
        dispatch(getCurrentLocation([lat, lng]));

        map.panTo([lat, lng], { animate: true, duration: 1 });

        dispatch(activateControllerBtn());
        //dispatch(disactivateAddMarkerSwitch());
        dispatch(showForm());
        dispatch(disactivateAddMarkerSwitch());
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
