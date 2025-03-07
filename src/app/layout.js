import { Geist, Geist_Mono,Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// font
const poppins = Poppins({subsets: ["latin"], weight: ['400']})

export const metadata = {
  title: "Portquanta - Ship Management Solution",
  description: "Enjoy your life with your ship",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={poppins.className}>
       <Header />
        {children}
      </body>
    </html>
  );
}
