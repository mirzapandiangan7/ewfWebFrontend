import RevealGroup from "@/components/ui/RevealGroup";
import { trustBadges } from "@/features/landing/beranda/data";
import { stagger } from "@/lib/reveal";

export default function TrustBadges() {
  return (
    <section className="mx-auto mt-30 max-w-7xl px-4 sm:px-6">
      <RevealGroup className="grid grid-cols-2 gap-3 rounded-2xl bg-softgrey p-4 md:grid-cols-3 lg:grid-cols-5">
        {trustBadges.map(({ title, desc, icon: Icon }, i) => (
          <div
            key={title}
            style={stagger(i, 80)}
            className="reveal-item group rounded-xl bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <Icon
              className="mx-auto text-brand transition-transform duration-300 group-hover:scale-110"
              size={22}
            />
            <p className="mt-2 text-[13px] font-semibold text-ink">{title}</p>
            <p className="type-micro mt-1 text-muted">{desc}</p>
          </div>
        ))}
      </RevealGroup>
    </section>
  );
}