import { motion } from "framer-motion";
import { CLASSES } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

const ClassCard = ({ c, i }) => (
  <Reveal delay={i * 0.12}>
    <motion.article
      whileHover={{ rotate: i % 2 ? 2 : -2, y: -10 }}
      transition={{ type: "spring", stiffness: 260, damping: 14 }}
      className={`group h-full border-[4px] border-black shadow-[10px_10px_0_#C8FF2E] ${c.color} ${i === 1 ? "lg:translate-y-10" : ""}`}
      data-testid={`class-card-${c.key}`}
    >
      <div className="relative overflow-hidden aspect-[4/3] border-b-[4px] border-black bg-black">
        <img src={c.img} alt={c.alt} loading="lazy"
          className="w-full h-full object-cover photo-punch group-hover:scale-110 transition-transform duration-700" />
        <span className="absolute top-4 left-4 font-rubik text-[11px] bg-black text-[#C8FF2E] px-3 py-1.5 -rotate-3 border-2 border-[#C8FF2E]">
          {c.nick}
        </span>
      </div>
      <div className="p-6 sm:p-7">
        <h3 className="font-bangers uppercase text-6xl tracking-wide leading-none">{c.name}</h3>
        <p className="mt-4 text-base font-medium leading-relaxed">{c.text}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${c.name} levels`}>
          {c.levels.map((l) => (
            <li key={l} className="text-xs font-bold uppercase tracking-wide bg-white text-black border-2 border-black px-2.5 py-1">
              {l}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  </Reveal>
);

export const Classes = () => (
  <section id="classes" className="relative bg-[#14091F] text-white py-28 grain" data-testid="classes-section">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <SectionTitle kicker="Estilos" title="Pick your" accent="flavor." />
        <Reveal delay={0.1}>
          <p className="max-w-sm text-zinc-300 text-base sm:text-lg font-medium">
            Three styles, three levels. Start at "no sabo" and work your way to "sí sabo".
          </p>
        </Reveal>
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-10 pb-10">
        {CLASSES.map((c, i) => <ClassCard key={c.key} c={c} i={i} />)}
      </div>
    </div>
  </section>
);
