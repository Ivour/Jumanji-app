import React from "react";
import styles from "./List.module.css";
import { useSelector } from "react-redux";
import { useMap } from "react-leaflet";
import { Typography } from "@mui/material";
import ListItem from "./ListItem";
import MyPagination from "./MyPagination";
const List = () => {
  const map = useMap();
  const placesArr = useSelector((state) => state.form.placesData);
  const selectedPagination = useSelector(
    (state) => state.list.selectedPagination
  );

  const getClickedListItemLocation = (location) => {
    map.flyTo(location, 12);
  };

  let footerContent = "";
  if (placesArr.length === 0) footerContent = <p>nothing to show here</p>;
  if (placesArr.length > 5) footerContent = <MyPagination />;

  return (
    <div className={styles.container}>
      <Typography variant="h6">List of locations</Typography>

      {placesArr
        .slice(5 * selectedPagination - 5, 5 * selectedPagination)
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
