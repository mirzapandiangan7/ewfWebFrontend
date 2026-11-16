/** Jumlah halaman berita maksimum yang bisa dibuka pengunjung. */
export const MAX_PAGES = 5;

export type NewsSort = "newest" | "oldest";

export const SORT_OPTIONS: { value: NewsSort; label: string }[] = [
  { value: "newest", label: "Terbaru" },
  { value: "oldest", label: "Terlama" },
];

export function newsHref(page: number, sort: NewsSort, hash = "semua-berita") {
  const params = new URLSearchParams();
  if (sort === "oldest") params.set("sort", "oldest");
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return `/berita${qs ? `?${qs}` : ""}#${hash}`;
}