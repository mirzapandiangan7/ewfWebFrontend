import RevealGroup from "@/components/ui/RevealGroup";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { delay } from "@/lib/reveal";

export default function CtaLegal() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6">
      <RevealGroup>
        <div className="reveal-zoom rounded-3xl bg-navy p-8 text-center text-white sm:p-12">
          <h2 className="reveal-item type-h2" style={delay(200)}>
            Ingin Mengenal Kami Lebih Dekat?
          </h2>
          <p className="reveal-item type-body mx-auto mt-3 max-w-xl text-white/80" style={delay(320)}>
            Konsultasikan kebutuhan investasi berjangka Anda bersama wakil
            pialang berlisensi resmi EWF.
          </p>
          <div
            className="reveal-pop mt-6 flex flex-wrap justify-center gap-3"
            style={delay(500)}
          >
            <WhatsAppButton />
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}