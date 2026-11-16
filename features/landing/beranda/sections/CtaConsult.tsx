import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaConsult() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="grid items-center gap-8 rounded-3xl bg-linear-to-r from-navy via-navy to-brand p-8 text-white sm:p-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="type-h2">
            Punya Pertanyaan Seputar Perdagangan Berjangka?
            <span className="block">Tim Kami Siap Membantu.</span>
          </h2>
          <p className="type-body mt-3 max-w-xl text-white/80">
            Konsultasi gratis bersama wakil pialang berjangka profesional
            berlisensi resmi. Pelajari mekanisme pasar, risiko, dan tata cara
            transaksi dengan nyaman.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <WhatsAppButton>Chat WhatsApp Resmi</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}