import type { Metadata } from "next";
import AuthCard from "@/features/auth/components/AuthCard";

export const metadata: Metadata = {
  title: "Masuk | Equityworld Futures",
  description: "Masuk ke akun Equityworld Futures Anda.",
  robots: { index: false },
};

export default function Page() {
  return <AuthCard initial="signin" />;
}