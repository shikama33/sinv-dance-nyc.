import { MapPin, Navigation } from "lucide-react";
import { Reveal, SectionTitle, Sticker } from "./Primitives";

const ADDRESS = "353 W 48th Street, 4th Floor, Studio 4, New York, NY";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent("353 W 48th St, New York, NY 10036")}&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent("353 W 48th St, New York, NY 10036")}`;

export const Location = () => (
  <section id="location" className="relative bg-[#FFF3E6] text-black py-28" data-testid="location-section">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
      <div>
        <SectionTitle kicker="Location" title="Find us in" accent="Midtown." tone="light" />
        <Reveal delay={0.1}>
          <div className="mt-10 bg-[#14091F] text-white border-[4px] border-black p-6 sm:p-8 -rotate-1 shadow-[10px_10px_0_#E0007A]" data-testid="location-address">
            <MapPin className="w-8 h-8 text-[#C8FF2E]" aria-hidden="true" />
            <p className="mt-4 font-extrabold text-xl sm:text-2xl leading-snug">353 W 48th Street<br />4th Floor, Studio 4</p>
            <p className="mt-2 text-zinc-300 font-medium">New York, NY · Midtown (Hell's Kitchen)</p>
            <a href={DIRECTIONS} target="_blank" rel="noopener noreferrer" data-testid="location-directions-button"
              className="btn-pop mt-6 inline-flex items-center gap-2 bg-[#C8FF2E] text-black font-bold px-5 py-3 border-2 border-black">
              <Navigation className="w-4 h-4" /> Get directions
            </a>
          </div>
          <Sticker className="mt-8 bg-[#E0007A] text-white rotate-3 text-sm px-4 py-2">Walk-ins welcome!</Sticker>
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="border-[5px] border-black rotate-1 shadow-[12px_12px_0_#C8FF2E] overflow-hidden bg-zinc-100">
          <iframe
            title={`Map to ${ADDRESS}`}
            src={MAP_SRC}
            className="w-full h-[340px] sm:h-[460px] block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            data-testid="location-map-embed"
          />
        </div>
      </Reveal>
    </div>
  </section>
);
