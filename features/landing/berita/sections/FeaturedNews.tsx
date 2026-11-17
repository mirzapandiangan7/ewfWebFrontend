import { formatDate } from "@/lib/format";
import { delay } from "@/lib/reveal";
import RevealGroup from "@/components/ui/RevealGroup";
import CategoryTag from "../components/CategoryTag";
import NewsImage from "../components/NewsImage";
import type { NewsItem } from "../types";
import type { NewsSort } from "../constants";

const COPY: Record<NewsSort, { title: string; desc: string }> = {
  newest: {
    title: "Berita Terbaru",
    desc: "Perkembangan pasar komoditi dan indeks bursa terkini hari ini",
  },
  oldest: {
    title: "Berita Terlama",
    desc: "Arsip berita paling awal yang tersedia",
  },
};

export default function FeaturedNews({ item, sort }: { item: NewsItem; sort: NewsSort }) {
  const copy = COPY[sort];
  const Wrapper = item.url ? "a" : "div";
  const link = item.url
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <section id="berita-terbaru" className="mx-auto max-w-7xl scroll-mt-28 px-4 pt-16 sm:px-6">
      <RevealGroup threshold={0.1}>
        <div className="reveal-item">
          <h2 className="type-h2 text-ink">{copy.title}</h2>
          <p className="type-body mt-1 text-muted">{copy.desc}</p>
        </div>

        <Wrapper
          {...link}
          className="reveal-zoom group relative mt-6 block h-[24rem] overflow-hidden rounded-3xl bg-navy text-white sm:h-[28rem]"
          style={delay(150)}
        >
          <NewsImage src={item.image} sizes="(min-width: 1280px) 1232px, 100vw" priority settle />
          <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/50 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
            <div className="reveal-item" style={delay(400)}>
              <CategoryTag category={item.category} slug={item.category_slug} />
            </div>
            <h3
              className="reveal-item type-h2 mt-3 max-w-3xl transition group-hover:text-white/90"
              style={delay(500)}
            >
              {item.title}
            </h3>
            {item.excerpt && (
              <p
                className="reveal-item type-body mt-3 line-clamp-2 max-w-3xl text-white/80"
                style={delay(600)}
              >
                {item.excerpt}
              </p>
            )}
            <p
              className="reveal-item type-micro mt-4 flex flex-wrap items-center gap-x-3 border-t border-white/15 pt-4 text-white/70"
              style={delay(700)}
            >
              {item.published_at && <span>{formatDate(item.published_at, { long: true })}</span>}
              <span aria-hidden="true">•</span>
              <span>{item.read_minutes} menit baca</span>
              <span aria-hidden="true">•</span>
              <span className="font-semibold text-bull">Berita Pasar</span>
            </p>
          </div>
        </Wrapper>
      </RevealGroup>
    </section>
  );
}