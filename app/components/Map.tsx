"use client";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMapClient"), {
  ssr: false,
});

export default function Map() {
  return <LeafletMap />;
}
