import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/data/content";
import { Reveal, SectionTitle } from "./Primitives";

export const Faq = () => (
  <section id="faq" className="relative bg-[#C8FF2E] text-black py-28 halftone" data-testid="faq-section">
    <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
      <div>
        <SectionTitle kicker="FAQ" title="Preguntas," accent="no pena." tone="light" />
        <Reveal delay={0.1}>
          <div className="mt-10 relative bubble bg-white border-[3px] border-black px-5 py-4 font-bold rotate-2 inline-block max-w-xs">
            Still nervous? Literally everyone was a "no sabo" once.
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="space-y-4">
          {FAQ.map((f, i) => (
            <AccordionItem key={f.q} value={`f-${i}`} className="bg-white border-[3px] border-black shadow-[6px_6px_0_#14091F] px-5" data-testid={`faq-item-${i}`}>
              <AccordionTrigger className="text-left font-extrabold text-base sm:text-lg hover:no-underline" data-testid={`faq-trigger-${i}`}>
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base font-medium leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
