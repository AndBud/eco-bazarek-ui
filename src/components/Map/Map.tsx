import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./Map.styles.css";

export const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCHv3wkG8eg8AcsfqfY3Cr77Xnt-S-HrIQ",
  });
  const center = useMemo(() => ({ lat: 50.049683, lng: 19.944544 }), []);

  return (
    <div className="Map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
        />
      )}
    </div>
  );
};
