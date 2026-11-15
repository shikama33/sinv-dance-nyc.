import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "@/App.css";
import { setLenis } from "@/lib/lenis";
import { Nav } from "@/components/sinv/Nav";
import { Hero } from "@/components/sinv/Hero";
import { Marquee } from "@/components/sinv/Marquee";
import { About } from "@/components/sinv/About";
import { Classes } from "@/components/sinv/Classes";
import { Schedule } from "@/components/sinv/Schedule";
import { Pricing } from "@/components/sinv/Pricing";
import { Announcements } from "@/components/sinv/Announcements";
import { Reels } from "@/components/sinv/Reels";
import { Faq } from "@/components/sinv/Faq";
import { Location } from "@/components/sinv/Location";
import { Footer, FloatingWhatsApp } from "@/components/sinv/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    setLenis(lenis);
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <div className="sinv font-poppins bg-[#14091F]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Classes />
        <Schedule />
        <Pricing />
        <Announcements />
        <Reels />
        <Faq />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
