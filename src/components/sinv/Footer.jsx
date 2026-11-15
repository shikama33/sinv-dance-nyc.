import { motion } from "framer-motion";
import { CalendarCheck, Mail, Camera, Music2, Link2, QrCode, Wallet } from "lucide-react";
import { LINKS } from "@/data/content";
import { Reveal, Logo, WhatsAppIcon } from "./Primitives";

const PAYMENTS = [
  { key: "venmo", label: "Venmo" },
  { key: "zelle", label: "Zelle" },
  { key: "cashapp", label: "Cash App" },
  { key: "stripe", label: "Card (Stripe)" },
];
const SOCIALS = [
  { key: "instagram", label: "Instagram", Icon: Camera },
  { key: "tiktok", label: "TikTok", Icon: Music2 },
  { key: "linktree", label: "Linktree", Icon: Link2 },
];

const Big = ({ href, children, className = "", testid }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -6, rotate: -1.5 }}
    whileTap={{ scale: 0.97 }}
    transition={{ type: "spring", stiffness: 320, damping: 14 }}
    className={`flex items-center gap-3 border-[3px] border-black font-extrabold shadow-[6px_6px_0_#14091F] ${className}`}
    data-testid={testid}
  >
    {children}
  </motion.a>
);

export const Footer = () => (
  <footer id="contact" className="relative bg-[#E0007A] text-white pt-28 pb-12 overflow-hidden" data-testid="contact-footer">
    <div className="absolute inset-0 halftone-dark pointer-events-none" />
    <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
      <Reveal>
        <h2 className="font-bangers uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-wide">
          Ready to move <span className="inline-block bg-[#C8FF2E] text-black px-2 -rotate-2 border-[3px] border-black">sin vergüenza?</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-3 gap-6">
        <Reveal className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <Big href={LINKS.register} testid="footer-register-link" className="sm:col-span-2 bg-[#C8FF2E] text-black text-2xl sm:text-3xl px-6 py-7">
            <CalendarCheck className="w-8 h-8" /> Register / Book a class
          </Big>
          <div className="sm:col-span-2 bg-[#14091F] border-[3px] border-black p-5 shadow-[6px_6px_0_#14091F]">
            <p className="flex items-center gap-2 font-rubik text-xs uppercase text-[#C8FF2E]"><Wallet className="w-4 h-4" /> Pay for class</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PAYMENTS.map((p) => (
                <Big key={p.key} href={LINKS[p.key]} testid={`footer-${p.key}-link`} className="justify-center bg-white text-black text-base px-3 py-4 shadow-[4px_4px_0_#C8FF2E]">
                  {p.label}
                </Big>
              ))}
            </div>
          </div>
          {SOCIALS.map(({ key, label, Icon }) => (
            <Big key={key} href={LINKS[key]} testid={`footer-${key}-link`} className="bg-white text-black text-xl px-6 py-5">
              <Icon className="w-6 h-6" /> {label}
            </Big>
          ))}
          <Big href={LINKS.email} testid="footer-email-link" className="bg-[#4D5BFF] text-white text-base sm:text-lg px-6 py-5 break-all">
            <Mail className="w-6 h-6 shrink-0" /> {LINKS.emailLabel}
          </Big>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full bg-[#1f9d55] border-[3px] border-black p-6 shadow-[6px_6px_0_#14091F] flex flex-col" data-testid="footer-whatsapp-card">
            <p className="font-bangers uppercase text-4xl tracking-wide leading-none">Join the WhatsApp</p>
            <p className="mt-2 font-medium">Class links, last-minute changes and memes. Mostly memes.</p>
            <div className="mt-6 aspect-square w-full max-w-[220px] mx-auto bg-white border-[3px] border-black grid place-items-center text-black" data-testid="footer-whatsapp-qr-slot">
              {/* Replace with <img src="/qr.png" alt="WhatsApp group QR code" /> */}
              <div className="text-center">
                <QrCode className="w-16 h-16 mx-auto" aria-hidden="true" />
                <p className="mt-2 font-rubik text-[11px] uppercase">QR code here</p>
              </div>
            </div>
            <Big href={LINKS.whatsapp} testid="footer-whatsapp-link" className="mt-6 justify-center bg-white text-black text-lg px-5 py-4">
              <WhatsAppIcon /> Open WhatsApp group
            </Big>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <Logo size="sm" className="!text-3xl !px-3 !py-2 !border-[3px] -rotate-3" />
        <p className="font-bangers uppercase text-[17vw] md:text-[10vw] leading-[0.8] tracking-wide text-[#C8FF2E] stroke-black" data-testid="footer-slogan">
          Cintura Movement.
        </p>
      </div>
      <p className="mt-10 text-sm font-medium text-white/90">© {new Date().getFullYear()} Sin Vergüenza (SINV) · New York, NY · Hecho con cintura.</p>
    </div>
  </footer>
);

export const FloatingWhatsApp = () => (
  <a
    href={LINKS.whatsapp}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Join the WhatsApp group"
    data-testid="floating-whatsapp-button"
    className="md:hidden fixed bottom-5 right-5 z-40 w-14 h-14 grid place-items-center rounded-full bg-[#1f9d55] text-white border-[3px] border-black shadow-[4px_4px_0_#14091F] float-bob"
  >
    <WhatsAppIcon className="w-7 h-7" />
  </a>
);
