import React from "react";
import { Marker, MarkerClusterer } from "@react-google-maps/api";

const options = {
  imagePath: "images/markerclusterer/m",
  minimumClusterSize: 3
};

export default ({ shipwrecks, favourites, handleMarkerClick }) => {
  const defaultMarkerIcon = {
    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
    scale: 5,
    strokeWeight: 1,
    fillColor: "white",
    fillOpacity: 1,
    labelOrigin: new google.maps.Point(0, 2)
  };
  const favouriteMarkerIcon = {
    ...defaultMarkerIcon,
    fillColor: "orange"
  };

  return (
    <MarkerClusterer options={options}>
      {clusterer => {
        return shipwrecks.map((ship, index) => {
          const onClick = () => handleMarkerClick(ship.id);
          const icon = favourites.includes(ship.name)
            ? favouriteMarkerIcon
            : defaultMarkerIcon;

          return (
            <Marker
              key={index}
              position={{ lat: ship.latitude, lng: ship.longitude }}
              clusterer={clusterer}
              label={{ text: ship.name, fontSize: "12px", fontWeight: "bold" }}
              title={ship.name}
              icon={icon}
              onClick={onClick}
            />
          );
        });
      }}
    </MarkerClusterer>
  );
};
