import { motion } from "framer-motion";
import { Clock3, Megaphone } from "lucide-react";
import { SCHEDULE } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

const DayBoard = ({ d, i }) => (
  <Reveal delay={i * 0.12}>
    <div className={`border-[4px] border-black shadow-[10px_10px_0_#14091F] p-6 sm:p-8 ${d.style}`} data-testid={`schedule-${d.key}`}>
      <h3 className="font-bangers uppercase text-4xl sm:text-5xl tracking-wide leading-none">{d.day}</h3>
      <p className="mt-2 font-rubik text-[11px] uppercase">{d.sub}</p>
      <ul className="mt-6 divide-y-2 divide-black/80 border-t-2 border-black/80">
        {d.items.map((it) => (
          <motion.li
            key={it.time}
            whileHover={{ x: 8 }}
            className="flex items-center justify-between gap-4 py-4"
          >
            <span className="font-rubik text-sm sm:text-base whitespace-nowrap flex items-center gap-2">
              <Clock3 className="w-4 h-4" aria-hidden="true" />{it.time}
            </span>
            <span className="text-right">
              <span className="block font-extrabold text-lg leading-tight">{it.name}</span>
              <span className="block text-xs font-semibold uppercase opacity-80">{it.level}</span>
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  </Reveal>
);

export const Schedule = () => (
  <section id="schedule" className="relative bg-[#E0007A] text-white py-28 overflow-hidden" data-testid="schedule-section">
    <div className="absolute inset-0 halftone-dark pointer-events-none" />
    <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
      <SectionTitle kicker="Weekly schedule" title="Where & when" accent="we move." accentClass="bg-black text-[#C8FF2E]" />
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        {SCHEDULE.map((d, i) => <DayBoard key={d.key} d={d} i={i} />)}
      </div>
      <div className="mt-14 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
        <Reveal>
          <div className="starburst-wrap wiggle" data-testid="schedule-free-cumbia-note">
            <div className="bg-[#C8FF2E] text-black border-[4px] border-black px-6 py-6 rotate-2 shadow-[8px_8px_0_#4D5BFF]">
              <p className="font-bangers uppercase text-3xl sm:text-5xl leading-none tracking-wide">
                The first cumbia class of the month is FREE!!!
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="tape relative bg-white text-black border-[3px] border-black px-5 py-5 -rotate-2 flex items-start gap-3" data-testid="schedule-registration-note">
            <Megaphone className="w-6 h-6 shrink-0 text-[#E0007A]" aria-hidden="true" />
            <p className="font-bold text-base sm:text-lg">Registration links go up every Monday at 12PM! Set an alarm, they fill up.</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
