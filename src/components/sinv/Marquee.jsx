import { MARQUEE } from "@/data/content";

export const Marquee = () => {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="relative z-10 -my-6 bg-[#E0007A] border-y-[4px] border-black -rotate-2 scale-[1.04] overflow-hidden py-4" data-testid="marquee" aria-hidden="true">
      <div className="marquee-track flex w-max">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0">
            {row.map((t, i) => (
              <span key={`${k}-${i}`} className="font-bangers uppercase text-white text-3xl sm:text-5xl tracking-wide px-6 flex items-center gap-6 whitespace-nowrap">
                {t}
                <span className="text-[#C8FF2E]">✶</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
