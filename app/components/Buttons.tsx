"use client";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdSatelliteAlt } from "react-icons/md";
import { LuZoomIn } from "react-icons/lu";
import { LuZoomOut } from "react-icons/lu";




type ButtonsProps = {
    onZoomIn: () => void;
    onZoomOut: () => void;
    onToggleTexture: () => void;
    isSatellite: boolean;
};

export default function Buttons({
    onZoomIn,
    onZoomOut,
    onToggleTexture,
    isSatellite,
}: ButtonsProps) {
    return (
        <div className="fixed text-black bottom-14 right-6 z-[9999] flex flex-col gap-2 pointer-events-auto">
            <button onClick={onToggleTexture} className="rounded-full bg-white p-3 flex items-center justify-center">
                {/* {isSatellite ? "Normal Map" : "Satellite"} */}
                {isSatellite ? (<div><FaMapMarkedAlt size={25} /></div>) : <div><MdSatelliteAlt size={25} /></div>}
            </button>
            <button onClick={onZoomIn} className="rounded-full bg-white p-3 flex items-center justify-center font-bold">
                < LuZoomIn size={20} />
            </button>
            <button onClick={onZoomOut} className="rounded-full bg-white p-3 flex items-center justify-center font-bold">
                < LuZoomOut size={20} />
            </button>
        </div>
    );
}
