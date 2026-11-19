import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="relative grid min-h-dvh place-items-center bg-softgrey px-4 py-20 sm:px-6">
      <Link
        href="/"
        className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-sm transition hover:shadow-md sm:left-6 sm:top-6"
      >
        <ArrowLeft size={14} /> Beranda
      </Link>
      {children}
    </main>
  );
}