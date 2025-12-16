"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import { useState } from "react";
import Buttons from "./Buttons";
import MapBridge from "./MapBridge";

const center: LatLngExpression = [10.7905, 78.7047];

const NORMAL_TILE =
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const SATELLITE_TILE =
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";

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

        {/* 🔑 THIS CONNECTS LEAFLET → BUTTONS */}
        <MapBridge onReady={setMapApi} />
      </MapContainer>

      <Buttons
        onZoomIn={() => mapApi?.zoomIn()}
        onZoomOut={() => mapApi?.zoomOut()}
        onToggleTexture={() => setIsSatellite((p) => !p)}
        isSatellite={isSatellite}
      />
    </div>
  );
}
