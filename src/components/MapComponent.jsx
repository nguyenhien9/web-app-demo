import React from "react";
import GoogleMapReact from "google-map-react";
import { HiLocationMarker } from "react-icons/hi";

const defaultProps = {
  center: {
    lat: 59.955413,
    lng: 30.337844,
  },
  zoom: 15,
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapComponent = ({ tour }) => {
  return (
    <div className="component-height w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCZ0drJ_dIxkbANGxmqgOiK3o0FjW6KkSk" }}
        defaultCenter={tour?.coords}
        defaultZoom={defaultProps.zoom}
        center={tour?.coords}
      >
        <AnyReactComponent
          lat={tour?.coords.lat}
          lng={tour?.coords.lng}
          text={<HiLocationMarker color="red" size={20} />}
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
