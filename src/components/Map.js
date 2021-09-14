import styles from "./Map.module.css";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useState, useEffect } from "react";

import { useIp } from "../context/IpContext";

const Map = () => {
  const { ipSearchResult } = useIp({});

  const [position, setPosition] = useState({ lat: 22, lng: -66 });
  const [popupText, setPopupText] = useState("");

  const ChangeView = ({ center, zoom }) => {
    const map = useMap();

    map.setView(center, zoom);

    return null;
  };

  useEffect(() => {
    setPosition(
      ipSearchResult.location
        ? { lat: ipSearchResult.location.lat, lng: ipSearchResult.location.lng }
        : { lat: 18, lng: -66 }
    );

    setPopupText(ipSearchResult.isp ? ipSearchResult.isp : "random place");
  }, [ipSearchResult]);

  return (
    <div className={styles.mapContainerA}>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <ChangeView center={position} zoom={13} />

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{popupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default Map;
