"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo/>
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
          <Link href="/ports" className="text-gray-700 hover:text-gray-900">
            Ports
          </Link>
          <Link href="/" className={`${pathname === "/" ? `underline` : ``} text-gray-700 hover:text-gray-900`}>
            Home
          </Link>
          <Link href="/disbursements" className="text-gray-700 hover:text-gray-900">
          Disbursements
          </Link>
          <Link href="/accountbalance" className="text-gray-700 hover:text-gray-900">
          Account Balance
          </Link>
        </nav>

        {/* sembunyikan login jika berada di halaman login */}
        {pathname !== "/login" && (
          <Link href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}