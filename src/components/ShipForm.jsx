"use client";

import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { ports } from "../data/ports";
import PortDropdown from "./PortDropdown";
import OperationsDropdown from "./OperationsDropdown";

export default function ShipForm() {
  const [sports, ssetPorts] = useState(ports);
  const [selectedPort, setSelectedPort] = useState("");
  const [selectedOperation, setSelectedOperation] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", {
      port: selectedPort,
      operation: selectedOperation,
      dateRange: `${format(dateRange.startDate, "dd/MM/yyyy")} - ${format(
        dateRange.endDate,
        "dd/MM/yyyy"
      )}`,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">HEADING 1</h1>

      <div className="border-2 border-blue-600 rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Port and Operations Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PortDropdown
              selectedPort={selectedPort}
              setSelectedPort={setSelectedPort}
              ports={sports}
              setPorts={ssetPorts}
            />
            <OperationsDropdown
              selectedOperation={selectedOperation}
              setSelectedOperation={setSelectedOperation}
            />
          </div>

          {/* Date Range Input */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              ETD & ETA Date
            </label>
            <input
              type="text"
              readOnly
              value={`${format(dateRange.startDate, "dd/MM/yyyy")} - ${format(
                dateRange.endDate,
                "dd/MM/yyyy"
              )}`}
              onClick={() => setShowCalendar(!showCalendar)}
              className="block w-full text-center px-4 py-3 text-gray-500 bg-gray-100 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {showCalendar && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white shadow-lg rounded-md p-4 z-50">
                <DateRange
                  ranges={[dateRange]}
                  onChange={(ranges) => setDateRange(ranges.selection)}
                  moveRangeOnFirstSelection={false}
                  rangeColors={["#2563eb"]}
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center translate-y-12">
            <button
              type="submit"
              className="px-8 py-2.5 text-blue-600 border-2 border-blue-600 rounded-full bg-blue-50 hover:bg-blue-500 hover:text-white transition-colors duration-200 font-medium"
            >
              Describe your ship detail
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
