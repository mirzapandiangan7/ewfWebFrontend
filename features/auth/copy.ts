export type AuthMode = "signup" | "signin";

type Copy = {
  path: string;
  title: string;
  heading: string;
  subtitle: string;
  submit: string;
  submitting: string;
  /** Hanya untuk mode daftar */
  passwordHint: string | null;
  /** Teks ajakan pindah mode (HP: di bawah form, desktop: di panel oranye) */
  switchLead: string;
  switchAction: string;
  coverTitle: string;
  coverText: string;
};

export const AUTH_COPY: Record<AuthMode, Copy> = {
  signup: {
    path: "/daftar",
    title: "Daftar | Equityworld Futures",
    heading: "Buat Akun",
    subtitle: "Perjalanan Anda di perdagangan berjangka dimulai dari sini",
    submit: "Buat Akun",
    submitting: "Membuat akun…",
    passwordHint: "Minimal 8 karakter, kombinasi huruf dan angka.",
    switchLead: "Sudah punya akun?",
    switchAction: "Masuk",
    coverTitle: "Sudah punya akun?",
    coverText: "Masuk untuk memantau pasar dan melanjutkan analisa Anda.",
  },
  signin: {
    path: "/masuk",
    title: "Masuk | Equityworld Futures",
    heading: "Masuk ke Akun",
    subtitle: "Masuk untuk mengakses akun Equityworld Futures Anda",
    submit: "Masuk",
    submitting: "Memproses…",
    passwordHint: null,
    switchLead: "Belum punya akun?",
    switchAction: "Daftar",
    coverTitle: "Baru di Equityworld Futures?",
    coverText: "Buat akun dan mulai pantau pasar komoditi dengan data real-time.",
  },
};