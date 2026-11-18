import Image from "next/image";
import { Calculator, Info, Table } from "lucide-react";
import StrokeText from "@/components/ui/StrokeText";
import SpecularLink from "@/components/ui/SpecularLink";
import { HERO_FRAME } from "@/features/landing/shared/hero";
import { delay } from "@/lib/reveal";

const HERO_TEXT_SIZE = "clamp(2rem, 5vw, 5.5rem)";

export default function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className={`${HERO_FRAME} flex-col lg:flex-row`}>
        {/* Gambar: banner utuh di atas teks (HP/tablet), latar penuh di desktop */}
        <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
          <Image
            src="/images/analisa-hero.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-zoom object-cover"
          />
          {/* HP: gambar menyatu ke navy di bawah. Desktop: gradien ke kanan seperti semula. */}
          <div className="absolute inset-0 bg-linear-to-b from-navy/50 via-transparent to-navy lg:bg-linear-to-r lg:from-navy/90 lg:via-navy/50 lg:to-transparent" />

          <span
            aria-hidden="true"
            className="hero-rise pointer-events-none absolute inset-x-0 bottom-2 select-none text-center font-display text-[clamp(3.5rem,18vw,6rem)] font-extrabold leading-none text-white/25 lg:inset-x-auto lg:-bottom-6 lg:right-10 lg:text-[clamp(5rem,16vw,14rem)] lg:text-white/10"
            style={delay(300)}
          >
            ANALISA
          </span>
        </div>

        {/* Penahan agar logo dan menu di Navbar tetap terbaca di atas gambar */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-navy/70 to-transparent lg:h-32" />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-4 sm:px-6 sm:pb-12 lg:pb-32 lg:pt-40">
          <h1
            aria-label="Analisa Pasar"
            className="flex flex-nowrap items-center gap-x-[0.1em]"
            style={{ fontSize: HERO_TEXT_SIZE }}
          >
            <StrokeText
              text="ANALISA"
              align="left"
              size={HERO_TEXT_SIZE}
              strokeColor="#f7f5f2"
              fillColor="#f7f5f2"
              className="w-auto! shrink-0"
            />
            <StrokeText
              text="PASAR"
              align="left"
              size={HERO_TEXT_SIZE}
              strokeColor="#ec7013"
              fillColor="#ec7013"
              className="w-auto! shrink-0"
            />
          </h1>

          <p className="hero-rise type-body mt-4 max-w-xl text-white/80" style={delay(450)}>
            Telusuri data historis dan hitung level pivot point untuk membaca area support dan
            resistance secara presisi dan objektif.
          </p>

          <div className="hero-rise mt-7 flex flex-wrap gap-3" style={delay(600)}>
            <SpecularLink href="/analisa?tab=kalkulator#panel" variant="primary" className="grow sm:grow-0">
              <Calculator size={16} /> Hitung Pivot Point
            </SpecularLink>
            <SpecularLink href="/analisa?tab=historis#panel" variant="ghost" className="grow sm:grow-0">
              <Table size={16} /> Lihat Data Historis
            </SpecularLink>
          </div>

          <p
            className="hero-rise type-micro mt-5 flex max-w-lg items-start gap-2 text-white/50"
            style={delay(750)}
          >
            <Info size={13} className="mt-px shrink-0" />
            Alat bantu analisa, bukan ajakan atau saran investasi. Terdaftar & diawasi BAPPEBTI.
          </p>
        </div>
      </div>
    </section>
  );
}