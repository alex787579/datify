import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, Autocomplete } from "@react-google-maps/api";

const GOOGLE_MAPS_API_KEY = "YOUR_API_KEY"; // Replace with your API key

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194, // Default location (San Francisco)
};

const App = () => {
  const [map, setMap] = useState(null);
  const [position, setPosition] = useState(center);
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoCompleteInstance) => {
    setAutocomplete(autoCompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        console.error("No geometry found for the place.");
        return;
      }

      const location = place.geometry.location;
      setPosition({
        lat: location.lat(),
        lng: location.lng(),
      });

      if (map) {
        map.panTo({
          lat: location.lat(),
          lng: location.lng(),
        });
      }
    } else {
      console.error("Autocomplete is not loaded yet!");
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div style={{ marginBottom: "20px" }}>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            placeholder="Search for a location"
            style={{
              width: "300px",
              height: "40px",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
        </Autocomplete>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={position}
        zoom={12}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        <Marker position={position} />
      </GoogleMap>
    </LoadScript>
  );
};

export default App;
