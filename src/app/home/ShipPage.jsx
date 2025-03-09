"use client"

import { useState } from "react"
import Link from "next/link"
import Logo from "@/components/Logo"
import { ShoppingCart, User, ChevronDown } from "lucide-react"

export default function ShipPage() {
  const [formData, setFormData] = useState({
    port: "",
    operations: "",
    dateRange: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data:", formData)
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-white py-4 px-6 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        

        <div className="flex items-center space-x-6">
          {/* Tambahkan teks "Cart" untuk debugging */}
          <Link href="/cart" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ShoppingCart className="w-6 h-6" />
            <span>Cart</span> {/* Tambahkan teks untuk memastikan link bekerja */}
          </Link>
          <Link href="/profile" className="text-gray-600 hover:text-gray-900">
            <User className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </header>

      {/* Ship Form */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">HEADING 1</h1>

        <div className="border border-blue-200 rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Port and Operations Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Port Select */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Port</label>
                <div className="relative">
                  <select
                    value={formData.port}
                    onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                    className="block w-full pl-3 pr-10 py-3 text-gray-500 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="" disabled>choose your port !!</option>
                    <option value="port1">Port 1</option>
                    <option value="port2">Port 2</option>
                    <option value="port3">Port 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Operations Select */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Operations</label>
                <div className="relative">
                  <select
                    value={formData.operations}
                    onChange={(e) => setFormData({ ...formData, operations: e.target.value })}
                    className="block w-full pl-3 pr-10 py-3 text-gray-500 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                  >
                    <option value="" disabled>choose one !!</option>
                    <option value="op1">Operation 1</option>
                    <option value="op2">Operation 2</option>
                    <option value="op3">Operation 3</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Date Range Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">ETD & ETA Date</label>
              <input
                type="text"
                placeholder="dd / mm / yyyy - dd / mm / yyyy"
                value={formData.dateRange}
                onChange={(e) => setFormData({ ...formData, dateRange: e.target.value })}
                className="block w-full px-4 py-3 text-gray-500 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-200 font-medium"
              >
                Describe your ship detail
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
