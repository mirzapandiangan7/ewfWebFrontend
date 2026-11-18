import RevealGroup from "@/components/ui/RevealGroup";
import { trustBadges } from "@/features/landing/beranda/data";
import { stagger } from "@/lib/reveal";

const SPAN = [
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-2 lg:col-span-1",
  "md:col-span-3 lg:col-span-1",
  "col-span-2 md:col-span-3 lg:col-span-1",
];

export default function TrustBadges() {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 sm:mt-30 sm:px-6">
      <RevealGroup className="grid grid-cols-2 gap-3 rounded-2xl bg-softgrey p-4 md:grid-cols-6 lg:grid-cols-5">
        {trustBadges.map(({ title, desc, icon: Icon }, i) => (
          <div
            key={title}
            style={stagger(i, 80)}
            className={`reveal-item group rounded-xl bg-white p-4 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md ${
              SPAN[i] ?? "lg:col-span-1"
            }`}
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