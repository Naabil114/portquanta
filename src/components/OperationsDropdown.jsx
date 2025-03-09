"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function OperationsDropdown({ selectedOperation, setSelectedOperation }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const operations = ["Operation 1", "Operation 2", "Operation 3"]

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="block text-sm font-medium text-gray-700">Operations</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mt-1 relative w-full bg-gray-100 rounded-md py-3 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span className="block truncate text-gray-500">{selectedOperation || "choose one !!"}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </span>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-50">
          {operations.map((operation, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-50 text-black cursor-pointer text-sm"
              onClick={() => {
                setSelectedOperation(operation)
                setIsOpen(false)
              }}
            >
              {operation}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

