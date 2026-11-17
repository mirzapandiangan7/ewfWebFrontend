import { ShieldCheck, TrendingUp, GraduationCap } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import RevealGroup from "@/components/ui/RevealGroup";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/features/landing/beranda/data";
import { delay } from "@/lib/reveal";

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-25 sm:px-6">
      <RevealGroup className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="reveal-item">
            <SectionHeading
              eyebrow="Keunggulan Institusional"
              title={
                <>
                  Mengapa Nasabah Memilih{" "}
                  <span className="text-brand">Equityworld Futures</span>
                </>
              }
            />
          </div>
          <p className="reveal-item type-body mt-4 text-muted" style={delay(120)}>
            Lebih dari dua dekade kami mendampingi pelaku pasar dan investor
            Indonesia dalam menavigasi volatilitas komoditas global. Berlandaskan
            integritas, transparansi regulasi BAPPEBTI, dan standar keamanan aset
            berkelas dunia.
          </p>

          <div className="reveal-item mt-8 grid grid-cols-3 gap-4" style={delay(240)}>
            {stats.map((s) => (
              <div key={s.label}>
                <p className="type-h2 text-ink">
                  <CountUp value={s.value} />
                </p>
                <p className="type-micro mt-1 text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div
            className="reveal-right flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            style={delay(200)}
          >
            <ShieldCheck className="shrink-0 text-navy" />
            <div>
              <h3 className="type-h3 text-ink">Terdaftar & Diawasi Ketat</h3>
              <p className="mt-1 text-sm leading-6 text-muted">
                Seluruh transaksi tercatat secara transparan pada bursa resmi dan
                dana nasabah disimpan dalam rekening terpisah di bank kustodian
                yang diawasi BAPPEBTI.
              </p>
            </div>
          </div>

          <div
            className="reveal-right rounded-2xl bg-brand p-5 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={delay(340)}
          >
            <div className="flex gap-4">
              <TrendingUp className="shrink-0" />
              <div>
                <span className="type-label rounded-full bg-white/20 px-2.5 py-0.5 text-[11px]">
                  Riset Terpercaya
                </span>
                <h3 className="type-h3 mt-2">Analisa Pasar Harian Komprehensif</h3>
                <p className="mt-1 text-sm leading-6 text-white/90">
                  Dapatkan pembaruan teknikal pivot point, kalender ekonomi
                  berdampak tinggi, serta riset fundamental komoditas dari tim
                  analis bersertifikasi WPB setiap pagi.
                </p>
              </div>
            </div>
          </div>

          <div
            className="reveal-right flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            style={delay(480)}
          >
            <GraduationCap className="shrink-0 text-navy" />
            <div>
              <h3 className="type-h3 text-ink">Edukasi Terarah untuk Pemula</h3>
              <p className="mt-1 text-sm leading-6 text-muted">
                Bimbingan intensif pengenalan kontrak derivatif, simulasi
                manajemen risiko akun demo, hingga konsultasi personal bersama
                wakil pialang berjangka profesional.
              </p>
            </div>
          </div>
        </div>
      </RevealGroup>
    </section>
  );
}