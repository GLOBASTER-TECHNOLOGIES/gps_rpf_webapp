"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function MapBridge({
  onReady,
}: {
  onReady: (api: { zoomIn: () => void; zoomOut: () => void }) => void;
}) {
  const map = useMap();

  useEffect(() => {
    onReady({
      zoomIn: () => map.zoomIn(),
      zoomOut: () => map.zoomOut(),
    });
  }, [map, onReady]);

  return null;
}
