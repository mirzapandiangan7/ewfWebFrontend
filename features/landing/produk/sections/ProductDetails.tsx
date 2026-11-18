"use client";

import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import ProductDetail from "./ProductDetail";
import { productDetails } from "@/features/landing/produk/data";
import { useIsDesktop } from "@/lib/useIsDesktop";

const NAV_LABELS: Record<string, string> = {
  emas: "Emas",
  minyak: "Minyak",
  "hang-seng": "Hang Seng",
  nikkei: "Nikkei",
};

export default function ProductDetails() {
  const isDesktop = useIsDesktop();

  // Mobile / tablet: daftar biasa + navigasi cepat
  if (!isDesktop) {
    return (
      <section
        id="produk"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 pt-6 sm:px-6"
      >
        <nav
          aria-label="Lompat ke produk"
          className="sticky top-[4.25rem] z-20 -mx-4 mb-6 grid grid-cols-4 gap-2 bg-surface/90 px-4 py-2 backdrop-blur sm:-mx-6 sm:px-6"
        >
          {productDetails.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="rounded-full bg-white px-2 py-2 text-center text-[12px] font-semibold text-ink shadow-sm transition active:bg-brand active:text-white"
            >
              {NAV_LABELS[p.slug] ?? p.name}
            </a>
          ))}
        </nav>

        <div className="space-y-8">
          {productDetails.map((p, i) => (
            <ProductDetail key={p.slug} product={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>
    );
  }

  // Desktop: scroll stack
  return (
    <section className="mx-auto max-w-[88rem] px-4 pb-16 pt-24 sm:px-6 lg:pb-24 lg:pt-28">
      <div
        id="produk"
        className="h-[calc(100dvh-1rem)] min-h-[48rem] scroll-mt-24"
      >
        <ScrollStack
          className="product-stack"
          itemDistance={24}
          itemStackDistance={14}
          stackPosition="3%"
          baseScale={0.94}
          itemScale={0.02}
        >
          {productDetails.map((p, i) => (
            <ScrollStackItem
              key={p.slug}
              itemClassName="h-auto! p-0! my-0! rounded-3xl! shadow-none! bg-transparent!"
            >
              <ProductDetail product={p} reverse={i % 2 === 1} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}