import RevealGroup from "@/components/ui/RevealGroup";
import { delay, stagger } from "@/lib/reveal";
import { missions } from "../data";

export default function VisionMission() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
      <RevealGroup className="grid gap-6 lg:grid-cols-[2fr_3fr]">
        <div className="reveal-left flex flex-col rounded-3xl bg-navy p-6 text-white shadow-lg sm:p-8">
          <div className="reveal-item" style={delay(250)}>
            <h2 className="type-h2">Visi Kami</h2>
          </div>
          <blockquote
            className="reveal-item mt-6 border-l-2 border-brand/60 pl-4 text-[15px] italic leading-7 text-white/80"
            style={delay(380)}
          >
            “Menjadi perusahaan pialang berjangka yang unggul dan terpercaya,
            dengan standar operasional yang modern, transparan, serta
            memberikan nilai strategis bagi perkembangan industri dan
            perekonomian nasional.”
          </blockquote>
          <div
            className="reveal-item mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/60"
            style={delay(520)}
          >
            <span>Integritas • Profesionalisme • Tata Kelola</span>
            <span className="h-1 w-8 shrink-0 rounded-full bg-brand" />
          </div>
        </div>

        <div className="reveal-right rounded-3xl bg-white p-6 shadow-sm sm:p-8" style={delay(150)}>
          <h2 className="reveal-item type-h2 text-ink" style={delay(300)}>
            Misi Perusahaan
          </h2>
          <ol className="mt-6 space-y-4">
            {missions.map((m, i) => (
              <li
                key={m}
                className="reveal-item flex items-start gap-3"
                style={stagger(i, 110, 420)}
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-[15px] leading-7 text-muted">{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </RevealGroup>
    </section>
  );
}