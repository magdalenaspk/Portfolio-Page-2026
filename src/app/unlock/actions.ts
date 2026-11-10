"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ACCESS_COOKIE, isPasswordCorrect, sessionToken } from "@/lib/access";

export type UnlockState = { error: boolean };

export async function unlockAction(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const password = String(formData.get("password") ?? "");
  const returnTo = String(formData.get("returnTo") ?? "/");

  if (!isPasswordCorrect(password)) return { error: true };

  cookies().set(ACCESS_COOKIE, sessionToken(password), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  // Only return to a path on this site.
  redirect(returnTo.startsWith("/") && !returnTo.startsWith("//") ? returnTo : "/");
}
