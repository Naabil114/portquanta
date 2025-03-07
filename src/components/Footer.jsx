import Logo from "./Logo"
import {Phone, MapPin, Instagram} from "lucide-react"
export default function Footer() {
  return(
    <footer className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* left column */}
        <div>
          <Logo/>
          <p className="mt-4 text-gray-600">Enjoy the comfort of sailing with us</p>
          <p className="mt-2 text-gray-500">©2025</p>
        </div>

        {/* middle column */}

        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Stay connected</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-black"/>
              <span className="text-black">0818200288</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-black"/>
              <span className="text-black">South Jakata, Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Instagram className="w-5 h-5 text-black"/>
              <span className="text-black">@portquanta_official</span>
            </div>
          </div>
        </div>

        {/* right column */}
        <div>
          <h3 className="text-lg text-black font-semibold mb-4">About us</h3>
          <p className="text-black">Port Quanta is a piece of software, based on latest technology for assisting to turn complicated ships
          disbursement into simple tasks in transparent and almost autonomous way</p>
        </div>
      </div>
    </footer>
  )
}