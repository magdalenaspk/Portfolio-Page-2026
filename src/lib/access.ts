import { createHash } from "crypto";
import { cookies } from "next/headers";

// The work sections are password protected. The repo is public, so only
// one-way hashes live here, never the password itself.
// To change the password, replace both hashes:
//   PASSWORD_HASH = sha256(password)
//   SESSION_CHECK = sha256(sha256("session:" + password))
const PASSWORD_HASH = "0b8dfc7f01c883e1f2c6aa4e3b873cb3d87fc5e2f7f9d58140f28f3d5d5576dc";
const SESSION_CHECK = "61368a7e6a95013b12839e604fef5160ba7d765bca6657d7b6affe0040afb03d";

export const ACCESS_COOKIE = "portfolio_access";

const sha256 = (value: string) => createHash("sha256").update(value).digest("hex");

export function isPasswordCorrect(password: string): boolean {
  return sha256(password) === PASSWORD_HASH;
}

// Token stored in the cookie after a correct password.
export function sessionToken(password: string): string {
  return sha256(`session:${password}`);
}

export function isUnlocked(): boolean {
  const token = cookies().get(ACCESS_COOKIE)?.value;
  return !!token && sha256(token) === SESSION_CHECK;
}
