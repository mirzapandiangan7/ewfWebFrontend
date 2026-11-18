import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import RevealGroup from "@/components/ui/RevealGroup";
import type { ProductDetail as Product } from "@/features/landing/produk/data";
import { delay, stagger } from "@/lib/reveal";

type Props = { product: Product; reverse?: boolean };

export default function ProductDetail({ product: p, reverse }: Props) {
  const chip = reverse ? "bg-white shadow-sm" : "bg-softgrey";
  // Foto masuk dari sisi tempatnya berada, jadi arahnya bergantian tiap kartu
  const imageFrom = reverse ? "reveal-right" : "reveal-left";

  return (
    <article
      id={p.slug}
      className={`scroll-mt-32 rounded-3xl border border-black/5 p-5 shadow-xl lg:flex lg:min-h-[38rem] lg:items-center lg:p-6 ${
        reverse ? "bg-softgrey" : "bg-white"
      }`}
    >
      <RevealGroup
        threshold={0.3}
        className="grid w-full gap-6 lg:grid-cols-2 lg:items-stretch lg:gap-8"
      >
        <div className={`${reverse ? "lg:order-2" : ""} ${imageFrom} lg:h-full`}>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-navy md:aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <Image
              src={p.image}
              alt={p.name}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="reveal-image object-cover object-center"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/50 via-transparent to-transparent" />
            <span
              className="reveal-pop absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-ink backdrop-blur"
              style={delay(500)}
            >
              {p.category}
            </span>
          </div>
        </div>

        <div>
          <h2 className="reveal-item type-h2 text-ink" style={delay(150)}>
            {p.name}
          </h2>
          <p
            className="reveal-item mt-1 text-[13px] font-semibold text-brand"
            style={delay(220)}
          >
            {p.ticker}
          </p>
          <p
            className="reveal-item mt-3 text-[14px] leading-6 text-muted"
            style={delay(290)}
          >
            {p.desc}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {p.highlights.map(({ icon: Icon, text }, i) => (
              <li
                key={text}
                style={stagger(i, 90, 400)}
                className={`reveal-pop inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] font-medium text-ink ${chip}`}
              >
                <Icon size={14} className="text-brand" />
                {text}
              </li>
            ))}
          </ul>

          <dl className="mt-5 grid grid-cols-2 gap-3">
            {p.facts.map((f, i) => (
              <div
                key={f.label}
                style={stagger(i, 70, 500)}
                className={`reveal-item rounded-xl p-3.5 ${chip} ${f.wide ? "col-span-2" : ""}`}
              >
                <dt className="type-micro text-muted">{f.label}</dt>
                <dd className="mt-0.5 text-[14px] font-semibold leading-snug text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <p
            className="reveal-item mt-3 text-[11px] leading-4 text-muted"
            style={delay(880)}
          >
            Penyelesaian tunai (cash settlement). Komisi, biaya menginap, dan
            ketentuan lengkap mengikuti dokumen kontrak resmi.
          </p>

          <div
            className="reveal-item mt-5 flex flex-wrap items-center gap-4"
            style={delay(950)}
          >
            <Link
              href="/analisa"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-brand/90"
            >
              Lihat Analisa <ChevronRight size={14} />
            </Link>
            <Link
              href="/analisa"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-muted hover:text-ink"
            >
              Data Historis <ChevronRight size={12} />
            </Link>
          </div>
        </div>
      </RevealGroup>
    </article>
  );
}