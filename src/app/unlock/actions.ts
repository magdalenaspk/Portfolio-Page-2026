"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function unlockAction(formData: FormData) {
  const password = formData.get("password") as string;
  if (password === "magdalena2026") {
    cookies().set("portfolio_auth", "magdalena2026", {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
      sameSite: "lax",
    });
    redirect("/");
  }
  redirect("/unlock?error=1");
}
