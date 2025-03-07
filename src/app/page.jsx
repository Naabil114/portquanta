import Footer from "@/components/Footer";
import Hero from "../components/Hero";
import PortsGrid from "../components/Ports-grid";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-black text-center mb-12">Our Ports Coverage</h2>
        <PortsGrid/>
      </section>
      <Footer/>
    </main>
  )
}