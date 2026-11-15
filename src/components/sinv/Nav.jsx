import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV, LINKS } from "@/data/content";
import { scrollToId } from "@/lib/lenis";
import { Logo } from "./Primitives";

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#14091F]/85 backdrop-blur-xl border-b-2 border-[#C8FF2E]/20" data-testid="site-nav">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-8 h-16">
        <button onClick={() => go("top")} aria-label="Back to top" data-testid="nav-logo" className="wiggle">
          <Logo size="sm" />
        </button>
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              data-testid={`nav-${n.id}-link`}
              className="nav-link font-semibold text-sm text-white/90 hover:text-[#C8FF2E] transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LINKS.register}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-book-button"
            className="hidden sm:inline-flex btn-pop bg-[#C8FF2E] text-black font-bold text-sm px-5 py-2.5 border-2 border-black shadow-[4px_4px_0_#E0007A]"
          >
            Book a class
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            data-testid="nav-hamburger-button"
            className="lg:hidden w-11 h-11 grid place-items-center bg-[#E0007A] text-white border-2 border-black"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 95% 0%)" }}
            animate={{ clipPath: "circle(150% at 95% 0%)" }}
            exit={{ clipPath: "circle(0% at 95% 0%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="lg:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] bg-[#C8FF2E] text-black overflow-y-auto halftone"
            data-testid="mobile-menu"
          >
            <ul className="px-6 py-8 space-y-1">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    data-testid={`mobile-nav-${n.id}-link`}
                    className="font-bangers text-5xl uppercase tracking-wide hover:text-[#E0007A] transition-colors"
                    style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-10">
              <a
                href={LINKS.register}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-menu-book-button"
                className="block text-center bg-[#E0007A] text-white font-bold text-lg py-4 border-[3px] border-black shadow-[6px_6px_0_#14091F]"
              >
                Book a class
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
