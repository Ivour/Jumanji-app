import React from "react";
import { useSelector } from "react-redux";
import ListItems from "./ListItems";
import styles from "./ListContainer.module.css";
import { useMap } from "react-leaflet";

const ListContainer = () => {
  const placesArr = useSelector((state) => state.form.placesData);

  const map = useMap();

  const getClickedListItemPosition = () => {
    map.flyTo([22, 33]);
  };

  return (
    <div className={styles.container}>
      {placesArr.map((obj) => (
        <ListItems
          key={obj.id}
          placeName={obj.placeName}
          description={obj.description}
          location={obj.location}
          user={obj.user}
          onClick={getClickedListItemPosition}
        />
      ))}
    </div>
  );
};

export default ListContainer;
