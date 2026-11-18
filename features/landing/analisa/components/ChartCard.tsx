"use client";

import { useRef, useState } from "react";
import { Maximize2, Move } from "lucide-react";
import TradingViewChart from "@/components/ui/TradingViewChart";
import SlidingTabs from "@/components/ui/SlidingTabs";
import { CHART_INTERVALS, type ChartInterval } from "../constants";

type Props = {
  short: string;
  symbol: string | null;
  /** Widget hanya dibuat saat tab terlihat agar ukurannya benar. */
  active: boolean;
};

export default function ChartCard({ short, symbol, active }: Props) {
  const [interval, setIntervalValue] = useState<ChartInterval>("D");
  const [style, setStyle] = useState<"1" | "3">("1");
  // HP: grafik dikunci agar halaman tetap bisa digulir; ketuk untuk mengaktifkan geser grafik.
  const [interactive, setInteractive] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const meta = CHART_INTERVALS.find((i) => i.value === interval) ?? CHART_INTERVALS[3];

  const toggleFullscreen = () => {
    const el = frameRef.current;
    if (!el) return;

    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      setInteractive(true);
      void el.requestFullscreen?.();
    }
  };

  return (
    <div className="rounded-2xl border border-softgrey p-3 sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="type-h3 text-ink">Grafik Pergerakan {short}</h3>
          <span className="rounded-full bg-navy px-2.5 py-1 text-[10px] font-semibold text-white">
            {style === "1" ? "Candlestick" : "Area"} {meta.name}
          </span>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          {/* Interval: bisa digeser ke samping di HP */}
          <div className="-mx-1 max-w-full overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <SlidingTabs
              variant="soft"
              ariaLabel="Interval grafik"
              value={interval}
              onChange={setIntervalValue}
              options={CHART_INTERVALS.map((i) => ({ value: i.value, label: i.label }))}
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="min-w-0 flex-1 sm:flex-none">
              <SlidingTabs
                variant="soft"
                fill
                ariaLabel="Tipe grafik"
                value={style}
                onChange={setStyle}
                options={[
                  { value: "3", label: "Area Chart" },
                  { value: "1", label: "Candlestick" },
                ]}
              />
            </div>

            {/* Layar penuh tidak didukung di iPhone, jadi disembunyikan di HP */}
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label="Layar penuh"
              className="hidden h-9 w-9 place-items-center rounded-xl bg-softgrey text-ink transition hover:bg-softgrey/70 sm:grid"
            >
              <Maximize2 size={15} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={frameRef}
        className="relative mt-4 h-[22rem] overflow-hidden rounded-xl bg-white sm:h-[26.25rem]"
      >
        {active && symbol ? (
          <TradingViewChart
            symbol={symbol}
            interval={interval}
            style={style}
            className="h-full w-full"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-surface" />
        )}

        {/* HP: lapisan penjaga agar usapan jari di atas grafik tetap menggulir halaman */}
        {!interactive && active && symbol && (
          <button
            type="button"
            onClick={() => setInteractive(true)}
            aria-label="Aktifkan geser grafik"
            className="absolute inset-0 z-10 flex items-end justify-center pb-4 sm:hidden"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-navy/85 px-3.5 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur">
              <Move size={14} /> Ketuk untuk menggeser grafik
            </span>
          </button>
        )}
        {interactive && (
          <button
            type="button"
            onClick={() => setInteractive(false)}
            className="absolute bottom-3 right-3 z-10 rounded-full bg-navy/85 px-3 py-1.5 text-[11px] font-semibold text-white shadow sm:hidden"
          >
            Selesai
          </button>
        )}
      </div>
    </div>
  );
}