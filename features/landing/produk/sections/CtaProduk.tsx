import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function CtaProduk() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="rounded-3xl bg-linear-to-r from-brand via-brand to-navy p-8 text-white sm:p-12">
        <h2 className="type-h2 max-w-md">
          Siap Mengenal Produk Kami Lebih Jauh?
        </h2>
        <p className="type-body mt-3 max-w-lg text-white/85">
          Diskusikan rencana analisa dan pemantauan pasar Anda bersama tim
          profesional berlisensi resmi BAPPEBTI.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <WhatsAppButton>Chat WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}