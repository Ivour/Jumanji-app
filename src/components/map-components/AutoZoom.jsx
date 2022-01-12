import { useMap } from "react-leaflet";

const AutoZoom = (props) => {
  const map = useMap();
  if (props.isLoaded) {
    map.flyTo([49.194011782178066, 16.60989809635794], 12, {
      duration: 6,
      easeLinearity: 0.0001,
    });
  }
  /* useEffect(() => {
    setTimeout(() => {
      map.flyTo([49.194011782178066, 16.60989809635794], 12);
    }, 1000);
  }, [map]); */

  return null;
};

export default AutoZoom;
