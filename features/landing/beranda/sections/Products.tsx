import CircularGallery from "@/components/ui/CircularGallery";
import RevealGroup from "@/components/ui/RevealGroup";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/features/landing/shared/data/products";
import { delay } from "@/lib/reveal";

const items = products.map((p) => ({
  image: p.image,
  text: p.name,
  category: p.category,
  description: p.desc,
  alt: p.name,
}));

export default function Products() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-55 sm:px-6">
      <RevealGroup threshold={0.1}>
        <div className="reveal-item">
          <SectionHeading
            eyebrow="Portofolio Pasar"
            title="Produk yang Kami Tawarkan"
            desc="Perdagangkan komoditi unggulan global dan indeks bursa terkemuka Asia."
          />
        </div>

        <div className="reveal-zoom relative h-[37.5rem] overflow-hidden" style={delay(150)}>
          <CircularGallery
            items={items}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.06}
            font="700 28px var(--font-jakarta), sans-serif"
            itemSize={1.05}
            autoScroll={1}
            wheelScroll={false}
          />
        </div>
      </RevealGroup>
    </section>
  );
}