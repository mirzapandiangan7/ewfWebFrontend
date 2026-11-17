import WhatsAppButton from "@/components/ui/WhatsAppButton";
import RevealGroup from "@/components/ui/RevealGroup";
import { delay } from "@/lib/reveal";

export default function CtaAnalisa() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6">
      <RevealGroup>
        <div className="reveal-zoom grid items-center gap-6 rounded-3xl bg-linear-to-r from-brand via-brand to-navy p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="reveal-item type-h2" style={delay(150)}>
              Ingin Berdiskusi Tentang Analisa Pasar?
            </h2>
            <p className="reveal-item type-body mt-3 max-w-xl text-white/85" style={delay(250)}>
              Tim riset dan konsultasi resmi PT Equityworld Futures siap mendampingi Anda memahami
              dinamika komoditi emas, minyak mentah, serta indeks bursa global.
            </p>
          </div>

          <div
            className="reveal-pop flex flex-col gap-3 sm:flex-row lg:justify-end"
            style={delay(400)}
          >
            <WhatsAppButton />
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}