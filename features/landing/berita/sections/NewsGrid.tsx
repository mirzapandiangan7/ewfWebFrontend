import { ArrowRight } from "lucide-react";
import Pagination from "../components/Pagination";
import type { NewsItem, NewsResponse } from "../types";
import Link from "next/link";
import { MAX_PAGES, SORT_OPTIONS, newsHref, type NewsSort } from "../constants";
import NewsImage from "../components/NewsImage";
import CategoryTag from "../components/CategoryTag";
import { formatDate } from "@/lib/format";

type Props = {
  items: NewsItem[];
  meta: NewsResponse["meta"];
  sort: NewsSort;
};

function NewsCard({ item }: { item: NewsItem }) {
  const Wrapper = item.url ? "a" : "div";
  const link = item.url
    ? { href: item.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...link}
      className="group flex h-full flex-col rounded-2xl bg-white p-3 shadow-sm transition hover:shadow-lg"
    >
      <div className="relative h-44 overflow-hidden rounded-xl bg-navy">
        <NewsImage src={item.image} sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw" />
        <CategoryTag
          category={item.category}
          slug={item.category_slug}
          className="absolute left-3 top-3"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
        <h3 className="line-clamp-2 font-display text-[15px] font-bold leading-snug text-ink">
          {item.title}
        </h3>
        {item.excerpt && (
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-muted">{item.excerpt}</p>
        )}
        <div className="type-micro mt-auto flex items-center justify-between pt-4 text-muted">
          <span>
            {item.published_at ? formatDate(item.published_at) : ""} • {item.read_minutes} min
          </span>
          <ArrowRight size={14} className="transition group-hover:translate-x-0.5 group-hover:text-brand" />
        </div>
      </div>
    </Wrapper>
  );
}

export default function NewsGrid({ items, meta, sort }: Props) {
  const current = meta.current_page;
  const last = Math.min(meta.last_page, MAX_PAGES);

  return (
    <section id="semua-berita" className="mx-auto max-w-7xl scroll-mt-28 px-4 pt-16 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="type-h2 text-ink">Semua Berita</h2>
          <p className="type-body mt-1 text-muted">
            Arsip informasi terverifikasi dan analisis komprehensif
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted">
          <span id="urutkan-label">Urutkan:</span>
          <div
            role="group"
            aria-labelledby="urutkan-label"
            className="inline-flex rounded-lg border border-softgrey bg-white p-1"
          >
            {SORT_OPTIONS.map((o) => (
              <Link
                key={o.value}
                href={newsHref(1, o.value, "berita-terbaru")}
                aria-current={o.value === sort ? "true" : undefined}
                className={`rounded-md px-3.5 py-1.5 font-semibold transition-colors ${
                  o.value === sort ? "bg-navy text-white" : "text-muted hover:text-ink"
                }`}
              >
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <NewsCard key={item.id ?? item.slug ?? item.title} item={item} />
        ))}
      </div>

      {last > 1 && (
        <div className="mt-10 flex justify-end">
          <Pagination current={current} last={last} sort={sort} />
        </div>
      )}
    </section>
  );
}