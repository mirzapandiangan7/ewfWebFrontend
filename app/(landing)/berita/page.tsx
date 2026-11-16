import type { Metadata } from "next";
import BeritaPage from "@/features/landing/berita/BeritaPage";
import { MAX_PAGES, type NewsSort } from "@/features/landing/berita/constants";

export const metadata: Metadata = {
  title: "Berita Pasar | Equityworld Futures",
  description:
    "Berita terbaru komoditi emas, minyak mentah, dan indeks bursa Asia dari sumber yang terverifikasi.",
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; sort?: string }>;
}) {
  const { page, sort } = await searchParams;
  const current = Math.min(
    MAX_PAGES,
    Math.max(1, Number.parseInt(page ?? "1", 10) || 1),
  );
  const order: NewsSort = sort === "oldest" ? "oldest" : "newest";

  return <BeritaPage page={current} sort={order} />;
}