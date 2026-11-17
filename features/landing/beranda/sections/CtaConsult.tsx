import RevealGroup from "@/components/ui/RevealGroup";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { delay } from "@/lib/reveal";

export default function CtaConsult() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <RevealGroup>
        <div className="reveal-zoom grid items-center gap-8 rounded-3xl bg-linear-to-r from-navy via-navy to-brand p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="reveal-item type-h2" style={delay(200)}>
              Punya Pertanyaan Seputar Perdagangan Berjangka?
              <span className="block">Tim Kami Siap Membantu.</span>
            </h2>
            <p className="reveal-item type-body mt-3 max-w-xl text-white/80" style={delay(320)}>
              Konsultasi gratis bersama wakil pialang berjangka profesional
              berlisensi resmi. Pelajari mekanisme pasar, risiko, dan tata cara
              transaksi dengan nyaman.
            </p>
          </div>

          <div
            className="reveal-pop flex flex-col gap-3 sm:flex-row lg:justify-end"
            style={delay(500)}
          >
            <WhatsAppButton>Chat WhatsApp Resmi</WhatsAppButton>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}