import type { Metadata } from "next";
import AuthCard from "@/features/auth/components/AuthCard";

export const metadata: Metadata = {
  title: "Daftar | Equityworld Futures",
  description: "Buat akun Equityworld Futures dan mulai pantau pasar komoditi.",
  robots: { index: false },
};

export default function Page() {
  return <AuthCard initial="signup" />;
}