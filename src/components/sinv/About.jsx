import { motion } from "framer-motion";
import { Footprints, GraduationCap, Smile, DoorOpen } from "lucide-react";
import { VALUES } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

const ICONS = { Footprints, GraduationCap, Smile, DoorOpen };
const TILTS = ["-rotate-2", "rotate-2", "rotate-1", "-rotate-1"];
const BGS = ["bg-white", "bg-[#14091F] text-white", "bg-[#E0007A] text-white", "bg-white"];

export const About = () => (
  <section id="about" className="relative bg-[#C8FF2E] text-black pt-32 pb-28 halftone" data-testid="about-section">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
      <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-start">
        <div>
          <SectionTitle kicker="Who we are" title="Sin pena." accent="Sin juicio." tone="light" />
          <Reveal delay={0.1}>
            <div className="mt-10 bg-white border-[4px] border-black shadow-[10px_10px_0_#14091F] p-6 sm:p-8 -rotate-1 max-w-2xl">
              <p className="text-base sm:text-lg leading-relaxed font-medium">
                SINV started with a bunch of college students who just wanted to dance without feeling judged. Now it's a whole movement.
                Our main instructor is like 25, so it's less "strict professor" and more "your friend who finally taught you to dance at the party".
              </p>
              <p className="mt-4 text-base sm:text-lg leading-relaxed font-medium">
                <strong>Sin Vergüenza</strong> means no shame. Mess up the step? Bueno. Laugh, try again, keep moving that cintura.
                Students, non-students, abuelas, everybody's invited. Puro movimiento.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="relative">
          <div className="tape relative border-[5px] border-black rotate-2 shadow-[12px_12px_0_#E0007A] overflow-hidden aspect-[4/3] bg-black">
            <img src="/img/p3.jpg" alt="Four friends laughing and dancing in a sunlit studio" className="w-full h-full object-cover photo-punch hover:scale-105 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="absolute -bottom-8 left-4 bubble bg-white border-[3px] border-black px-4 py-3 font-bold -rotate-3 text-sm sm:text-base">
            "I came for the cheap class, stayed for the familia"
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUES.map((v, i) => {
          const Icon = ICONS[v.icon];
          return (
            <Reveal key={v.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotate: i % 2 ? -3 : 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className={`h-full border-[4px] border-black p-6 shadow-[8px_8px_0_#14091F] ${TILTS[i]} ${BGS[i]}`}
                data-testid={`value-card-${i}`}
              >
                <div className="w-12 h-12 grid place-items-center bg-[#C8FF2E] text-black border-[3px] border-black mb-5 -rotate-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bangers text-3xl uppercase tracking-wide leading-none">{v.title}</h3>
                <p className="mt-3 text-sm sm:text-base font-medium leading-relaxed opacity-90">{v.text}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
