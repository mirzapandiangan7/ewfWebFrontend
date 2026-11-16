import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaLegal() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6">
      <div className="rounded-3xl bg-navy p-8 text-center text-white sm:p-12">
        <h2 className="type-h2">Ingin Mengenal Kami Lebih Dekat?</h2>
        <p className="type-body mx-auto mt-3 max-w-xl text-white/80">
          Konsultasikan kebutuhan investasi berjangka Anda bersama wakil
          pialang berlisensi resmi EWF.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <WhatsAppButton>Chat WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}