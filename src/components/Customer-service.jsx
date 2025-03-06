import { PhoneIcon } from "lucide-react";
export default function CustomerService() {
  return (
    <div className="flex items-center px-4 py-2 mt-4 bg-green-100 rounded-full md:mt-0">
      <PhoneIcon className="w-6 h-6 mr-2 text-green-600"/>
      <span className="font-medium text-green-600">Customer Service</span>
    </div>
  )
}