"use server";

import { cookies } from "next/headers";
import { ACCESS_COOKIE, isPasswordCorrect, sessionToken } from "@/lib/access";

export type UnlockState = { error: boolean; unlocked?: boolean };

export async function unlockAction(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const password = String(formData.get("password") ?? "");

  if (!isPasswordCorrect(password)) return { error: true };

  cookies().set(ACCESS_COOKIE, sessionToken(password), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  // The form reloads the page itself, so the server renders it unlocked.
  return { error: false, unlocked: true };
}
