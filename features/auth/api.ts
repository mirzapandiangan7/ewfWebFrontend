import { api } from "@/lib/api";

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

export type AuthResponse = { token: string; user: AuthUser };
type Credentials = { email: string; password: string };

const post = (path: string, body: Credentials) =>
  api<AuthResponse>(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

export const register = (c: Credentials) => post("/auth/register", c);
export const login = (c: Credentials) => post("/auth/login", c);

const TOKEN_KEY = "ewf_token";
const USER_KEY = "ewf_user";

/** Simpan sesi di browser. Catatan keamanan ada di bagian catatan akhir. */
export function saveSession(res: AuthResponse) {
  try {
    localStorage.setItem(TOKEN_KEY, res.token);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
  } catch {
    // Penyimpanan diblokir (mode privat); sesi hanya berlaku sampai halaman ditutup
  }
}