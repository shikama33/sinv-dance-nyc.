import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { LINKS } from "@/data/content";
import { Logo, MaskLine, Sticker, WhatsAppIcon } from "./Primitives";

const HeroPhoto = ({ y }) => (
  <motion.div style={{ y }} className="relative w-full max-w-[460px] mx-auto lg:mx-0 lg:justify-self-end">
    <div className="relative border-[5px] border-black bg-black rotate-3 shadow-[14px_14px_0_#4D5BFF] clip-flyer overflow-hidden aspect-[4/5]">
      <motion.img
        src="/img/p1.jpg"
        alt="Dancer dipping his partner under pink and purple studio lights"
        className="w-full h-full object-cover photo-punch"
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 spotlight pointer-events-none" />
    </div>
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
      animate={{ opacity: 1, scale: 1, rotate: -8 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 14 }}
      className="absolute -left-4 sm:-left-10 top-8 bubble bg-white text-black font-bold px-4 py-3 border-[3px] border-black text-sm sm:text-base"
      data-testid="hero-speech-bubble"
    >
      ¡Vamos! walk-ins welcome
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.45, type: "spring", stiffness: 220, damping: 12 }}
      className="absolute -right-2 sm:-right-6 -bottom-6 w-28 h-28 sm:w-36 sm:h-36"
    >
      <div className="spin-slow w-full h-full rounded-full bg-[#C8FF2E] border-[3px] border-black grid place-items-center text-center font-rubik text-[10px] sm:text-xs leading-tight text-black px-3">
        1st cumbia of the month FREE!!!
      </div>
    </motion.div>
  </motion.div>
);

export const Hero = () => {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 14 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative min-h-[100dvh] bg-[#14091F] text-white pt-24 pb-24 lg:pb-16 overflow-hidden grain flex items-center"
      data-testid="hero-section"
    >
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#E0007A] blur-[140px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-52 -left-40 w-[520px] h-[520px] rounded-full bg-[#4D5BFF] blur-[150px] opacity-40 pointer-events-none" />
      <div className="relative w-full max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.25fr_0.85fr] gap-14 lg:gap-10 items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Sticker className="bg-[#4D5BFF] text-white -rotate-3 mb-6 shadow-[3px_3px_0_#C8FF2E]">Latin dance · NYC · made by students</Sticker>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-10">
            <div style={{ perspective: 900 }}>
              <motion.div style={{ rotateX: rx, rotateY: ry, y: logoY }} className="inline-block -rotate-3 origin-center" data-testid="hero-logo">
                <Logo size="xl" animate />
              </motion.div>
            </div>
            <h1 className="font-bangers uppercase text-[#C8FF2E] text-6xl sm:text-7xl xl:text-8xl leading-[0.85] tracking-wide lg:pb-2">
              <MaskLine delay={0.75}>Cintura</MaskLine>
              <MaskLine delay={0.87}>Movement.</MaskLine>
            </h1>
          </div>
          <div className="mt-6 max-w-xl text-lg sm:text-xl font-semibold leading-snug text-white">
            <MaskLine delay={1.0}>Latin dance classes for people who</MaskLine>
            <MaskLine delay={1.08}>
              think they can't dance{" "}
              <span className="inline-block bg-[#E0007A] text-white px-2 -rotate-3 border-2 border-black font-marker">(you can)</span>
            </MaskLine>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href={LINKS.register} target="_blank" rel="noopener noreferrer" data-testid="hero-book-button"
              className="btn-pop inline-flex items-center justify-center gap-2 bg-[#C8FF2E] text-black font-extrabold text-lg px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_#E0007A]">
              Book a class <ArrowDownRight className="w-5 h-5" />
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" data-testid="hero-whatsapp-button"
              className="btn-pop inline-flex items-center justify-center gap-2 bg-[#1f9d55] text-white font-extrabold text-lg px-8 py-4 border-[3px] border-black shadow-[6px_6px_0_#C8FF2E]">
              <WhatsAppIcon /> Join the WhatsApp
            </a>
          </motion.div>
        </div>
        <HeroPhoto y={photoY} />
      </div>
    </section>
  );
};
