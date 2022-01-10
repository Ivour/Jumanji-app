import { useMapEvents } from "react-leaflet";

function AddMarkerToClick(props) {
  //const [position, setPosition] = useState([]);

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
      props.onGetPosition(event.latlng);
      console.log(event);

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
