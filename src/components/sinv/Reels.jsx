import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { REELS, LINKS } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

export const Reels = () => (
  <section id="socials" className="relative bg-[#14091F] text-white py-28" data-testid="reels-section">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <SectionTitle kicker="@sinvnyc" title="Caught on" accent="camera." />
        <Reveal delay={0.1}>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" data-testid="reels-follow-button"
            className="btn-pop inline-flex items-center gap-2 bg-[#C8FF2E] text-black font-extrabold text-lg px-7 py-4 border-[3px] border-black shadow-[6px_6px_0_#4D5BFF]">
            Follow @sinvnyc
          </a>
        </Reveal>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {REELS.map((r, i) => (
          <Reveal key={r.caption} delay={(i % 3) * 0.08}>
            <motion.a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ rotate: i % 2 ? 2 : -2, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              className="group relative block aspect-[9/16] overflow-hidden border-[3px] border-white/90 bg-zinc-900"
              data-testid={`reel-card-${i}`}
            >
              <img src={r.img} alt={r.alt} loading="lazy" className="w-full h-full object-cover photo-punch group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <span className="absolute top-3 right-3 w-10 h-10 grid place-items-center rounded-full bg-[#E0007A] border-2 border-black group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-white" aria-hidden="true" />
              </span>
              <p className="absolute bottom-0 inset-x-0 p-3 sm:p-4 font-bold text-sm sm:text-lg leading-tight">{r.caption}</p>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
