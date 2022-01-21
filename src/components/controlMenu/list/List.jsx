import React from "react";
import styles from "./List.module.css";
import { useSelector } from "react-redux";
import { useMap } from "react-leaflet";
import { Typography } from "@mui/material";
import ListItem from "./ListItem";
const List = () => {
  const map = useMap();
  const placesArr = useSelector((state) => state.form.placesData);

  const getClickedListItemLocation = (location) => {
    map.flyTo(location, 12);
  };

  return (
    <div className={styles.container}>
      <Typography variant="h6">List of locations</Typography>

      {placesArr.map((obj) => (
        <ListItem
          key={obj.id}
          placeName={obj.placeName}
          description={obj.description}
          location={obj.location}
          user={obj.user}
          onGetLocation={getClickedListItemLocation}
        />
      ))}
    </div>
  );
};

export default List;
