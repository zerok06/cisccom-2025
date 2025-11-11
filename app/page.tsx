import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Alumni from "@/components/Alumni";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Alumni />
      <Schedule />
      <Sponsors />
      <Footer />
    </div>
  );
}
