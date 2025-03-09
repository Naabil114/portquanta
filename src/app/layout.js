import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "../components/Header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Portquanta - Ship Management",
  description: "Manage your shipping operations efficiently",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

