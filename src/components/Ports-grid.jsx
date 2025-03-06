export default function PortsGrid() {
  const ports = Array(9).fill({
    title: "150 K DWT SPM TBBM BALONGAN PERTAMINA",
    location: "Kabupaten Indramayu, Province of Jawa Barat",
  })

  return(
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ports.map((port, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <a href="#" className="font-semibold mb-2 hover:underline text-black">{port.title}</a>
            <p className="text-gray-600 text-sm">{port.location}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-2">
      {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded ${
              page === 1 ? "bg-gray-200 text-gray-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}