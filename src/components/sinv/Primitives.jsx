import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

export const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pt-[0.32em] -mt-[0.32em] pb-[0.06em]">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.95, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

const LOGO_LINES = [
  { t: "SIN", c: "-rotate-2 translate-x-[2%]" },
  { t: "VER", c: "rotate-1 translate-x-[10%]" },
  { t: "GÜEN", c: "-rotate-1" },
  { t: "ZA", c: "rotate-2 translate-x-[18%]" },
];

// Replace this block with <img src="/logo.png" alt="Sin Vergüenza logo" /> when the real logo is ready.
export const Logo = ({ size = "sm", animate = false, className = "" }) => {
  const big = size === "xl";
  return (
    <div
      role="img"
      aria-label="Sin Vergüenza logo"
      className={`font-marker bg-[#E0007A] text-[#C8FF2E] border-black uppercase select-none ${
        big
          ? "text-[21vw] sm:text-[7.5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[0.92] px-[0.18em] py-[0.16em] border-[5px] shadow-[12px_12px_0_#14091F]"
          : "text-[11px] leading-[0.85] px-1.5 py-1 border-2 shadow-[3px_3px_0_#C8FF2E]"
      } ${className}`}
    >
      {LOGO_LINES.map((l, i) =>
        animate ? (
          <MaskLine key={l.t} delay={0.15 + i * 0.12}>
            <span className={`block logo-ink ${l.c}`}>{l.t}</span>
          </MaskLine>
        ) : (
          <span key={l.t} className={`block ${l.c}`}>{l.t}</span>
        )
      )}
    </div>
  );
};

export const Sticker = ({ children, className = "", ...rest }) => (
  <span
    className={`inline-block font-rubik uppercase text-[11px] sm:text-xs tracking-wider px-3 py-1.5 border-2 border-black wiggle ${className}`}
    {...rest}
  >
    {children}
  </span>
);

export const SectionTitle = ({ kicker, title, accent, tone = "dark", accentClass, className = "" }) => (
  <Reveal className={className}>
    {kicker && (
      <Sticker className={`mb-5 -rotate-3 ${tone === "dark" ? "bg-[#C8FF2E] text-black" : "bg-black text-[#C8FF2E]"}`}>
        {kicker}
      </Sticker>
    )}
    <h2 className="font-bangers uppercase tracking-wide leading-[0.9] text-5xl sm:text-6xl lg:text-7xl">
      {title}{" "}
      {accent && (
        <span className={`inline-block -rotate-2 px-2 ${accentClass ?? (tone === "dark" ? "bg-[#E0007A] text-white" : "bg-black text-[#C8FF2E]")}`}>
          {accent}
        </span>
      )}
    </h2>
  </Reveal>
);

export const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88zm8.41-18.3A11.81 11.81 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.49-8.4z" />
  </svg>
);
