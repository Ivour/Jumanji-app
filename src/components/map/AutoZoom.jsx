import { useMap } from "react-leaflet";
import {
  AUTOZOOM_DURATION,
  EASE_LINEARITY,
  INIT_MAP_CENTER_POS,
  NORMAL_ZOOM,
} from "../../helpers/constants";

const AutoZoom = (props) => {
  const map = useMap();

  map.flyTo(INIT_MAP_CENTER_POS, NORMAL_ZOOM, {
    duration: AUTOZOOM_DURATION,
    easeLinearity: EASE_LINEARITY,
  });

  /* useEffect(() => {
    setTimeout(() => {
      map.flyTo([49.194011782178066, 16.60989809635794], 12);
    }, 1000);
  }, [map]); */

  return null;
};

export default AutoZoom;
