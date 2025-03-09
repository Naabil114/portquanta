"use client";

import { useState, useRef, useEffect } from "react";
import {
  Check,
  Ship,
  Radio,
  AlertTriangle,
  Settings,
  Zap,
  Anchor,
  Droplets,
  RefreshCw as Refresh,
  Globe,
  Heart,
  Bell,
  Cloud,
  Star,
  Sun,
  Moon,
  Wifi,
} from "lucide-react";

export default function PortDropdown({ selectedPort, setSelectedPort, ports, setPorts }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const icons = [
    Ship,
    Radio,
    AlertTriangle,
    Settings,
    Zap,
    Anchor,
    Droplets,
    Refresh,
    Globe,
    Heart,
    Bell,
    Cloud,
    Star,
    Sun,
    Moon,
    Wifi,
  ];

  // Fungsi untuk memilih port (reset icon semua list lain)
  const selectPort = (portIndex) => {
    setPorts((prevPorts) =>
      prevPorts.map((port, i) => ({
        ...port,
        isSelected: i === portIndex, // Hanya satu port yang isSelected: true
        selectedIcons: Array(port.selectedIcons.length).fill(false), // Reset semua ikon saat ganti port
      }))
    );
    setSelectedPort(ports[portIndex].name);
    setIsOpen(false);
  };

  // Fungsi memilih ikon (hanya satu ikon aktif dalam satu port)
  const selectIcon = (portIndex, iconIndex) => {
    setPorts((prevPorts) =>
      prevPorts.map((port, i) =>
        i === portIndex
          ? {
              ...port,
              selectedIcons: port.selectedIcons.map((_, j) => j === iconIndex), // Hanya satu ikon aktif dalam satu port
            }
          : port
      )
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700">Port</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 relative w-full bg-gray-100 rounded-md py-3 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="block truncate text-gray-500">
          {selectedPort || "choose your port !!"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50 max-h-96 overflow-auto border border-gray-200">
          {ports.map((port, portIndex) => (
            <div
              key={portIndex}
              className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => selectPort(portIndex)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm text-black font-medium">{port.name}</h3>
                    {port.isSelected && <Check className="w-5 h-5 text-green-500" />}
                  </div>
                  <p className="mt-1 text-xs text-gray-600">
                    {port.services} service(s) available
                  </p>
                </div>

                {/* Grid Icon */}
                <div className="grid grid-cols-4 gap-1 ml-4">
                  {port.selectedIcons.map((selected, iconIndex) => {
                    const IconComponent = icons[iconIndex % icons.length];
                    return (
                      <div
                        key={iconIndex}
                        onClick={(e) => {
                          e.stopPropagation(); // Hindari trigger selectPort
                          selectIcon(portIndex, iconIndex);
                        }}
                        className={`p-1.5 rounded text-white ${
                          selected ? "bg-green-500" : "bg-gray-800"
                        }`}
                      >
                        <IconComponent className="w-3 h-3" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
