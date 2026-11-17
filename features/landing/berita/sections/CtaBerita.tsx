import WhatsAppButton from "@/components/ui/WhatsAppButton";
import RevealGroup from "@/components/ui/RevealGroup";
import { delay } from "@/lib/reveal";

export default function CtaBerita() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6">
      <RevealGroup>
        <div className="reveal-zoom rounded-3xl bg-linear-to-r from-brand via-brand to-navy p-8 text-white sm:p-12">
          <h2 className="reveal-item type-h2 max-w-xl" style={delay(150)}>
            Ingin Memahami Dampak Berita pada Pergerakan Pasar?
          </h2>
          <p className="reveal-item type-body mt-3 max-w-xl text-white/85" style={delay(250)}>
            Konsultasikan analisa teknikal dan fundamental Anda bersama tim profesional terdaftar PT
            Equityworld Futures untuk navigasi perdagangan berjangka yang objektif.
          </p>

          <div className="reveal-pop mt-7 flex flex-wrap gap-3" style={delay(400)}>
            <WhatsAppButton />
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}