import React from "react";
import styles from "./List.module.css";
import { useSelector } from "react-redux";
import { useMap } from "react-leaflet";
import { Typography } from "@mui/material";
import ListItem from "./ListItem";
import MyPagination from "./MyPagination";
import {
  CLOSE_ZOOM_LIST_CLICK,
  EASE_LINEARITY,
  FLYTO_LIST_CLICK_DURATION,
  ITEMS_PER_PAGE,
} from "../../../helpers/constants";
const List = () => {
  const map = useMap();
  const placesArr = useSelector((state) => state.form.placesData);
  const selectedPagination = useSelector(
    (state) => state.list.selectedPagination
  );

  const getClickedListItemLocation = (location) => {
    map.flyTo(location, CLOSE_ZOOM_LIST_CLICK, {
      duration: FLYTO_LIST_CLICK_DURATION,
      easeLinearity: EASE_LINEARITY,
    });
  };

  let footerContent = "";
  if (placesArr.length === 0) footerContent = <p>nothing to show here</p>;
  if (placesArr.length > ITEMS_PER_PAGE) footerContent = <MyPagination />;

  return (
    <div className={styles.list}>
      <Typography variant="h6">List of locations</Typography>

      {placesArr
        .slice(
          ITEMS_PER_PAGE * selectedPagination - ITEMS_PER_PAGE,
          ITEMS_PER_PAGE * selectedPagination
        )
        .map((obj) => (
          <ListItem
            key={obj.id}
            id={obj.id}
            placeName={obj.placeName}
            description={obj.description}
            location={obj.location}
            user={obj.user}
            onGetLocation={getClickedListItemLocation}
          />
        ))}

      {footerContent}
    </div>
  );
};

export default List;
