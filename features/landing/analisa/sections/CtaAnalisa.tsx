import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaAnalisa() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-4 sm:px-6">
      <div className="grid items-center gap-6 rounded-3xl bg-linear-to-r from-brand via-brand to-navy p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="type-h2">Ingin Berdiskusi Tentang Analisa Pasar?</h2>
          <p className="type-body mt-3 max-w-xl text-white/85">
            Tim riset dan konsultasi resmi PT Equityworld Futures siap mendampingi Anda memahami
            dinamika komoditi emas, minyak mentah, serta indeks bursa global.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <WhatsAppButton>Chat WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}