import Image from "next/image";
import { ArrowRight, BadgeCheck, Lock, Network } from "lucide-react";
import StrokeText from "@/components/ui/StrokeText";
import GlassChip from "@/components/ui/GlassChip";
import SpecularLink from "@/components/ui/SpecularLink";
import { HERO_FRAME, HERO_INNER } from "@/features/landing/shared/hero";
import { delay } from "@/lib/reveal";

const HERO_TEXT_SIZE = "clamp(1.5rem, 4.2vw, 3.25rem)";

export default function Hero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className={HERO_FRAME}>
        <Image
          src="/images/tentang-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-zoom object-cover"
        />
        <div className="absolute inset-0 bg-navy/70 lg:bg-transparent lg:bg-linear-to-r lg:from-navy/90 lg:via-navy/60 lg:to-navy/20" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-navy/40" />

        <p
          aria-hidden="true"
          className="hero-rise pointer-events-none absolute inset-x-0 -bottom-[0.2em] select-none text-center font-display text-[clamp(2.5rem,11vw,4rem)] font-extrabold leading-none text-white/[0.07] md:text-[clamp(4rem,17vw,12rem)]"
          style={delay(300)}
        >
          EQUITYWORLD
        </p>

        <div className={HERO_INNER}>
          <h1 aria-label="Mengenal Lebih Dekat Trust by Equityworld">
            <StrokeText
              text="MENGENAL LEBIH DEKAT"
              align="left"
              size={HERO_TEXT_SIZE}
              strokeColor="#ffffff"
              fillColor="#ffffff"
            />
            <StrokeText
              text="TRUST BY EQUITYWORLD"
              align="left"
              size={HERO_TEXT_SIZE}
              strokeColor="#ec7013"
              fillColor="#ec7013"
              className="-mt-[0.43em]"
            />
          </h1>

          <p className="hero-rise mt-6 max-w-xl text-[15px] leading-7 text-white/80" style={delay(450)}>
            Dedikasi lebih dari dua dekade menghadirkan ekosistem perdagangan
            berjangka yang transparan, teregulasi resmi BAPPEBTI, dan
            berorientasi pada keamanan investasi nasabah di seluruh Indonesia.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            {/* Baris Atas: 2 Pill */}
            <ul className="flex flex-wrap gap-2">
              <li className="hero-rise" style={delay(650)}>
                <GlassChip>
                  <span className="h-1.5 w-1.5 rounded-full bg-bull" /> Pialang Berjangka Terdaftar BAPPEBTI
                </GlassChip>
              </li>
              <li className="hero-rise" style={delay(730)}>
                <GlassChip>
                  <BadgeCheck size={13} className="text-sapphire" /> Izin No. 549/BAPPEBTI/SI/IX/2004
                </GlassChip>
              </li>
            </ul>

            {/* Baris Bawah: 3 Pill */}
            <ul className="flex flex-wrap gap-2">
              <li className="hero-rise" style={delay(810)}>
                <GlassChip>20+ Tahun Pengalaman Pialang</GlassChip>
              </li>
              <li className="hero-rise" style={delay(890)}>
                <GlassChip>6 Kantor Operasional di 4 Kota</GlassChip>
              </li>
              <li className="hero-rise" style={delay(970)}>
                <GlassChip tone="green">
                  <Lock size={12} /> 100% Rekening Terpisah (Segregated)
                </GlassChip>
              </li>
            </ul>
          </div>

          <div className="hero-rise mt-7 flex flex-wrap gap-3" style={delay(1100)}>
            <SpecularLink href="#profil" variant="primary" className="grow sm:grow-0">
              Profil Perusahaan <ArrowRight size={16} />
            </SpecularLink>
            <SpecularLink href="#legalitas" variant="ghost" className="grow sm:grow-0">
              <Network size={16} /> Struktur Legalitas
            </SpecularLink>
          </div>
        </div>
      </div>
    </section>
  );
}