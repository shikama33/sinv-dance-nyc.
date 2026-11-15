import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ANNOUNCEMENTS } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

const TAG_STYLE = {
  Event: "bg-[#FF6B2C] text-black",
  Class: "bg-[#C8FF2E] text-black",
  Social: "bg-[#4D5BFF] text-white",
};
const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export const Announcements = () => (
  <section id="poppin" className="relative bg-[#2A0F45] text-white py-28 grain" data-testid="announcements-section">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
      <SectionTitle kicker="Announcements" title="What's" accent="poppin'?" />
      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {ANNOUNCEMENTS.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.08}>
            <motion.article
              whileHover={{ rotate: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 260, damping: 14 }}
              className={`pin relative h-full flex flex-col bg-white text-black border-[4px] border-black p-6 shadow-[8px_8px_0_#C8FF2E] ${TILTS[i % 4]}`}
              data-testid={`announcement-card-${i}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-rubik text-sm">{a.date}</span>
                <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 border-2 border-black ${TAG_STYLE[a.tag] ?? "bg-white"}`}>
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 font-bangers uppercase text-3xl tracking-wide leading-none">{a.title}</h3>
              <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed flex-1">{a.text}</p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`announcement-more-info-${i}`}
                className="btn-pop mt-6 inline-flex items-center gap-2 self-start bg-black text-[#C8FF2E] font-bold text-sm px-4 py-2.5 border-2 border-black"
              >
                More info <ExternalLink className="w-4 h-4" />
              </a>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
