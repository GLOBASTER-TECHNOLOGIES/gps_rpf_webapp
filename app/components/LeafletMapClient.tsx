"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import L from "leaflet";
import { useState } from "react";
import Buttons from "./Buttons";
import MapBridge from "./MapBridge";
import { FaMapMarkerAlt } from "react-icons/fa";
import { renderToStaticMarkup } from "react-dom/server";

const center: LatLngExpression = [10.7905, 78.7047];

// 📍 PIN LOCATION
const PIN_POSITION: LatLngExpression = [10.827988, 78.691192];

const NORMAL_TILE =
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const SATELLITE_TILE =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

// 🎯 Custom marker icon using react-icons
const markerIcon = L.divIcon({
  html: renderToStaticMarkup(
    <FaMapMarkerAlt size={30} color="#dc2626" />
  ),
  className: "custom-map-marker",
  iconSize: [32, 32],
  iconAnchor: [16, 32], // bottom center
});

export default function LeafletMapClient() {
  const [isSatellite, setIsSatellite] = useState(false);
  const [mapApi, setMapApi] = useState<{
    zoomIn: () => void;
    zoomOut: () => void;
  } | null>(null);

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={center}
        zoom={12}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          url={isSatellite ? SATELLITE_TILE : NORMAL_TILE}
          attribution="&copy; OpenStreetMap / Esri"
        />

        {/* 📍 PIN MARKER */}
        <Marker position={PIN_POSITION} icon={markerIcon} />

        {/* 🔑 DO NOT TOUCH – keeps zoom working */}
        <MapBridge onReady={setMapApi} />
      </MapContainer>

      {/* 🎛️ CONTROLS */}
      <Buttons
        onZoomIn={() => mapApi?.zoomIn()}
        onZoomOut={() => mapApi?.zoomOut()}
        onToggleTexture={() => setIsSatellite((p) => !p)}
        isSatellite={isSatellite}
      />
    </div>
  );
}
