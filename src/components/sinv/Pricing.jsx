import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { Reveal, SectionTitle } from "./Primitives";

const PriceCard = ({ price, who, note, dark, tilt, testid }) => (
  <motion.div
    whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 260, damping: 14 }}
    className={`border-[4px] border-black p-8 sm:p-10 ${tilt} ${dark ? "bg-[#14091F] text-white shadow-[10px_10px_0_#E0007A]" : "bg-[#C8FF2E] text-black shadow-[10px_10px_0_#14091F]"}`}
    data-testid={testid}
  >
    <p className="font-rubik text-xs uppercase">{who}</p>
    <p className={`font-bangers text-[7rem] sm:text-[9rem] leading-[0.8] mt-4 ${dark ? "text-[#C8FF2E]" : ""}`}>{price}</p>
    <p className="mt-2 font-bold text-sm uppercase tracking-wide">per class</p>
    <p className="mt-5 font-medium text-base leading-relaxed">{note}</p>
  </motion.div>
);

export const Pricing = () => (
  <section id="pricing" className="relative bg-[#FFF3E6] text-black py-28" data-testid="pricing-section">
    <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
      <SectionTitle kicker="Pricing" title="Cheap like" accent="ramen." tone="light" />
      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Reveal>
          <PriceCard price="$10" who="College students" tilt="-rotate-2" testid="pricing-college-card"
            note="Any college, any major, any level of rhythm. Some intermediate classes are just $5 for students." />
        </Reveal>
        <Reveal delay={0.12}>
          <PriceCard price="$15" who="Non-college students" dark tilt="rotate-2" testid="pricing-general-card"
            note="Everybody's welcome. Grad, worker, tourist, tía visiting from Queens. Same vibes, same class." />
        </Reveal>
      </div>
      <Reveal delay={0.15}>
        <div className="mt-14 flex items-start gap-3 border-[3px] border-black bg-[#EEF0FF] px-5 py-4 max-w-2xl" data-testid="pricing-id-note">
          <BadgeCheck className="w-6 h-6 shrink-0 text-[#4D5BFF]" aria-hidden="true" />
          <p className="font-semibold text-base">Student price? Bring your student ID, we'll ask at the door. No ID, no discount (sorry, we love you).</p>
        </div>
      </Reveal>
    </div>
  </section>
);
