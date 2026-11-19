"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AUTH_COPY, type AuthMode } from "../copy";
import AuthForm from "./AuthForm";

const MODES: AuthMode[] = ["signup", "signin"];
const SLIDE = "md:duration-[800ms] md:ease-[cubic-bezier(0.65,0,0.35,1)]";

export default function AuthCard({ initial }: { initial: AuthMode }) {
  const [mode, setMode] = useState<AuthMode>(initial);

  const toggle = () => {
    const next: AuthMode = mode === "signup" ? "signin" : "signup";
    setMode(next);
    // Samakan alamat dan judul tab tanpa memuat ulang halaman, agar animasi tidak terputus
    window.history.replaceState(null, "", AUTH_COPY[next].path);
    document.title = AUTH_COPY[next].title;
  };

  return (
    <section
      data-mode={mode}
      className="group relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-ink/15 md:h-[38rem]"
    >
      {/* Panel oranye: banner di atas (HP), separuh kartu yang bergeser (desktop) */}
      <aside
        className={`relative z-10 p-3 md:absolute md:inset-y-0 md:left-0 md:w-1/2 md:p-5 md:transition-transform md:motion-reduce:transition-none md:group-data-[mode=signin]:translate-x-full ${SLIDE}`}
      >
        <div className="relative h-32 overflow-hidden rounded-3xl md:h-full">
          <div className="auth-cover-a absolute inset-0 transition-opacity duration-700 group-data-[mode=signin]:opacity-0" />
          <div className="auth-cover-b absolute inset-0 opacity-0 transition-opacity duration-700 group-data-[mode=signin]:opacity-100" />

          {/* Logo meluncur ke sudut seberang mengikuti panel. Kotaknya berukuran tetap (4rem di desktop), jadi perhitungan left di bawah tetap benar apa pun rasio gambar logonya. */}
          <div
            className={`absolute left-4 top-4 h-14 w-14 md:left-6 md:top-6 md:h-16 md:w-16 md:transition-[left] md:motion-reduce:transition-none md:group-data-[mode=signin]:left-[calc(100%-5.5rem)] ${SLIDE}`}
          >
            <Image
              src="/images/logoewf.webp"
              alt="Logo Equityworld Futures"
              width={128}
              height={128}
              priority
              className="auth-float h-full w-full object-contain drop-shadow-lg"
            />
          </div>

          <p className="absolute bottom-4 left-4 font-display text-lg font-extrabold text-white md:hidden">
            Equityworld Futures
          </p>

          {/* Desktop: teks dan tombol pindah mode */}
          <div className="absolute inset-x-6 bottom-6 hidden md:grid">
            {MODES.map((m) => {
              const copy = AUTH_COPY[m];
              const isActive = mode === m;
              // Panah menunjukkan arah panel akan bergeser:
              // di mode Masuk panel ada di kanan, tombol "Daftar" menggesernya ke kiri.
              const slidesLeft = m === "signin";
              return (
                <div
                  key={m}
                  data-active={isActive}
                  aria-hidden={!isActive}
                  inert={!isActive}
                  className="col-start-1 row-start-1 text-white opacity-0 transition-opacity duration-300 data-[active=true]:opacity-100 data-[active=true]:delay-300"
                >
                  <h2 className="font-display text-2xl font-extrabold leading-tight">
                    {copy.coverTitle}
                  </h2>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                    {copy.coverText}
                  </p>
                  <button
                    type="button"
                    onClick={toggle}
                    className="group/btn mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-[13px] font-semibold text-white backdrop-blur transition hover:bg-white hover:text-ink"
                  >
                    {slidesLeft && (
                      <ArrowLeft
                        size={14}
                        className="transition-transform group-hover/btn:-translate-x-0.5"
                      />
                    )}
                    {copy.switchAction}
                    {!slidesLeft && (
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/btn:translate-x-0.5"
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </aside>

      {/* Dua form selalu ada; yang tidak aktif diberi inert. Daftar di kanan, Masuk di kiri. */}
      <div className="grid md:block">
        {MODES.map((m) => (
          <AuthForm
            key={m}
            mode={m}
            active={mode === m}
            onSwitch={toggle}
            className={`col-start-1 row-start-1 md:absolute md:inset-y-0 md:w-1/2 ${
              m === "signup" ? "md:left-1/2" : "md:left-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}